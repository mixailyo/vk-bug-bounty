function howInit() {
  let howSection = document.querySelector('.how');
  let btns = document.querySelectorAll('.how__card-more-close');

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.closest('.how__card').classList.remove('is-active');
    })
  })

  if (howSection) {
    document.addEventListener('click', (event) => {
      setTimeout(() => {
        let howCardMores = document.querySelectorAll('.how__card-more');
        howCardMores.forEach(more => {
          console.log(more)
          if (more.closest('.how__card').classList.contains('is-active')) {
            console.log(more.closest('how__card'))
            more.closest('.how__card').style.minHeight = more.style.maxHeight
          } else {
            more.closest('.how__card').style.minHeight = 'unset'
          }
        })
      }, 0);
    })
  }
}

export { howInit }