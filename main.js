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

  lax.addElements(".ultron", {
    scrollY: {
      opacity: [
        [0, 80],
        [0, 1],
      ],
      translateY: [
        [0, 400],
        [0, 80],
      ],
    },
  });

  lax.addElements(".loki", {
    scrollY: {
      opacity: [
        [40, 120],
        [0, 1],
      ],
      translateY: [
        [0, 400],
        [0, -80],
      ],
    },
  });

  lax.addElements(".thanos", {
    scrollY: {
      opacity: [
        [80, 160],
        [0, 1],
      ],
      translateY: [
        [0, 400],
        [0, 80],
      ],
    },
  });
};
