scrollBtn = document.querySelector('footer a.back-to-top');
sidemenu = document.getElementById('side-menu');

window.onscroll = function scrollFunction() {
  if (document.documentElement.scrollTop <= 150) {
    scrollBtn.classList.add('hidden');
  } else {
    scrollBtn.classList.remove('hidden');
  }
}