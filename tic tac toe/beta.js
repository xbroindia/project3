/*var boxes =document.querySelectorAll(".box")
var reset =document.querySelector("#new")

var turn =true

var patterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText="O"
            turn=false
        }
        else{
            box.innerText="x"
            turn=true
        }
        box.disabled=true
  })
})
*/
let btn =document.querySelector("button")
let id =btn.getAttribute("class")