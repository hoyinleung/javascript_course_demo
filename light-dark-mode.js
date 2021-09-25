let currentDarkMode = null
let themeSwitch = document.querySelector('#switch_mode_btn');
let modeIcon = document.querySelector('#mode-icon')

//檢查用戶喜歡那個模式設定
if(localStorage.getItem('darkMode')===null)
{
    switchToDark(false)
}
else
{
    let  userPreference = (localStorage.getItem('darkMode')==='Y') ? true : false
    switchToDark(userPreference)
}

//轉mode
themeSwitch.addEventListener('click', ()=>{

    let  oppositeUserPreference = (localStorage.getItem('darkMode')==='Y') ? false : true

    switchToDark(oppositeUserPreference)

});

function switchToDark(dark){

    if(dark)
    {
        localStorage.setItem('darkMode', 'Y');
        document.body.classList.add('dark_mode');
        modeIcon.innerText = '🌜'
    }
    else{
        localStorage.setItem('darkMode', 'N');
        document.body.classList.remove('dark_mode');
        modeIcon.innerText = '☀'
    }

}