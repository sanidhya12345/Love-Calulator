var a=document.getElementById("boy")
var b=document.getElementById("girl")
var historyArray=[]
function validate(){
    if(a.value.length===0 || b.value.length===0){
        return false;
    }
    return true;
}

function calculate(){
    if(validate()===true){
        var n=Math.floor(Math.random()*100)+1;
        alert(`Your calculate love percentage is ${n}%`)
        historyArray.push(`boyname:- ${a.value} and girlname:- ${b.value} their love percentage is ${n}`);
        console.log(historyArray)
        a.value=""
        b.value=""
    }
}
