document.addEventListener("DOMContentLoaded", function() {
    //pokazywanie i ukrywanie przeźroczystego diva na zdjeciach produktów
    var opacityHide1 = document.querySelector(".produkt2 .productName");
    var produkt1 = document.querySelector(".produkt1");
    var opacityHide2 = document.querySelector(".produkt2 .productName");
    var produkt2 = document.querySelector(".produkt2");
    
    function hidePls () {
        this.firstElementChild.style.visibility = "hidden";
    }
    function showPls () {
        this.firstElementChild.style.visibility = "visible";
    }
    
   produkt1.addEventListener("mouseover", hidePls);
   produkt2.addEventListener("mouseover", hidePls);
   produkt1.addEventListener("mouseout", showPls);
   produkt2.addEventListener("mouseout", showPls);
    
    //pokazywanie menu
    
    //slider
    var arrow = document.getElementsByClassName (".znak");
    console.log(arrow)
    
    var button1=document.querySelector(".znak");
    var button2=document.querySelector(".znak2");
    var list=document.querySelectorAll(".slider li");
    
    button1.addEventListener("click", function(){
        
    var indeks=0;
    list[indeks].classList.remove("visible");
    indeks++;
    if (indeks>=list.length){
        indeks=0;
    }
    list[indeks].classList.add("visible");    
    });
    
               
    button2.addEventListener("click", function(){
   
    list[indeks].classList.remove("visible");
    indeks--; 
    if (indeks<0){
        indeks=list.length - 1;
    }
    list[indeks].classList.add("visible");    
    });
  
  //form
  
  var selectChair = document.querySelector(".selectChair");
  var selectColor = document.querySelector(".selectColor");
  var selectUphol = document.querySelector(".selectUphol");
  var delivery = document.getElementById("delivery");
  var chairName = document.getElementById("chairName");
  var chairPrice = document.getElementById("chairPrice");
  var color = document.getElementById("color");
  var colorCost = document.getElementById("colorCost");
  var uphol = document.getElementById("upholstery");
  var upholCost = document.getElementById("upholsteryCost");
  var deliveryBox = document.getElementById("deliveryCheckbox");
  var deliveryCost = document.getElementById("deliveryCost")
  var totalPay= document.getElementById("totalToPay");
  var toAdd = document.querySelectorAll(".total tr td:nth-child(2)")
  console.log(toAdd)
 
  var chairPrice = selectChair.getAttribute()
  function createChair () {
    
    if (selectChair.value==="clair"){
      chairName.innerHTML = "Clair";
      chairPrice.innerHTML = "1200";
      
    } 
    else if (selectChair.value==="margarita"){
      chairName.innerHTML = "Margarita";
      chairPrice.innerHTML = "1500";
    } 
    else if (selectChair.value==="selena"){
      chairName.innerHTML = "Selena";
      chairPrice.innerHTML = "2000";
    } 
  }
  
  selectChair.addEventListener("change", createChair);
  
  function chooseColor () {
    
    if (selectColor.value==="red"){
      color.innerHTML = "Red";
      colorCost.innerHTML = "0";
      
    } 
    else if (selectColor.value==="orange"){
      color.innerHTML = "Orange";
      colorCost.innerHTML = "0";
    } 
    else if (selectColor.value==="black"){
      color.innerHTML = "Black";
      colorCost.innerHTML = "50";
    } 
  }
  
  selectColor.addEventListener("change", chooseColor)
  
  function chooseUphol () {
    
    if (selectUphol.value==="fabric"){
      uphol.innerHTML = "Fabric";
      upholCost.innerHTML = "0";
      
    } 
    else if (selectUphol.value==="leather"){
      uphol.innerHTML = "Leather";
      upholCost.innerHTML = "400";
    }  
  }
  
  selectUphol.addEventListener("change", chooseUphol);
  
  function chooseDelivery () {
    if (deliveryBox.checked) {
      delivery.innerHTML="Delivery";
      deliveryCost.innerHTML = "200";
    }
    else {
      delivery.innerHTML="";
      deliveryCost.innerHTML = "0";
    }
  }
  deliveryBox.addEventListener("change", chooseDelivery);
  
  
});