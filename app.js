function add(){
    let fn=document.getElementById("fn").value
    let sn=document.getElementById("sn").value
    let ans=parseFloat(fn)+parseFloat(sn)
    document.getElementById("output").innerHTML=ans
}