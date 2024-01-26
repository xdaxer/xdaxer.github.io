let firstCount = document.querySelector("#firstCount");
let secondCount = document.querySelector("#secondCount");
let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");
let divide = document.querySelector("#divide");
let multiply = document.querySelector("#multiply");
let result = document.querySelector("#result");

add.addEventListener("click", function () {
  if (firstCount.value.length == "" || secondCount.value.length == "") {
    alert("Error");
  } else {
    result.innerHTML = `
  ${firstCount.value} + ${secondCount.value} = ${
      parseFloat(firstCount.value) + parseFloat(secondCount.value)
    }
    
  `;
  }

  firstCount.value = "";
  secondCount.value = "";
});

subtract.addEventListener("click", function () {
  if (firstCount.value.length == "" || secondCount.value.length == "") {
    alert("Error");
  } else {
    result.innerHTML = `
  ${firstCount.value} - ${secondCount.value} = ${
      parseFloat(firstCount.value) - parseFloat(secondCount.value)
    }
    
  `;
  }

  firstCount.value = "";
  secondCount.value = "";
});

multiply.addEventListener("click", function () {
  if (firstCount.value.length == "" || secondCount.value.length == "") {
    alert("Error");
  } else {
    result.innerHTML = `
  ${firstCount.value} x ${secondCount.value} = ${
      parseFloat(firstCount.value) * parseFloat(secondCount.value)
    }
    
  `;
  }

  firstCount.value = "";
  secondCount.value = "";
});
