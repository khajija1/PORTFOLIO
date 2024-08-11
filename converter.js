const convertToFButton = document.querySelector("#convertToF");
const convertToCButton = document.querySelector("#convertToC");
const celsiusInput = document.querySelector("#celsius");
const fahrenheitInput = document.querySelector("#fahrenheit");
const resultDisplay = document.querySelector("#result");
const buttons = document.querySelectorAll("button");
const inputs = document.getElementsByTagName("input");
const celsiusToFFunction = function () {
  const celsius = celsiusInput.value;
  if (celsius !== "") {
    const fahrenheit = (celsius * 9) / 5 + 32;
    resultDisplay.innerText = `${celsius}°C is ${fahrenheit.toFixed(1)}°F`;
    celsiusInput.value = "";
    resultDisplay.style.color = "black";
  } else {
    resultDisplay.innerText = "input is required";
    resultDisplay.style.color = "red";
  }
};
const fahrenheitToCFunction = function () {
  const fahrenheit = fahrenheitInput.value;
  if (fahrenheit !== "") {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    resultDisplay.innerText = `${fahrenheit}°F is ${celsius.toFixed(1)}°C`;
    fahrenheitInput.value = "";
    resultDisplay.style.color = "black";
  } else {
    resultDisplay.innerText = "input is required";
    resultDisplay.style.color = "red";
  }
};
convertToFButton.addEventListener("click", celsiusToFFunction);
convertToCButton.addEventListener("click", fahrenheitToCFunction);
celsiusInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    celsiusToFFunction();
  }
});
fahrenheitInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    fahrenheitToCFunction();
  }
});
for (let button of buttons) {
  button.style.fontFamily = "georgia";
}
for (let input of inputs) {
  input.style.border = "1px solid dodgerblue";
}
