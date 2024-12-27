// Collapse Menu
let menuList = document.getElementById('menuList');
menuList.style.maxHeight = '0px';

// Dropdown 1
let subMenu = document.getElementById('sub-menu-wrap');

// Dropdown 2
let dropMenu = document.getElementById('sub-menu-wrap-two');

// Fonction pour gérer le menu principal
function toggleMenu() {
  if (menuList.style.maxHeight == '0px') {
    menuList.style.maxHeight = '300px';
    subMenu.classList.remove('open-class'); // Ferme Dropdown 1
    dropMenu.classList.remove('open-class-two'); // Ferme Dropdown 2
  } else {
    menuList.style.maxHeight = '0px';
  }
}

// Fonction pour gérer Dropdown 1
function avaMenu() {
  subMenu.classList.toggle('open-class');
  if (subMenu.classList.contains('open-class')) {
    menuList.style.maxHeight = '0px'; // Ferme le menu principal
    dropMenu.classList.remove('open-class-two'); // Ferme Dropdown 2
  }
}

// Fonction pour gérer Dropdown 2
function toggleDrop() {
  dropMenu.classList.toggle('open-class-two');
  if (dropMenu.classList.contains('open-class-two')) {
    menuList.style.maxHeight = '0px'; // Ferme le menu principal
    subMenu.classList.remove('open-class'); // Ferme Dropdown 1
  }
}
