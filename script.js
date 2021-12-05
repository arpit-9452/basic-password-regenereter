const container = document.getElementById("conatiner-1");
container.addEventlistener("submit", (e) => {});

function checkForm() {
  var firstInput = document.getElementById("input-1").value;
  var secondInput = document.getElementById("input-2").value;
  var mustCharecter = 8;

  if (firstInput.length <= mustCharecter) {
    alert("passsword must be 8 Charecters");
    return false;
  } else if (firstInput != secondInput) {
    alert("Password Mismatch");
    return false;
  } else if (firstInput === secondInput) {
    window.location.replace("./index_2.html");
  }
}
checkForm();
