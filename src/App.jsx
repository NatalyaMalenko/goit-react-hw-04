import { useState, useEffect } from "react";

import "./App.css";
import { SearchBar } from "./components/SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import fetchPhoto from "./fetchPhoto";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Spinner from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const [selectPhoto, setSelectPhoto] = useState(null);

  function openModal(photo) {
    setSelectPhoto(photo);
  }

  function closeModal() {
    setSelectPhoto(null);
  }
  const handleSubmit = (term) => {
    if (!term.trim()) {
      toast.error("Please enter a search term!");
      return;
    }
    setSearchTerm(term);
    setPage(1);
    setPhotos([]);
  };

  useEffect(() => {
    if (!searchTerm) {
      return;
    }

    const fetchImages = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const images = await fetchPhoto(searchTerm, page);
        if (images.length === 0) {
          toast.error("No images found!");
          return;
        }
        setPhotos((prevImages) => {
          return page === 1 ? images : [...prevImages, ...images];
        });
      } catch {
        setError(true);
        toast.error("Error! Please, reload page!");
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [searchTerm, page]);

  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={handleSubmit} />
      {error && <ErrorMessage error={error} />}
      <ImageGallery photos={photos} onImageClick={openModal} />
      {isLoading && <Spinner />}
      {photos.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={() => setPage(page + 1)}>
          Load more {page}
        </LoadMoreBtn>
      )}

      <ImageModal onClose={closeModal} photo={selectPhoto} />
    </div>
  );
}

export default App;
