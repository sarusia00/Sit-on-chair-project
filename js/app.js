//hiding span with chair name
document.addEventListener("DOMContentLoaded", function () {
  var opacityHide1 = document.querySelector(".produkt2 .productName");
  var produkt1 = document.querySelector(".produkt1");
  var opacityHide2 = document.querySelector(".produkt2 .productName");
  var produkt2 = document.querySelector(".produkt2");

  function hidePls() {
    this.firstElementChild.style.visibility = "hidden";
  }

  function showPls() {
    this.firstElementChild.style.visibility = "visible";
  }

  produkt1.addEventListener("mouseover", hidePls);
  produkt2.addEventListener("mouseover", hidePls);
  produkt1.addEventListener("mouseout", showPls);
  produkt2.addEventListener("mouseout", showPls);


  //chair slider

  var button1 = document.querySelector(".znak a");
  console.log(button1);
  var button2 = document.querySelector(".znak2 a");
  var list = document.querySelectorAll(".slider li");
  var firstChair = document.querySelector(".slider li:first-child");

  var indeks = 0;

  button1.addEventListener("click", function () {

    list[indeks].classList.remove("visible");
    indeks++;
    if (indeks >= list.length) {
      indeks = 0;
    }
    list[indeks].classList.add("visible");
  });


  button2.addEventListener("click", function () {
    list[indeks].classList.remove("visible");
    indeks--;
    if (indeks < 0) {
      indeks = list.length - 1;
    }
    list[indeks].classList.add("visible");
  });

  //form

  var selectChair = document.querySelector(".selectChair");
  var selectColor = document.querySelector(".selectColor");
  var selectUphol = document.querySelector(".selectUphol");
  var delivery = document.getElementById("delivery");
  var chairName = document.getElementById("chairName");
  var chairPrice = document.getElementById('chairPrice');
  var color = document.getElementById("color");
  var colorCost = document.getElementById("colorCost");
  var uphol = document.getElementById("upholstery");
  var upholCost = document.getElementById("upholsteryCost");
  var deliveryBox = document.getElementById("deliveryCheckbox");
  var deliveryCost = document.getElementById("deliveryCost")
  var totalPay = document.getElementById("totalToPay");
  var clairPrice = 1200;
  var margaritaPrice = 1500;
  var selenaPrice = 2000;
  var pay = document.querySelectorAll("td:nth-child(2)");
  var selectors = document.querySelectorAll(".choose select");
  var red = 20;

  function addAll() {
    var total = 0;
    for (var i = 0; i < pay.length - 1; i++) {
     var total = total + parseFloat(pay[i].innerHTML) 
      if (pay[i].innerHTML === "") {
      { break; }
      }
      totalPay.innerHTML = parseFloat(total);
    }
  }
//problem jest taki, że checkbox i option to różne rzecyz. może lepiej każdemu nadać data-price i dodawać wszystkie data price w pliku albo odkryć sposob, zeby dodac wartosc checkboxa ale raz
    function createChair() {

      if (selectChair.value === "clair") {
        chairName.innerHTML = "Clair";
        chairPrice.innerHTML = clairPrice;
      } else if (selectChair.value === "margarita") {
        chairName.innerHTML = "Margarita";
        chairPrice.innerHTML = margaritaPrice;
      } else if (selectChair.value === "selena") {
        chairName.innerHTML = "Selena";
        chairPrice.innerHTML = selenaPrice;
      }
    }

    selectChair.addEventListener("change", createChair);

    function chooseColor() {

      if (selectColor.value === "red") {
        color.innerHTML = "Red";
        colorCost.innerHTML = "0";
      } else if (selectColor.value === "orange") {
        color.innerHTML = "Orange";
        colorCost.innerHTML = "0";
      } else if (selectColor.value === "black") {
        color.innerHTML = "Black";
        colorCost.innerHTML = "50";
      }
    }

    selectColor.addEventListener("change", chooseColor)

    function chooseUphol() {

      if (selectUphol.value === "fabric") {
        uphol.innerHTML = "Fabric";
        upholCost.innerHTML = "0";

      } else if (selectUphol.value === "leather") {
        uphol.innerHTML = "Leather";
        upholCost.innerHTML = "400";
      }
    }

    selectUphol.addEventListener("change", chooseUphol);

    function chooseDelivery() {
      if (deliveryBox.checked) {
        delivery.innerHTML = "Delivery";
        deliveryCost.innerHTML = "200";
      } else {
        delivery.innerHTML = "";
        deliveryCost.innerHTML = "0";
      }
    }
    deliveryBox.addEventListener("change", chooseDelivery);

  
  deliveryBox.addEventListener("change", addAll);
  for (var n=0; n<selectors.length; n++) {
   selectors[n].addEventListener("change", addAll);
  }
  
//scrolling to contact 
  
  var contactBtn = document.querySelector(".menu:last-child a");
  
  window.smoothScroll = function (target) {
    var scrollContainer = target;
    do {
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);
    
    var targetY = 0;
    do { 
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);
    
    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 15);
    }
    
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
  
  
});