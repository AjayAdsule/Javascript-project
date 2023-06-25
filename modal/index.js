const btn=document.querySelector('.btn');
const closeBtn=document.querySelector('.close-btn');
const modal =document.querySelector('.modal');

btn.addEventListener('click',()=>{
    console.log(modal.classList);
    modal.classList.remove('hidden')
})

closeBtn.addEventListener('click',()=>{
    modal.classList.add('hidden')
})
