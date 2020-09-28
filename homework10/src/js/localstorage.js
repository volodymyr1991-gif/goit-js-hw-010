import '../sass/styles.scss';
const inputRef = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');
localStorage.removeItem('test');

bodyRef.classList.add('light-theme');
inputRef.addEventListener('change', addTheme);

function addTheme() {
  if (inputRef.checked) {
    console.log(bodyRef.classList);
    bodyRef.classList = 'dark-theme';
  } else {
    console.log(bodyRef.classList);
    bodyRef.classList = 'light-theme';
  }
  localStorage.setItem('dark-theme', bodyRef.classList);
}

popullateTheme();
function popullateTheme() {
  const darkTem = localStorage.getItem('dark-theme');

  if (darkTem) {
    bodyRef.classList = darkTem;
  }
  if (darkTem === 'dark-theme') {
    inputRef.checked = true;
  } else {
    inputRef.checked = false;
  }
}
