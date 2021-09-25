const backToTopBtn = document.querySelector('#backToTop');
const subscribeBtn = document.querySelector('#subscribe');
const popupWrapper = document.querySelector('.popup-wrapper');
const closeBtn = document.querySelector('.popup-close');
const popup = document.querySelector('.popup');


backToTopBtn.addEventListener('click',()=>{
    scrollTo(0,0);
    console.log('1234')
})
subscribeBtn.addEventListener('click',()=>{
    popupWrapper.classList.remove('hide');
})
popupWrapper.addEventListener('click',()=>{
    popupWrapper.classList.add('hide');
})
closeBtn.addEventListener('click',()=>{
    popupWrapper.classList.add('hide');
})
popup.addEventListener('click',(e)=>{
    e.stopPropagation();
})