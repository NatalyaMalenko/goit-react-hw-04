import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ photos, onImageClick }) {
  return (
    <ul className={css.gallery}>
      {photos.map((photo) => (
        <li key={photo.id} className={css.galleryCard}>
          <ImageCard photo={photo} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}
