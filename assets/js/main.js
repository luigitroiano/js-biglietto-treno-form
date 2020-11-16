var btnGenera = document.getElementById("btn-genera");
var btnAnnulla = document.getElementById("btn-annulla");

btnGenera.addEventListener("click",
  function() {
    var userNameInput = document.getElementById("user_name");
    var kmToGoInput = document.getElementById("km_to_go");
    var ageInput = document.getElementById("age");



    var userName = userNameInput.value;
    var kmToGo = kmToGoInput.value;
    var age = ageInput.value;
    console.log(userName, kmToGo, age);
  }
);

btnAnnulla.addEventListener("click",
  function() {


  }
);
