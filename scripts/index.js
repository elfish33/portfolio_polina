//Graphic Swiper
const graphicSwiper = new Swiper('.graphic_wrap #graphic_swiper',{
    slidesPerView: 2.3,
    spaceBetween: 0,
    loop: true,
})

//Header Nav Scroll
//nav <a> 변수
const navBtn = document.querySelectorAll('nav * a');
//section 변수
const introSec = document.querySelector('.swiper-wrapper .intro');
const skillSec = document.querySelector('.swiper-wrapper .skills');
const factSec = document.querySelector('.swiper-wrapper .facts');
const contentSec = document.querySelector('.swiper-wrapper .project_content');
const expSec = document.querySelector('.swiper-wrapper .experience');
const collabSec = document.querySelector('.swiper-wrapper .collaboration');
console.log(navBtn, introSec, skillSec)

const navMap = [
    {btn: navBtn[0], sec: 1}, //intro
    {btn: navBtn[1], sec: 2}, //skills
    {btn: navBtn[2], sec: 3},//fact
    {btn: navBtn[3], sec: 4},//content
    {btn: navBtn[4], sec: 10},//experience
    {btn: navBtn[5], sec: 11},//collab
]
//Swiper 이기 때문에 window offsetTop 적용 x -> slideTo 적용 o
navMap.forEach(nav => {
    nav.btn.addEventListener('click',(e)=>{
        e.preventDefault();
        mainSwiper.slideTo(nav.sec);
    })
})

/* navBtn[0].addEventListener('click',(e)=>{
    let introLoc = introSec.offsetTop;
    window.scrollTo(0, introLoc);
    e.preventDefault();
})
navBtn[1].addEventListener('click',(e)=>{
    let skillLoc = skillSec.offsetTop;
    window.scrollTo(0, skillLoc);
    e.preventDefault();
})
navBtn[2].addEventListener('click',(e)=>{
    let factLoc = factSec.offsetTop;
    window.scrollTo(0, factLoc);
    e.preventDefault();
}) */

//Fixed Button
//slideTo 괄호에 slide index를 써야 함
const fixedBtn = document.querySelector('.fixed_top_btn button');
fixedBtn.addEventListener('click', () => {
    mainSwiper.slideTo(0);
})

// Main Swiper -- Vertical Scroll
const mainSwiper = new Swiper ('#main_swiper',{
    direction: 'vertical',
    mousewheel: true,
    keyboard: true,
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 0,
})

//FIGMA Ver. BTN
const balanceFigmaBtn = document.querySelector('#balance_figma_btn')
const londonFigmaBtn = document.querySelector('#london_figma_btn')
const balancePopup = document.querySelector('#balance_figma_pop')
const londonPopup = document.querySelector('#london_figma_pop')
console.log(balanceFigmaBtn, londonFigmaBtn, balancePopup, londonPopup)

balancePopup.style.opacity = 0;
londonPopup.style.opacity = 0;
balanceFigmaBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    balancePopup.style.opacity = 1;
})
londonFigmaBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    londonPopup.style.opacity = 1;
})

//KAKAO QR
const kakaoLink = document.querySelector('.kakao')
const kakaoQr = document.querySelector('.kakao_qr')

kakaoQr.style.opacity = 0;
kakaoLink.addEventListener('click',(e)=>{
    e.stopPropagation();
    kakaoQr.style.opacity = 1;
})
document.addEventListener('click',(e)=>{
    if (!e.target.closest('a')){
        e.stopPropagation();
        e.preventDefault();
        kakaoQr.style.opacity = 0;
    }
})

const projectNav = document.querySelectorAll('.project_list li');
console.log(projectNav)
const prj1 = document.querySelector('#project1');
const prj2 = document.querySelector('#project2');
const prj3 = document.querySelector('#project3');
const prj4 = document.querySelector('#project4');

const prjNavMap = [
    {btn: projectNav[0], sec: 5},
    {btn: projectNav[1], sec: 6},
    {btn: projectNav[2], sec: 7},
    {btn: projectNav[3], sec: 8},
]

prjNavMap.forEach(li => {
    li.btn.addEventListener('click',(e)=>{
        e.preventDefault();
        mainSwiper.slideTo(li.sec)
    })
})

