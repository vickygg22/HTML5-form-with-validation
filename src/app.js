/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const handleClick = e => {
    e.preventDefault();
    const row = document.querySelector("#firstRow");
    const col = document.querySelector("#firstCol");
    const alert = document.createElement("div");
    alert.classList.add("col-12", "p-2", "alert", "alert-danger");
    const textOfAlert = document.createTextNode("Some fields are missing");
    row.insertBefore(alert, row.firstChild);
    alert.appendChild(textOfAlert);
    const firstInput = document.querySelector("#firstInput");
    const secondInput = document.querySelector("#secondInput");
    const thirdInput = document.querySelector("#thirdInput");
    const fourthInput = document.querySelector("#fourthInput");
    const fifthInput = document.querySelector("#fifthInput");
    const sixthInput = document.querySelector("#sixthInput");
    const seventhInput = document.querySelector("#seventhInput");
    const eigthInput = document.querySelector("#eigthInput");
    const select = document.querySelector("#selectedd");

    if (firstInput.value === "") {
      firstInput.style.background = "#f8d7da";
    } else {
      firstInput.style.background = "white";
    }
    if (secondInput.value === "") {
      secondInput.style.background = "#f8d7da";
    } else {
      secondInput.style.background = "white";
    }
    if (thirdInput.value === "") {
      thirdInput.style.background = "#f8d7da";
    } else {
      thirdInput.style.background = "white";
    }
    if (fourthInput.value === "") {
      fourthInput.style.background = "#f8d7da";
    } else {
      fourthInput.style.background = "white";
    }
    if (fifthInput.value === "") {
      fifthInput.style.background = "#f8d7da";
    } else {
      fifthInput.style.background = "white";
    }
    if (sixthInput.value === "") {
      sixthInput.style.background = "#f8d7da";
    } else {
      sixthInput.style.background = "white";
    }
    if (seventhInput.value === "") {
      seventhInput.style.background = "#f8d7da";
    } else {
      seventhInput.style.background = "white";
    }
    if (eigthInput.value === "") {
      eigthInput.style.background = "#f8d7da";
    } else {
      eigthInput.style.background = "white";
    }
    if (document.querySelector("#selectedd").value == "0") {
      select.style.background = "#f8d7da";
    } else {
      select.style.background = "white";
    }
  };
  const submission = document.querySelector("#submitBtn");
  submission.addEventListener("click", handleClick);
};
