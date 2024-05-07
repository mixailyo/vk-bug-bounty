function lineInit() {
  const marqueeContainers = document.querySelectorAll(".marquee-container");

    marqueeContainers.forEach((marqueeContainer) => {
      let line = marqueeContainer.parentNode;

      for (let i = 0; i < 200; i++) {
        const clone = marqueeContainer.cloneNode(true);
        line.appendChild(clone);
      }

      let transform = 1;

      transform = transform + 1;
      line.style.transform = `translateX(calc(${transform} * 100vw * -1))`

      setInterval(() => {
        transform = transform + 1;
        line.style.transform = `translateX(calc(${transform} * 100vw * -1))`
      }, 8000);
    })
}

export { lineInit }