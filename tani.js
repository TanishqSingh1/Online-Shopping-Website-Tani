const btn = document.querySelector('.explore');
const btnn=document.querySelector('.explore-content')
btn.addEventListener('mouseover', function fs(){
    btn.classList.remove('opacit');
    btn.style.background="black";
    btnn.style.color="#ef7998";
    
})
btn.addEventListener('mouseout', function fs(){
    btn.classList.add('opacit');
    btn.style.background="#ef7998";
    btnn.style.color="black";
    
})
btnn.addEventListener('mouseover', function fs(){
    btn.classList.remove('opacit');
    btn.style.background="black";
    btnn.style.color="#ef7998";
})
btnn.addEventListener('mouseout', function fs(){
    btn.classList.add('opacit');
    btn.style.background="#ef7998";
    btnn.style.color="black";
})
const hero=document.querySelector(".hero-image");
const hero_border=document.querySelector(".overlap")
hero.addEventListener('mouseover', function fs(){
    hero_border.classList.add("overlap-after");
})
hero.addEventListener('mouseout', function fs(){
    hero_border.classList.remove("overlap-after");
})