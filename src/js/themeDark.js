'use strict';

let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle input');
const modal = document.querySelector('[data-modal-book]');
const toggleStorageKey = 'toggleState';

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  // modal.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkMode', null);
};

const toggleSwitch = () => {
  darkMode = localStorage.getItem('darkMode');

  if (darkMode !== 'enabled') {
    enableDarkMode();
    localStorage.setItem(toggleStorageKey, 'enabled');
  } else {
    disableDarkMode();
    localStorage.removeItem(toggleStorageKey);
  }
};

if (darkMode === 'enabled') {
  enableDarkMode();
  darkModeToggle.checked = true;
  localStorage.setItem(toggleStorageKey, 'enabled');
} else {
  localStorage.removeItem(toggleStorageKey);
}

darkModeToggle.addEventListener('change', () => {
  toggleSwitch();
});
