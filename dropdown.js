let dropdownBtn = document.querySelector(".dropdown-tag");
let dropdown    = document.querySelector(".dropdown");

dropdownBtn.addEventListener('click',()=>{
    dropdown.classList.toggle("hide");
});