const burger = document.querySelector('#burger')
const popup = document.querySelector('#popup')
const body = document.body
const menu = document.querySelector('#menu')
const header = document.querySelector('.header')


let popupOpened = false

burger.addEventListener('click', headHandler)


function headHandler(e) {
    e.preventDefault();
    popup.classList.toggle('open')
    burger.classList.toggle('active')
    body.classList.toggle('notscroll')
    header.classList.toggle('bg')

    togglePopup()

    function togglePopup() {
        if (popupOpened) {
            popup.removeChild(menu)
        } else {
            popup.appendChild(menu)

        }
        popupOpened = !popupOpened

    }
}

const links = Array.from(menu.children);
links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
    popup.classList.remove("open");
    burger.classList.remove("active");
    body.classList.remove("notscroll");
}


// carousel


//modal
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal_content');
const modalCard = document.querySelectorAll('.slider-card');
const closeModalButton = document.querySelector('.modal-btn');


modalCard.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();


        modal.classList.add('modal-active');
        modalContent.classList.add('modal-active');
        body.classList.add('notscroll')
    })
});


closeModalButton.addEventListener('click', () => {
    body.classList.remove('notscroll')
    modal.classList.remove('modal-active');
    modalContent.classList.remove('modal-active');
});

document.addEventListener('click', (e) => {
    if (e.target === modal) {
        body.classList.remove('notscroll')
        modal.classList.remove('modal-active');
        modalContent.classList.remove('modal-active');

    }
});