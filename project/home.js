//change the background of nav bar when scrolled
window.addEventListener('scroll',()=>{
    const navbar = document.querySelector("nav");
    if(window.scrollY > 0){
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled');
    }
});
