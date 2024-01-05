// ? Question-1:Write a code that, upon clicking the heart icon (.cards__card__img__icon i), changes its color and increments the counter (#counter) displayed alongside it.
// hint: watch help.mp4
// !Answer:
//************************************ */
const like = document.querySelector(".ri-heart-3-line")
const numberEle = document.querySelector("#counter")
console.log(like);
like.addEventListener("click",()=>{
    like.style.color = "red"
    numberEle.textContent ++
})
