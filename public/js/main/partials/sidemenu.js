sidemenu = document.getElementById('side-menu');
screen = document.querySelector('div.screen');
body = document.querySelector('body');

function activateSidemenu() {
    sidemenu.classList.remove('covered');
    screen.classList.remove('hidden');
    body.classList.add('menu-open');
}

function hideSidemenu() {
    sidemenu.classList.add('covered');
    screen.classList.add('hidden');
    body.classList.remove('menu-open');
}
