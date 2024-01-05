// ? Qustion-4:Write a code that changes the background color of the stars when we click on them.
// hint: watch help.mp4
//! answer
//******************************* */
const istarsEle = document.querySelectorAll("i")

  istarsEle.forEach(element => {
    console.log(element);
    element.addEventListener("click",()=>{
      
      element.classList.toggle("active")
    })
 
   
  });

