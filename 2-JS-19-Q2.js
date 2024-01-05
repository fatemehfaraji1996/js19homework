//? Question-2:Write a code that, upon clicking a button labeled "Place Bid" changes its text to "Added to Cart" and disables the button (you can modify the style if necessary).
// hint: watch help.mp4
//!Answer:
//********************************** */
const btnEle = document.querySelector("button")
console.log(btnEle);
btnEle.addEventListener("click",()=>{
    btnEle.textContent = "Added to Cart"
})