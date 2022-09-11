let welcome1 = document.getElementById("welcome1")
let welcome2 = document.getElementById("welcome2")
let swap1 = document.getElementById("swap1")
let swap2= document.getElementById("swap2")
let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let avatarslc = document.getElementById("avatarslc")
let box = document.getElementById("box")
let Button=document.querySelector("#button1")
let Button2=document.querySelector("#button2")
let frst = document.getElementById("frst")
let sec = document.getElementById("sec")
let buttonslct = document.getElementById("buttonslct")


let i = 0

Button.onclick= function (){
  if(i!=1) {
  i+=1
   sec.style.visibility="hidden"
  frst.style.visibility="visible"
  }

  }

  

Button2.onclick= function (){
  if(i!=0) {
 i-=1
 sec.style.visibility="visible"
  frst.style.visibility="hidden"
  }

}




swap1.onclick = function ()  {
welcome1.style.visibility="hidden"
welcome2.style.visibility="hidden"
swap1.style.visibility="hidden"
input1.style.visibility="visible"
input2.style.visibility="visible"
swap2.style.visibility="visible"
}
swap2.onclick = function ()  {
    input1.style.visibility="hidden"
    input2.style.visibility="hidden"
    swap2.style.visibility="hidden"
    avatarslc.style.visibility="visible"
    box.style.visibility="visible"
    Button.style.visibility="visible"
    Button2.style.visibility="visible"
    buttonslct.style.visibility="visible"
    }


   
       
   
      


