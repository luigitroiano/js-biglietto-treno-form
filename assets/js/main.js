var btnGenera = document.getElementById("btn-genera");
var btnAnnulla = document.getElementById("btn-annulla");

btnGenera.addEventListener("click",
  function() {
    var userNameInput = document.getElementById("user_name");
    var kmToGoInput = document.getElementById("km_to_go");
    var ageInput = document.getElementById("age");
    var price;



    var userName = userNameInput.value;
    var kmToGo = kmToGoInput.value;
    var age = ageInput.value;


    if (age == "under18") {
      price = (kmToGo * 0.21) - (kmToGo * 0.21 * 0.2);
      offerType = "Sconto Under 18";
    } else if (age == "maggiorenne") {
      price = kmToGo * 0.21;
      offerType = "Ordinaria";
    } else {
      price = (kmToGo * 0.21) - (kmToGo * 0.21 * 0.4);
      offerType = "Sconto Over 65";
    }

    document.getElementById("passenger_name").innerHTML= userName;

    document.getElementById("info_offer_type").innerHTML= offerType;
    document.getElementById("info_carriage_numb").innerHTML= Math.floor(Math.random() * 9) + 1;
    document.getElementById("info_CP_code").innerHTML= Math.floor(Math.random() * (100000 - 90000)) + 90000;
    document.getElementById("info_ticket_price").innerHTML= price.toFixed(2) + " €";
    document.getElementById("biglietto").classList.remove("hidden");
    
  }
);

btnAnnulla.addEventListener("click",
  function() {
    document.getElementById("biglietto").classList.add("hidden");
    document.getElementById("user_name").value = "";
    document.getElementById("km_to_go").value = "";
    document.getElementById("age").value = "";
  }
);
