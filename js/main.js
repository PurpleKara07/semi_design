// 모바일 메뉴
const sHamburger  = document.querySelector('.hamburger');
const sMoblie     = document.querySelector('.mobile_menu');

sHamburger.addEventListener('click', ()=>{
    sHamburger.classList.toggle('active');    
    sMoblie.classList.toggle('active');  

    if(sHamburger.classList.contains('active')){
        document.body.style.overflow = 'hidden';
    }else{
        document.body.style.overflow = '';
    }        
});

window.addEventListener('resize',()=>{
    // 1. 스크롤바를 포함한 브라우저 화면의 너비
    const windowWidth = window.innerWidth;
    if(windowWidth > 768){
        sMoblie.classList.remove('active');
        document.body.style.overflow = '';
    }
})