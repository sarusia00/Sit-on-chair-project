document.addEventListener("DOMContentLoaded", function () {
  //pokazywanie i ukrywanie przeźroczystego diva na zdjeciach produktów
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

  //pokazywanie menu

  //slider

  var button1 = document.querySelector(".znak a");

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

    var total = 0;
    for (var i = 0; i < pay.length - 1; i++) {
      var total = total + parseFloat(pay[i].innerHTML);
      console.log(pay[i].innerHTML)
      totalPay.innerHTML = parseFloat(total);
    }
  }
  deliveryBox.addEventListener("change", addAll);
  for (var n=0; n<selectors.length; n++) {
   selectors[n].addEventListener("change", addAll);
  }

});