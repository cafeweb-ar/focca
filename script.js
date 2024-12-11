window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    const body = document.querySelector("body");

    // Configura el tiempo en milisegundos (por ejemplo, 3000 ms = 3 segundos)
    const delay = 3000;

    setTimeout(() => {
        // Ocultar el preloader suavemente
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        // Permitir scroll quitando la clase 'hidden'
        body.classList.remove("hidden");

        // Elimina el preloader del DOM si deseas
        setTimeout(() => {
            loader.remove();
        }, 500); // Tiempo para que termine la transición (opcional)
    }, delay);
});




const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });