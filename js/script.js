const menuBtn = document.getElementById('mobile-btn');
var menuOpen = false;

function clicked(){
    menuBtn.classList.remove('open');
    document.getElementById('mobile-nav').classList.remove('visible');
    menuOpen = false;
}

menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        document.getElementById('mobile-nav').classList.add('visible');
        menuOpen = true;
                
    } else {
        menuBtn.classList.remove('open');
        document.getElementById('mobile-nav').classList.remove('visible');
        menuOpen = false;
    }
});




