function table(){
  var n=document.getElementById("num").value
  var arr=[]
  for(var i=1;i<=10;i++)
  {
    arr.push(n+"x"+i+"="+n*i+" ")
  }
  document.getElementById("para").innerHTML=arr
}