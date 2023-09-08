document.addEventListener('DOMContentLoaded', () => {
    
    const menuBtn = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const sidebarClose = document.querySelector('.sidebar_close');
    
    const toggleMenu = () => {
        const result = sidebar.classList.toggle('open');
        
        if (result){
            menuBtn.childNodes[0].classList.add('active');
        } else {
            menuBtn.childNodes[0].classList.remove('active');
        }
    };

    menuBtn.addEventListener('click', toggleMenu);
    sidebarClose.addEventListener('click', toggleMenu);

});
