const splash_screen_objects = [
    {
        img_src: '/images/img1.jpg',
        title: 'Beautiful first picture',
        sub_title: 'First sub title',
    },
    {
        img_src: '/images/img2.jpg',
        title: 'Beautiful second picture',
        sub_title: 'Second sub title',
    },
    {
        img_src: '/images/img3.jpg',
        title: 'Beautiful third picture',
        sub_title: 'Third sub title',
    },
]

const splash_screen_img = document.querySelector('.splash_screen__img');
const splash_screen_title = document.querySelector('.splash_screen__title');
const splash_screen_sub_title = document.querySelector('.splash_screen__sub_title');

let objectIndex = 1;

const setSplashScreen = (objectIndex) => {
    const {img_src, title, sub_title} = splash_screen_objects[objectIndex];
    splash_screen_img.src  = img_src;
    splash_screen_title.textContent = title;
    splash_screen_sub_title.textContent = sub_title;
}

setInterval(() => {
    setSplashScreen((++objectIndex)%splash_screen_objects.length);

}, 5000);

const burger_menu_button = document.querySelector('.burger_menu_container');
const burger_menu = document.querySelector('.burger_menu_list');

burger_menu_button.addEventListener('click', () => {
    burger_menu.classList.toggle('burger_menu_list__active');
})

const buy_tickets_buttons = document.querySelectorAll('.card__button');
const modal_overlay = document.querySelector('.modal_overlay');
const modal = document.querySelector('.modal');

buy_tickets_buttons.forEach(button => {
    button.addEventListener('click', () => {
        modal_overlay.classList.toggle('modal_overlay__active');
        modal.classList.toggle('modal__active');
    })
})

const close_buttons = document.querySelectorAll('.close__button');

close_buttons.forEach(button => {
    button.addEventListener('click', () => {
        modal_overlay.classList.toggle('modal_overlay__active');
        modal.classList.toggle('modal__active');
    })
})

modal_overlay.addEventListener('click', () => {
    modal_overlay.classList.toggle('modal_overlay__active');
    modal.classList.toggle('modal__active');
})

const elements_to_animate = document.querySelectorAll('.animated');

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animation = entry.target.getAttribute('data-animation')
            entry.target.classList.add(animation);
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 0.5,
    rootMargin: '0px 100px'
});

elements_to_animate.forEach(section => {
    observer.observe(section);
});
