var menuIcon = document.getElementById('menu-icon');
var menuUl = document.getElementById('ul-menu');

menuIcon.addEventListener('click', dropMenu);

export function dropMenu(e){
  e.preventDefault();
  if(menuUl.style.display === 'block'){
    menuUl.style.display = 'none';
  } else {
    menuUl.style.display = 'block';
  }
}