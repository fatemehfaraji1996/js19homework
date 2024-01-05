// ? Qustion-3:Write a code to close message box when close button clicked :
// hint: watch help.mp4
//! answer
//******************************* */
const boxMassageEle= document.querySelector(".message")
const masegeEle=document.querySelector(".ri-close-line")
console.log(masegeEle);
masegeEle.addEventListener("click",()=>{
    boxMassageEle.remove()
})