(() => {
  const refs = {
    openModalBtn: document.querySelector(".book-category-hover-effect-container"),
    closeModalBtn: document.querySelector("[data-modal-book-close]"),
    modal: document.querySelector("[data-modal-book]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();