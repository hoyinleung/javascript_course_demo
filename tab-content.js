let allTabs = document.querySelectorAll(".tab");
let content = document.querySelectorAll(".content");

allTabs.forEach(t=>{

    t.addEventListener('mouseover',e=>{
        switchTab(e);
    })
    
})

let switchTab = (e) => {

    //點了的tab顏色轉換
    allTabs.forEach(t=>{
        t.classList.remove('active');
    })
    e.target.classList.add('active');

    //拿出tab的相應內容
    content.forEach(c=>{
        c.classList.remove('active');
    })

    let selectedTab = e.target.getAttribute("data-tab");
    let activeTab = document.querySelector(selectedTab);
    activeTab.classList.add('active');
}