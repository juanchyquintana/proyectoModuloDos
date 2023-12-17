
const usuario = {
  usuario: "administrador",
  contrasenia: "admin1234",
  enSesion: false
}

const guardarEnLocal = () =>{
  localStorage.setItem("UsuarioKey", JSON.stringify(usuario));
}

guardarEnLocal();

const swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,    
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });


