// Check scroll window
function checkScroll(){
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btnOnTop.style.display = "block"; 
    } else {
        btnOnTop.style.display = "none";
    }
}

// Get object of button go top
var btnOnTop = document.querySelector('.btn__go-top');
// Button action
btnOnTop.onclick = (() => window.scrollTo({top: 0, behavior: 'smooth'}));
window.onscroll = checkScroll; 
