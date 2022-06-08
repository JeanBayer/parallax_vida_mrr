window.onload = function () {
  window.addEventListener("scroll", (event) => {
    console.log(window.scrollY);
  });

  lax.init();
  lax.addDriver("scrollY", function () {
    return window.scrollY;
  });

  lax.addElements(".logo", {
    scrollY: {
      scale: [
        [0, 80],
        [1, 3],
      ],
      opacity: [
        [0, 70],
        [1, 0],
      ],
      translateY: [
        [0, 80],
        [0, 200],
      ],
    },
  });
};
