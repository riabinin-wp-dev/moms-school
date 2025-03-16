import Aos from "aos";

Aos.init();



function addSpace() {
    const subtitle = document.querySelectorAll('.aboutme__inner__subtitle');

    subtitle.forEach((element, index) => {
        element.style.paddingLeft = `${index * 6}rem`;
        if (index % 2 == 0) {
            element.style.color = 'white';
        }
        else {
            element.style.paddingBottom = '2rem';
        }
    });
}


// =====================функции=======================

//вызов модального окна

function openModalFree (){
    const modalFree = document.querySelector('#modal__free');
    const modalFormFree = document.querySelector("#modalFormmodal__free");
    const button = document.querySelector('.aboutme__inner__button');
    const body = document.querySelector('body');


    // console.log(modalFree, modalFormFree, button)
    button.addEventListener('click', (event)=>{
        event.preventDefault();
        modalFree.classList.add('active');
        setTimeout(()=>{
            modalFree.classList.add('transform');
            body.classList.add('no-scroll');
        },300)
    })
}

//закрытие модального окна
function closeModalFree(){
    const modalFree = document.querySelector('#modal__free');
    const modalFormFree = document.querySelector("#modalFormmodal__free");
    const button = document.querySelector('.aboutme__inner__button');
    const body = document.querySelector('body');

    modalFree.addEventListener('click',function(){
        modalFree.classList.remove('transform');
        body.classList.remove('no-scroll');

        setTimeout(()=>{
            modalFree.classList.remove('active');
        },400);


    })
    modalFormFree.addEventListener('click', (event)=>{
        event.stopPropagation();
    })
}

closeModalFree();





//удаление класса






// =====================вызовы=======================
openModalFree ();

addSpace();