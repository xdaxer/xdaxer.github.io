let firstCount = document.querySelector("#firstCount");
let secondCount = document.querySelector("#secondCount");
let additionButton = document.querySelector("#addition");
let subtractionButton = document.querySelector("#subtraction");
let multiplicationButton = document.querySelector("#multiplication");
let divisionButton = document.querySelector("#division");
let result = document.querySelector("#result");
let clearButton = document.querySelector("#clear");

// Addition

function addition(newFirstCount, newSecondCount) {
  return newFirstCount + newSecondCount;
}

additionButton.addEventListener("click", function () {
  if (firstCount.value !== "" && secondCount.value !== "") {
    let firstValue = parseFloat(firstCount.value);
    let secondValue = parseFloat(secondCount.value);
    result.textContent = `${firstCount.value} + ${
      secondCount.value
    } = ${addition(firstValue, secondValue)}`;
  } else {
    alert("Please Enter a Value");
    result.textContent = "  ";
  }

  firstCount.value = "";
  secondCount.value = "";
});

//  Subtraction

function subtraction(newFirstCount, newSecondCount) {
  return newFirstCount - newSecondCount;
}

subtractionButton.addEventListener("click", function () {
  if (firstCount.value !== "" && secondCount.value !== "") {
    let firstValue = parseFloat(firstCount.value);
    let secondValue = parseFloat(secondCount.value);
    result.textContent = `${firstCount.value} - ${
      secondCount.value
    } = ${subtraction(firstValue, secondValue)}`;
  } else {
    alert("Please Enter a Value");
    result.textContent = "  ";
  }

  firstCount.value = "";
  secondCount.value = "";
});

// Multiplication;

function multiplication(newFirstCount, newSecondCount) {
  return newFirstCount * newSecondCount;
}

multiplicationButton.addEventListener("click", function () {
  if (firstCount.value !== "" && secondCount.value !== "") {
    let firstValue = parseFloat(firstCount.value);
    let secondValue = parseFloat(secondCount.value);
    result.textContent = `${firstCount.value} * ${
      secondCount.value
    } = ${multiplication(firstValue, secondValue)}`;

    firstCount.value = "";
    secondCount.value = "";
  } else {
    alert("Please Enter a Value");
    result.textContent = "  ";
  }

  firstCount.value = "";
  secondCount.value = "";
});

// Division

function division(newFirstCount, newSecondCount) {
  return newFirstCount / newSecondCount;
}

divisionButton.addEventListener("click", function () {
  if (firstCount.value !== "" && secondCount.value !== "") {
    let firstValue = parseFloat(firstCount.value);
    let secondValue = parseFloat(secondCount.value);
    result.textContent = `${firstCount.value} / ${
      secondCount.value
    } = ${division(firstValue, secondValue)}`;
  } else {
    alert("Please Enter a Value");
    result.textContent = "  ";
  }

  if (firstCount.value == 0 || secondCount.value == 0) {
    alert("You cannot use 0 in division");
    result.textContent = "  ";
  }

  firstCount.value = "";
  secondCount.value = "";
});

clearButton.addEventListener("click", function () {
  firstCount.value = "";
  secondCount.value = "";
  result.textContent = "";
});
