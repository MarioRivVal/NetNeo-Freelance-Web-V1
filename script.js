document.addEventListener("DOMContentLoaded", () => {
  /* ------------------------------------- */
  /************** DOM ELEMENTS *************/
  /* ------------------------------------- */
  const elementsToObserve = [
    {
      container: document.querySelector(".header"),
      items: document.querySelectorAll(".main__box, .main__title"),
      threshold: 0.3,
    },
    {
      container: document.querySelector(".services__cards"),
      items: document.querySelectorAll(".services__card"),
      threshold: 0.1,
    },
    {
      container: document.querySelector(".form__container"),
      items: [document.querySelector(".form")],
      threshold: 0.3,
    },
  ];

  /* ------------------------------------- */
  /**************** FUNCTIONS **************/
  /* ------------------------------------- */
  const observeElement = function (container, items, options) {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        items.forEach((item) => {
          item.classList.add("show");
        });
        observer.disconnect();
      }
    }, options);

    observer.observe(container);
  };

  /* ------------------------------------- */
  /********* fUNCTIONS CALLING *************/
  /* ------------------------------------- */
  elementsToObserve.forEach(({ container, items, threshold }) => {
    if (container) {
      observeElement(container, items, { root: null, threshold });
    }
  });
});
