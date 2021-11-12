const btnSwitch = document.querySelector("#switch");
const body = document.querySelector("body")
 


btnSwitch.addEventListener("click",()=>{
   console.log(btnSwitch);
   body.classList.toggle("change-bg");
   
    
})

