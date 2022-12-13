let show_more_button = document.querySelector('.show_more');
let points = document.querySelector('.points');
let show_more_text = document.querySelector('.show_more_text');
let show_less_button = document.querySelector('.show_less_button');
let selectionClass = document.querySelector('.selectionClass');

show_more_button.addEventListener('click', ()=>{
    show_more_button.style.display = 'none';
    points.style.display = 'none';
    show_more_text.style.display = 'block';
    selectionClass.classList.toggle('blur');
})


show_less_button.addEventListener('click', ()=>{
    show_more_button.style.display = 'block';
    points.style.display = 'inline';
    show_more_text.style.display = 'none';
    selectionClass.classList.toggle('blur');
})


//Header Section on Scroll

let header_selector = document.querySelector('.header_selector');
let heading_selector = document.querySelector('.heading_selector');
let tagline_selector = document.querySelector('.tagline_selector');
let rating_selector = document.querySelector('.rating_selector');
let created_by_selector = document.querySelector('.created_by_selector');
let description_selector = document.querySelector('.description_selector');

console.log(header_selector);

window.addEventListener('scroll', ()=>{
    header_selector.classList.toggle("sticky", window.scrollY>10);
    // header_selector.classList.toggle("header_section", window.scrollY>10);
    heading_selector.classList.toggle("sticky_heading", window.scrollY>10);
    // heading_selector.classList.toggle("heading", window.scrollY>10);
    tagline_selector.classList.toggle("sticky_tagline", window.scrollY>10);
    // tagline_selector.classList.toggle("tagline", window.scrollY>10);
    rating_selector.classList.toggle("sticky_rating", window.scrollY>10);
    // rating_selector.classList.toggle("rating", window.scrollY>10);
    created_by_selector.classList.toggle("sticky_created_by", window.scrollY>10);
    // created_by_selector.classList.toggle("created_by", window.scrollY>10);
    description_selector.classList.toggle("sticky_description", window.scrollY>10);
    // description_selector.classList.toggle("description", window.scrollY>10);
})