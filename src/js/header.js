(() => {
  const refs = {
    openModalBtn: document.getElementById('header-data-modal-open'),
    closeModalBtn: document.getElementById('header-data-modal-close'),
    modal: document.getElementById('header-data-modal'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
