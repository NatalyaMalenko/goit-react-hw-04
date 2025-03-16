import css from "./ImageCard.module.css";

export default function ImageCard({ photo, onClick }) {
  return (
    <div className={css.card} onClick={() => onClick(photo)}>
      <img
        className={css.galleryImg}
        src={photo.urls.small}
        alt={photo.description}
      />
      <div className={css.info}>
        <div className={css.infoList}>
          <span className={css.infoItem}>Likes:</span>
          <span className={css.infoItemValue}>{photo.likes}</span>
        </div>
        <div className={css.infoList}>
          <span className={css.infoItem}>Description:</span>
          <span className={css.infoItemValue}>{photo.description}</span>
        </div>
        <div className={css.infoList}>
          <span className={css.infoItem}>Author:</span>
          <span className={css.infoItemValue}>{photo.user.name}</span>
        </div>
        <div className={css.infoList}>
          <span className={css.infoItem}>Location:</span>
          <span className={css.infoItemValue}>{photo.user.location}</span>
        </div>
      </div>
    </div>
  );
}
