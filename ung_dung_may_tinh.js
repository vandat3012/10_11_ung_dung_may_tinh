function add(){
    let amount1= +document.getElementById("num1").value;
    let amount2= +document.getElementById("num2").value;
    let result=amount1+amount2;
    document.getElementById("result").innerHTML= result;
}
function sub(){
    let amount1= +document.getElementById("num1").value;
    let amount2= +document.getElementById("num2").value;
    let result=amount1-amount2;
    document.getElementById("result").innerHTML= result;
    }
function mul(){
    let amount1= +document.getElementById("num1").value;
    let amount2= +document.getElementById("num2").value;
    let result=amount1*amount2;
    document.getElementById("result").innerHTML= result;
}function div(){
    let amount1= +document.getElementById("num1").value;
    let amount2= +document.getElementById("num2").value;
    let result=amount1/amount2;
    document.getElementById("result").innerHTML= result;
}

