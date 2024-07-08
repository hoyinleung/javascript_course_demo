let allTabs = document.querySelectorAll(".tab");
let content = document.querySelectorAll(".content");

allTabs.forEach(t=>{

    t.addEventListener('mouseover',e=>{
        switchTab(e);
    })
    
})

let switchTab = (e) => {

    //將所有tab的active class移除
    allTabs.forEach(t=>{
        t.classList.remove('active');
    })

    //加返active class去用戶mouseover的那個tab (轉做active tab的顏色)
    e.target.classList.add('active');

    //--------------------------------

    //將所有content框的active class移除
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