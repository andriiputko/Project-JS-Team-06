const openSignUpBtnEl = document.querySelectorAll('.signUp-open-btn');
const signUpModalEl = document.querySelector('#sign-up-modal');
const signUpModalWindowEl = document.querySelector('#sign-up-modal-window');
const closeSignUpBtnEl = document.querySelector('#signUp-modal-close-btn');

openSignUpBtnEl.forEach(btn => {
  btn.addEventListener('click', handleClickOnSingUpOpenBtn);
});

closeSignUpBtnEl.addEventListener('click', handleClickOnSingUpCloseBtn);
signUpModalEl.addEventListener('click', handleClickOnsingUpBackdrop);

function handleClickOnSingUpOpenBtn() {
  signUpModalEl.classList.add('open');
}

function handleClickOnSingUpCloseBtn() {
  signUpModalEl.classList.remove('open');
}

window.addEventListener('keydown', evt => {
  if (signUpModalEl.classList.contains('open')) {
    if (evt.key === 'Escape') {
      signUpModalEl.classList.remove('open');
    }
  }
});

function handleClickOnsingUpBackdrop(evt) {
  const target = evt.target;

  if (target === signUpModalEl) {
    handleClickOnSingUpCloseBtn();
  }
}
