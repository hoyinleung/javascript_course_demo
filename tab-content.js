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

    //想知道用戶正在mouseover那個tab，拿到該data-tab的值
    let selectedTab = e.target.getAttribute("data-tab");

    //知道了用戶正mouseover那個tab後，再拿到selectedTab是對應那個Content框的
    let activeContentTab = document.querySelector(selectedTab);

    //將該對應的Content框設成active (顯示出來)
    activeContentTab.classList.add('active');
}