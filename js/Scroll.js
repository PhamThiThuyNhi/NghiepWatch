var header = document.querySelector('.scroll-header');

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
});