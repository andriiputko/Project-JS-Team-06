(() => {
  const refs = {
    openModalBtn: document.getElementById('header-data-modal-open'),
    closeModalBtn: document.getElementById('header-data-modal-close'),
    modal: document.getElementById('header-data-modal'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);

  function openModal() {
    refs.modal.classList.remove('is-hidden');
    refs.closeModalBtn.classList.remove('is-hidden');
    refs.openModalBtn.classList.add('is-hidden');
  }

  function closeModal() {
    refs.modal.classList.add('is-hidden');
    refs.closeModalBtn.classList.add('is-hidden');
    refs.openModalBtn.classList.remove('is-hidden');
  }
})();
