"use strict";
function calculateTip() {
  let billAmt = document.getElementById("billamt").value;
  let serviceQual = document.getElementById("serviceQual").value;
  let numofPeople = document.getElementById("peopleamt").value;

  if(billAmt===""||serviceQual===0){
  	alert("Please fill all the details");
  }
  if(numofPeople===""||numofPeople<=1){
  	numofPeople=1;
  	document.getElementById("each").style.display="none";
  }else{
  	document.getElementById("each").style.display="block";
  }
  //calculating the tip
  let total = (billAmt*serviceQual)/numofPeople;
  total=Math.round(total*100)/100;
  total=total.toFixed(2);

  document.getElementById("totalTip").style.display="block";
  document.getElementById("tip").innerHTML=total;
}
document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none";
document.getElementById("calculate").onclick=function(){
	calculateTip();
;}
