let show_more_button = document.querySelector('.show_more_button');
let points = document.querySelector('.points');
let show_more_text = document.querySelector('.show_more_text');
let show_less_button = document.querySelector('.show_less_button');

show_more_button.addEventListener('click', ()=>{
    show_more_button.style.display = 'none';
    points.style.display = 'none';
    show_more_text.style.display = 'block';
})


show_less_button.addEventListener('click', ()=>{
    show_more_button.style.display = 'block';
    points.style.display = 'inline';
    show_more_text.style.display = 'none';
})

