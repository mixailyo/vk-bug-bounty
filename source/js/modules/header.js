function headerInit() {
  let header = document.querySelector('.header');
  let hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
    header.classList.toggle('header--active');
    hamburger.classList.toggle('is-active');
  })
}

export { headerInit }