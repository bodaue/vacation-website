var form = document.getElementById('form-block');
form.onclick = function(ev){
    ev.preventDefault();
}


document.getElementById('_arrow').addEventListener('click', function(ev){
    link(wayToScroll, ev);
})

document.getElementById('about-link').addEventListener('click', function(ev){
    link('.about-us', ev);
})

document.getElementById('service-link').addEventListener('click', function(ev){
    link('.why-us', ev);
})

document.getElementById('contact-link').addEventListener('click', function(ev){
    link('.contact-us', ev);
})



document.getElementById('main-link').addEventListener('click', function(ev){
    link('.leading-page', ev);
})

document.getElementById('footer-about-link').addEventListener('click', function(ev){
    link('.about-us', ev);
})

document.getElementById('footer-contact-link').addEventListener('click', function(ev){
    link('.contact-us', ev);
})

document.getElementById('footer-service-link').addEventListener('click', function(ev){
    link('.why-us', ev);
})



function link(name, ev){
    ev.preventDefault();
    document.querySelector(name).scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    }) 
}



const changeArrowText = () =>
{
    if (wayToScroll == ".leading-page"){
        document.getElementsByClassName('arrow-text')[0].textContent = "Вернуться";
    }else{
        document.getElementsByClassName('arrow-text')[0].textContent = "Спуститься";
    }
}

let arrow = document.querySelector('.arrow');
let headHeight = document.querySelector('.header-to-arrow').clientHeight;
let wayToScroll = '.about-us';

document.onscroll = function(){  

    // for apper/disapper arrow
    let widthArrow = window.getComputedStyle(document.getElementById('_arrow')).width; // width of arrow block
    let scroll = window.scrollY;
    let halfWidthArrow = (parseInt(widthArrow)/2);
    
    
    let arrow_left_value = window.innerWidth > 576 ? '1rem' : '0';

    if (scroll > headHeight + 1){           
       arrow.style.left = arrow_left_value;
       document.getElementById('arrowId').src = "public/icons/up-arrow.svg"; // arrow up
       arrow.style.position = 'fixed';       
       arrow.style.zIndex = 5;
       wayToScroll = '.leading-page';
    }
    else{                  
       arrow.style.display = 'block';
       arrow.style.left = `calc(50% - ${halfWidthArrow}px)`;
       document.getElementById('arrowId').src = "public/icons/down-arrow.svg"; // arrow down
       wayToScroll = '.about-us';
    }    
 }
 