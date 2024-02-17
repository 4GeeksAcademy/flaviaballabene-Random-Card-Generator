window.onload = function() {
  const signs = ["♦", "♥", "♠", "♣"];
  let randomSigns = Math.floor(Math.random() * signs.length);

  const numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
  let randomNumbers = Math.floor(Math.random() * numbers.length);

  const elementSigns = document.getElementsByClassName("signs");
  elementSigns[0].innerHTML = `${signs[randomSigns]}`;
  elementSigns[1].innerHTML = `${signs[randomSigns]}`;

  const elementNumbers = document.getElementById("element-center");
  elementNumbers.innerHTML = `${numbers[randomNumbers]}`;

  function colorSigns(sign) {
    if (sign === "♥" || sign === "♦") {
      for (let i = 0; i < elementSigns.length; i++) {
        elementSigns[i].style.color = "red";
      }
    }
  }
  colorSigns(signs[randomSigns]);

  function colorNumbers(sign) {
    if (sign === "♥" || sign === "♦") {
      elementNumbers.style.color = "red";
    }
  }
  colorNumbers(signs[randomSigns]);

  const clickButton = document.getElementById("click");
  clickButton.addEventListener("click", e => {
    window.location.reload();
    elementSigns[0].innerHTML = `${signs[randomSigns]}`;
    elementSigns[1].innerHTML = `${signs[randomSigns]}`;
    elementNumbers.innerHTML = `${numbers[randomNumbers]}`;
  });
};
