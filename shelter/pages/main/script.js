const burger = document.querySelector('#burger')
const popup = document.querySelector('#popup')
const body = document.body
const menu = document.querySelector('#menu').cloneNode(true)
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
}

function togglePopup() {
    if (popupOpened) {
        popup.removeChild(menu)
    } else {
        popup.appendChild(menu)
    }
    popupOpened = !popupOpened

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

//Pets json

const pet = [
    {
        "name": "Jennifer",
        "img": "../../assets/images/jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "../../assets/images/scarlett.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "../../assets/images/woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Scarlett",
        "img": "../../assets/images/scarlett.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Katrine",
        "img": "../../assets/images/katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "../../assets/images/timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "../../assets/images/freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "../../assets/images/charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
]


// carousel

const arrowLeft = document.querySelector('#arrow-left');
const arrowRight = document.querySelector('#arrow-right');
const carousel = document.querySelector('#carousel');
const slideLeft = document.querySelector('#left');
const slideRight = document.querySelector('#right');

//
// const ContentCard = () => {
//     const blocCard = sliderCard.map((item) => {
//         return (
//             <div classList.add(".content")>
//                 <img className="content_img" src={item.img} alt="img" />
//                 <p className="descrp">{item.title}</p>
//                 <p className="descrp">{item.prise}</p>
//             </div>
//         )
//     })

const createCard = () => {
    const card = document.createElement('div');
    card.classList.add('card');
    return card;
}

const moveLeft = () => {
    carousel.classList.add("transition-left");
    arrowLeft.removeEventListener("click", moveLeft);
    // arrowRight.removeEventListener("click", moveRight);
    console.log('left')
};

const moveRight = () => {
    carousel.classList.add("transition-right");
    // arrowLeft.removeEventListener("click", moveLeft);
    arrowRight.removeEventListener("click", moveRight);
    console.log('right')
};

arrowLeft.addEventListener("click", moveLeft);
arrowRight.addEventListener("click", moveRight);

carousel.addEventListener("animationend", (animationEvent) => {
    let changedItem;
    if (animationEvent.animationName === "move-left") {
        carousel.classList.remove("transition-left");
        changedItem = slideLeft;
        // document.querySelector("#slider-active").innerHTML = slideLeft.innerHTML;
    } else {
        carousel.classList.remove("transition-right");
        changedItem = slideRight;
        // document.querySelector("#slider-active").innerHTML = slideRight.innerHTML;

    }
    // changedItem.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        const card = createCard();
        // card.innerText = Math.random() ;
        changedItem.appendChild(card);
    }

    arrowLeft.addEventListener("click", moveLeft);
    arrowRight.addEventListener("click", moveRight);
})


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