document.querySelectorAll('.nav__link').forEach
(link => {
    if(link.href === window.location.href){
        link.setAttribute('aria-current', 'page')
    }
});