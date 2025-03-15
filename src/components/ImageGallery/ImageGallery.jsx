import css from "./ImageGallery.module.css";

export default function ImageGallery({ photos }) {
  return (
    <ul className={css.gallery}>
      {photos.length > 0
        ? photos.map((photo) => (
            <li key={photo.id} className={css.galleryCard}></li>
          ))
        : []}
    </ul>
  );
}
