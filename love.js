var a=document.getElementById("boy")
var b=document.getElementById("girl")
function calculate(){
    var n=Math.floor(Math.random()*100)+1;
    alert(`Your calculate love percentage is ${n}%`)
    a.value=""
    b.value=""
}
