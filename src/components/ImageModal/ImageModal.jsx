import React from "react";
import Modal from "react-modal";

import css from "./ImageModal.module.css";

export default function ImageModal({ isOpen, onClose, photo }) {
  if (!photo) return;
  return (
    <>
      <Modal
        className={css.modal}
        overlayClassName={`${css.overlay} ${isOpen ? css.overlayIsOpen : ""}`}
        isOpen={isOpen}
        onRequestClose={onClose}
      >
        <button className={css.modalCloseButton} onClick={() => onClose()}>
          X
        </button>
        <img
          className={css.modalImage}
          src={photo.urls.regular}
          alt={photo.description}
        />
        <p className={css.text}>Likes: {photo.likes}</p>
        <p className={css.text}>Description: {photo.description}</p>
        <p className={css.text}>Author: {photo.user.name}</p>
      </Modal>
    </>
  );
}
