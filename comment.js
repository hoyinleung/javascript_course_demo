//選取HTML元素
const comment = document.querySelector('input');
const submitBtn = document.querySelector('button');
const commentCount = document.querySelector('#commentCount');
const commentDiv = document.querySelector('.comment');

submitBtn.addEventListener('click',()=>{

    console.log(comment.value);

    //留言 (p tag)
    const newComment = document.createElement('p');
    newComment.innerText = '我 :'+comment.value;
    newComment.classList.add('mine');

    //加入新留言
    commentDiv.append(newComment);

    //有多少條comment
    commentCount.innerText = commentDiv.childElementCount;

    comment.value='';

})