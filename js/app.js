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
});