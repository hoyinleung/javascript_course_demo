let tabs = document.querySelectorAll(".tabs");
console.log(tabs);
let individualTab = document.querySelectorAll(".tab");
let content = document.querySelectorAll(".content");

individualTab.forEach(t=>{

    t.addEventListener('mouseover',e=>{
        switchTab(e);
    })
    
})

let switchTab = (e) => {

    //點了的tab顏色轉換
    individualTab.forEach(t=>{
        t.classList.remove('active');
    })
    e.target.classList.add('active');


    //拿出tab的相應內容
    content.forEach(c=>{
        c.classList.remove('active');
    })

    let clickedTab = e.target.getAttribute("data-tab");
    let activeTab = document.querySelector(clickedTab);
    activeTab.classList.add('active');
}