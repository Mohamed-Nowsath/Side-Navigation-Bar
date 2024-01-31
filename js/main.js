document.addEventListener('DOMContentLoaded',()=>{
    const sideNav=document.querySelector('.side-nav');
    const btnNav=document.querySelector('#btnnav');
    const overlayScreen=document.querySelector('.nav_overlay')

    btnNav.addEventListener('click',()=>{
        sideNav.classList.add('open')
    });

    overlayScreen.addEventListener('click',()=>{
        sideNav.classList.remove('open')
    });
});

