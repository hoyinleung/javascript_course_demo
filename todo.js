const addItemText = document.querySelector('#addItemText')
const todoList = document.querySelector('.todoItem')
const addItemForm = document.querySelector('#addItemForm')
const searchTextInput = document.querySelector('#searchItemText')

//加入新事項功能
addItemForm.addEventListener('submit',e=>{

    //防止提交表單(web browser 重新整理)
    e.preventDefault()

    //創造新item
    let newItem = document.createElement('li')
    newItem.innerHTML = '<span class="itemContent">'+addItemForm.addItemText.value+'</span><span class="delete">X</span>'
    todoList.prepend(newItem)

    //清空表單值
    addItemForm.addItemText.value=''
    
})

//刪除功能
todoList.addEventListener('click',e=>{

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }

})

//搜尋功能
searchItemText.addEventListener('keyup',()=>{

    let allItemContent = document.querySelectorAll('li .itemContent')

    //隱藏唔乎合搜尋字串的item
    Array.from(allItemContent)
        .filter(itemContent => !itemContent.textContent.includes(searchTextInput.value))
        .forEach(itemContent => itemContent.parentNode.classList.add('hide'))

    //顯示合乎搜尋字串的item
    Array.from(allItemContent)
        .filter(itemContent => itemContent.textContent.includes(searchTextInput.value))
        .forEach(itemContent => itemContent.parentNode.classList.remove('hide'))
    
})