const toggleSwitch = document.querySelector('.switcher-wrapper');
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('theme-language', currentTheme);

  if (currentTheme === 'nepali') {
    toggleSwitch = true;
  }
}
function switchTheme(e) {
  if (e.target) {
    document.documentElement.setAttribute('theme-language', 'english');
    localStorage.setItem('theme', 'nepali');
  } else {
    document.documentElement.setAttribute('theme-language', 'nepali');
    localStorage.setItem('theme', 'english');
  }
}
toggleSwitch.addEventListener('change', switchTheme, false);

var body = document.querySelector('body'),
  darkLight = document.querySelector('.dark-light');
if (darkLight) {
  darkLight.addEventListener('click', function () {
    if (body.getAttribute('theme-language') === 'nepali') {
      body.setAttribute('theme-language', 'english');
      localStorage.setItem('selected-theme', 'english');
    } else {
      body.setAttribute('theme-language', 'nepali');
      localStorage.setItem('selected-theme', 'nepali');
    }
  });
}
