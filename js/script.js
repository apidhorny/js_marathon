// === SCROLL BTN ===
const SCROLL_BTN = document.getElementById('myBtn');

window.addEventListener('scroll', () => {
    if (window.scrollTo > 50 || document.documentElement.scrollTop > 50) {
        SCROLL_BTN.style.display = 'block';
    } else {
        SCROLL_BTN.style.display = 'none';
    }
});

SCROLL_BTN.addEventListener('click', () => {
    window.scrollTo = 0;
    document.documentElement.scrollTop = 0;
});
// === /SCROLL BTN ===

// === CARDS GALLERY ===
function slidesPlugin(activeSlide = 2) {
    const SLIDES = document.querySelectorAll('.slide');

    SLIDES[activeSlide].classList.add('slide--active');

    SLIDES.forEach((slide) => {
        slide.addEventListener('click', () => {
            removeActiveSlide();

            slide.classList.add('slide--active');
        });
    });

    function removeActiveSlide() {
        SLIDES.forEach((slide) => {
            slide.classList.remove('slide--active');
        });
    }
}
slidesPlugin();
// === /CARDS GALLERY ===

// === DRAG-AND-DROP ===
const ITEM = document.querySelector('.item');
const PLACEHOLDERS = document.querySelectorAll('.placeholder');

ITEM.addEventListener('dragstart', dragstart);
ITEM.addEventListener('dragend', dragend);

PLACEHOLDERS.forEach((placeholder) => {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
});

function dragstart(event) {
    event.target.classList.add('hold');
    setTimeout(() => {
        event.target.classList.add('hide');
    }, 0);
}
function dragend(event) {
    event.target.className = 'item';
}

function dragover(event) {
    event.preventDefault();
}
function dragenter(event) {
    event.target.classList.add('hovered');
}
function dragleave(event) {
    event.target.classList.remove('hovered');
}
function dragdrop(event) {
    event.target.classList.remove('hovered');
    event.target.append(ITEM);
}
// === /DRAG-AND-DROP ===

// === COLORFUL BOARD ===
const BOARD = document.querySelector('#board');

const SQUARES_NUMBER = 500;
const COLORS = ['#F05454', '#C06014', '#FFC93C', '#206A5D', '#2F89FC', '#7952B3'];

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    });

    square.addEventListener('mouseleave', () => {
        removeColor(square);
    });

    BOARD.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 4px ${color}, 0 0 20px ${color}`;
}
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}
// === /COLORFUL BOARD ===

// === SLIDER-SCREEN ===
const UP_BTN = document.querySelector('.up-button');
const DOWN_BTN = document.querySelector('.down-button');

const SIDEBAR = document.querySelector('.sidebar');
const MAIN_SLIDE = document.querySelector('.main-slide');
const CONTAINER = document.querySelector('.slider-screen__container');

const SLIDES_COUNT = MAIN_SLIDE.querySelectorAll('div').length;

let activeSlideIndex = 0;

SIDEBAR.style.top = `-${(SLIDES_COUNT - 1) * 80}vh`;

UP_BTN.addEventListener('click', () => {
    changeSlide('up');
});
DOWN_BTN.addEventListener('click', () => {
    changeSlide('down');
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        changeSlide('up');
    } else if (event.key === 'ArrowDown') {
        changeSlide('down');
    }
});

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === SLIDES_COUNT) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = -1;
        }
    }

    const HEIGHT = CONTAINER.clientHeight;

    MAIN_SLIDE.style.transform = `translateY(-${activeSlideIndex * HEIGHT}px)`;
    SIDEBAR.style.transform = `translateY(+${activeSlideIndex * HEIGHT}px)`;
}
// === /SLIDER-SCREEN ===
