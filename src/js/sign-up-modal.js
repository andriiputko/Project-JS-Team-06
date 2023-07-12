 const openSignUpBtnEl =  document.querySelector('#signUp-open-btn');
 const signUpModalEl = document.querySelector('#sign-up-modal');
 const signUpModalWindowEl = document.querySelector('#sign-up-modal-window');
 const closeSignUpBtnEl = document.querySelector('#signUp-modal-close-btn');
 const openSignUpBtnSecondEl = document.querySelector('#signUp-open-btn-second');


 openSignUpBtnEl.addEventListener('click', handleClickOnSingUpOpenBtn);
 closeSignUpBtnEl.addEventListener('click', handleClickOnSingUpCloseBtn);
 signUpModalEl.addEventListener('click', handleClickOnsingUpBackdrop);
 openSignUpBtnSecondEl.addEventListener('click', handleClickOnSingUpSecondCloseBtn);
 userBarMenu.addEventListener('click', openUserBarMenu);



    function handleClickOnSingUpOpenBtn() {
        signUpModalEl.classList.add('open');
       
      }
    
    export function handleClickOnSingUpCloseBtn() {
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