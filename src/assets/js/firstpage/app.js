import 'particles.js';
import tippy from 'tippy.js';
import AOS from 'aos';
import $ from "jquery";
import slick from "slick-carousel";


// ===============first page animation======================

particlesJS.load('particles-js', 'assets/images/particlesjs-config.json', function () {
  console.log('callback - particles.js config loaded');
});

// ====================aos animation====================

AOS.init();

//====================tooltip=====================
tippy('#my__tooltip', {
  content: "Я работаю прозрачно и не скрываю тот факт, что не все участники курса получат результат и это НОРМАЛЬНАЯ ситуация.  Это зависит от многих обстоятельств, условий жизни, особенностей характера и личности человека. Или просто форс-мажор. Всякое бывает. Я не могу контролировать каждую из вас 24 часа в сутки.  Качество выполнения заданий зависит только от вас.",
  placement: 'top',
  animation: 'scale',
  duration: 1000,
  theme: 'light'
});

//====================slick-slider=====================
$('.reviewes__inner').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev slide__left"></button>',
  nextArrow: '<button type="button" class="slick-next slide__right"></button>',
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
});






const reviewVideo = document.querySelector('#image5');
const videoReview = document.querySelector('.clients__inner__item__video');
const clientsPage = document.querySelector('.clients');
const body = document.querySelector('body');


function createModal(content) {
  console.log(content)

  const modal = document.createElement('div');
  modal.classList.add('modal');
  //clientsPage.insertAdjacentElement('beforeend',modal);
  clientsPage.append(modal);
  body.style.overflow = "hidden";
  //modal.insertAdjacentElement('beforeend', content);
  modal.append(content);
  content.style.display = "flex";

  requestAnimationFrame(() => {
    modal.classList.add('modal__active');
  })
  return modal;
}



function disabledModal(content, divModal) {

  requestAnimationFrame(() => {
    divModal.classList.remove('modal__active');
  })

  setTimeout(() => {
    //content.style.display = "none";
    document.querySelector('.modal__reviewes').append(content);
    divModal.remove();
    body.style.overflow = "auto";

  }, 400)
}


clientsPage.querySelector('.clients__inner').addEventListener('click', (event) => {
  for (let i = 1; i <= 6; i++) {
    if (event.target == document.querySelector(`#image${i}`)) {
      const reviewe = document.getElementById(event.target.dataset.reviewes);
      const modal = createModal(reviewe);
      modal.addEventListener('click', () => {
        disabledModal(reviewe, modal);
      })
    }
  }
})

//раскрытие пакетв обучения
function openList(){
  const payPage = document.querySelector('.payPacket__inner');

  payPage.addEventListener('click', (event)=>{
    if((event.target).classList.contains('payPacket__inner__item__image__arrow')){
      const payItem = (event.target).closest('.payPacket__inner__item');
      const listItem = payItem.querySelector('.payPacket__inner__item__wrapper');
      const arrow = (event.target).closest('.payPacket__inner__item__image');

      arrow.style.transform = 'translateY(1000%)';
      setTimeout(function(){
        arrow.style.visibility = 'hidden';
      },200)

      listItem.classList.remove('none');

      setTimeout(function(){
        listItem.style.transform = 'translateY(0)';
        listItem.style.opacity = '1';
      },200)
    }

});
};

openList();







