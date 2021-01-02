var input2_8 = document.getElementById("item2-8");

const passText = document.getElementById("pass-text");

function validateAnswer(){
   var x = input2_8;

   if (x == "H" || x == "h"){
       var input2_8 = x
       passText.classList.remove("hide")
   } 
}