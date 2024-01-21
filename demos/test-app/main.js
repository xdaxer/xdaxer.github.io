let container = document.querySelector("#container");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  btn.style.display = "none";
});

// First Qustiıon

let firstQuestionA = document.querySelector(".firstQusetion #a");
let firstQuestionB = document.querySelector(".firstQusetion #b");
let firstQuestionC = document.querySelector(".firstQusetion #c");
let firstQuestionD = document.querySelector(".firstQusetion #d");

firstQuestionA.addEventListener("click", function () {
  firstQuestionA.style.color = "red";
  firstQuestionB.style.color = "white";
  firstQuestionC.style.color = "white";
  firstQuestionD.style.color = "white";
  btn.style.display = "none";
});

firstQuestionB.addEventListener("click", function () {
  firstQuestionA.style.color = "white";
  firstQuestionB.style.color = "red";
  firstQuestionC.style.color = "white";
  firstQuestionD.style.color = "white";
  btn.style.display = "none";
});

firstQuestionC.addEventListener("click", function () {
  firstQuestionA.style.color = "white";
  firstQuestionB.style.color = "white";
  firstQuestionC.style.color = "red";
  firstQuestionD.style.color = "white";
  btn.style.display = "none";
});

firstQuestionD.addEventListener("click", function () {
  firstQuestionA.style.color = "white";
  firstQuestionB.style.color = "white";
  firstQuestionC.style.color = "white";
  firstQuestionD.style.color = "green";
  btn.style.display = "block";
});

btn.addEventListener("click", function () {
  container.classList.remove("firstQusetion");
  container.classList.add("secondQuestion");
  secondQuestionFun();

  firstQuestionA.style.color = "white";
  firstQuestionB.style.color = "white";
  firstQuestionC.style.color = "white";
  firstQuestionD.style.color = "white";
});

// Second Question

function secondQuestionFun() {
  let secondQuestion = document.querySelector(".secondQuestion #question");
  let secondQuestionA = document.querySelector(".secondQuestion #a");
  let secondQuestionB = document.querySelector(".secondQuestion #b");
  let secondQuestionC = document.querySelector(".secondQuestion #c");
  let secondQuestionD = document.querySelector(".secondQuestion #d");

  secondQuestion.innerHTML =
    "2.On which continent is the longest river located?";
  secondQuestionA.innerHTML = "A) Asia";
  secondQuestionB.innerHTML = "B) Europe";
  secondQuestionC.innerHTML = "C) Africa";
  secondQuestionD.innerHTML = "D)  South America";

  secondQuestionA.addEventListener("click", function () {
    secondQuestionA.style.color = "red";
    secondQuestionB.style.color = "white";
    secondQuestionC.style.color = "white";
    secondQuestionD.style.color = "white";
    btn.style.display = "none";
  });

  secondQuestionB.addEventListener("click", function () {
    secondQuestionA.style.color = "white";
    secondQuestionB.style.color = "red";
    secondQuestionC.style.color = "white";
    secondQuestionD.style.color = "white";
    btn.style.display = "none";
  });

  secondQuestionC.addEventListener("click", function () {
    secondQuestionA.style.color = "white";
    secondQuestionB.style.color = "white";
    secondQuestionC.style.color = "green";
    secondQuestionD.style.color = "white";
    btn.style.display = "block";
  });

  secondQuestionD.addEventListener("click", function () {
    secondQuestionA.style.color = "white";
    secondQuestionB.style.color = "white";
    secondQuestionC.style.color = "white";
    secondQuestionD.style.color = "red";
    btn.style.display = "none";
  });

  btn.addEventListener("click", function () {
    container.classList.remove("secondQuestion");
    container.classList.add("thirdQuestion");
    thirdQuestionFun();

    secondQuestionA.style.color = "white";
    secondQuestionB.style.color = "white";
    secondQuestionC.style.color = "white";
    secondQuestionD.style.color = "white";
  });
}

//Third Question

function thirdQuestionFun() {
  let thirdQuestion = document.querySelector(".thirdQuestion #question");
  let thirdQuestionA = document.querySelector(".thirdQuestion #a");
  let thirdQuestionB = document.querySelector(".thirdQuestion #b");
  let thirdQuestionC = document.querySelector(".thirdQuestion #c");
  let thirdQuestionD = document.querySelector(".thirdQuestion #d");

  thirdQuestion.innerHTML = "3. Who wrote the famous work Romeo and Juliet ?";
  thirdQuestionA.innerHTML = "A) William Shakespeare";
  thirdQuestionB.innerHTML = "B) Charles Dickens";
  thirdQuestionC.innerHTML = "C) Jane Austen";
  thirdQuestionD.innerHTML = "D) Leo Tolstoy";

  thirdQuestionA.addEventListener("click", function () {
    thirdQuestionA.style.color = "green";
    thirdQuestionB.style.color = "white";
    thirdQuestionC.style.color = "white";
    thirdQuestionD.style.color = "white";
    btn.style.display = "block";
  });

  thirdQuestionB.addEventListener("click", function () {
    thirdQuestionA.style.color = "white";
    thirdQuestionB.style.color = "red";
    thirdQuestionC.style.color = "white";
    thirdQuestionD.style.color = "white";
    btn.style.display = "none";
  });

  thirdQuestionC.addEventListener("click", function () {
    thirdQuestionA.style.color = "white";
    thirdQuestionB.style.color = "white";
    thirdQuestionC.style.color = "red";
    thirdQuestionD.style.color = "white";
    btn.style.display = "none";
  });

  thirdQuestionD.addEventListener("click", function () {
    thirdQuestionA.style.color = "white";
    thirdQuestionB.style.color = "white";
    thirdQuestionC.style.color = "white";
    thirdQuestionD.style.color = "red";
    btn.style.display = "none";
  });

  btn.addEventListener("click", function () {
    container.classList.remove("thirdQuestion");
    container.classList.add("fourthQuestion");
    fourthQuestionFun();

    thirdQuestionA.style.color = "white";
    thirdQuestionB.style.color = "white";
    thirdQuestionC.style.color = "white";
    thirdQuestionD.style.color = "white";
  });
}

// Fourth Question

function fourthQuestionFun() {
  let fourthQuestion = document.querySelector(".fourthQuestion #question");
  let fourthQuestionA = document.querySelector(".fourthQuestion #a");
  let fourthQuestionB = document.querySelector(".fourthQuestion #b");
  let fourthQuestionC = document.querySelector(".fourthQuestion #c");
  let fourthQuestionD = document.querySelector(".fourthQuestion #d");

  fourthQuestion.innerHTML = "4. In which city is the Eiffel Tower located?";
  fourthQuestionA.innerHTML = "A) London";
  fourthQuestionB.innerHTML = "B) Berlin";
  fourthQuestionC.innerHTML = "C) Paris";
  fourthQuestionD.innerHTML = "D) Madrid";

  fourthQuestionA.addEventListener("click", function () {
    fourthQuestionA.style.color = "red";
    btn.style.display = "none";
  });

  fourthQuestionB.addEventListener("click", function () {
    fourthQuestionB.style.color = "red";
    btn.style.display = "none";
  });

  fourthQuestionC.addEventListener("click", function () {
    fourthQuestionC.style.color = "green";
    btn.style.display = "block";
  });

  fourthQuestionD.addEventListener("click", function () {
    fourthQuestionD.style.color = "red";
    btn.style.display = "none";
  });

  btn.addEventListener("click", function () {
    container.classList.remove("secondQusetion");
    container.classList.add("fourthQuestion");
    fifthQuestionFun();

    fourthQuestionA.style.color = "white";
    fourthQuestionB.style.color = "white";
    fourthQuestionC.style.color = "white";
    fourthQuestionD.style.color = "white";
  });
}

// Fifth Question

function fifthQuestionFun() {
  let fourthQuestion = document.querySelector(".fourthQuestion #question");
  let fourthQuestionA = document.querySelector(".fourthQuestion #a");
  let fourthQuestionB = document.querySelector(".fourthQuestion #b");
  let fourthQuestionC = document.querySelector(".fourthQuestion #c");
  let fourthQuestionD = document.querySelector(".fourthQuestion #d");

  fourthQuestion.innerHTML = "5. Whose painting is the Mona Lisa?";
  fourthQuestionA.innerHTML = "A) Vincent van Gogh";
  fourthQuestionB.innerHTML = "B) Charles Dickens";
  fourthQuestionC.innerHTML = "C) Leonardo da Vinci";
  fourthQuestionD.innerHTML = "D) Austrian Painter";

  fourthQuestionA.addEventListener("click", function () {
    fourthQuestionA.style.color = "`red`";
    btn.style.display = "none";
  });

  fourthQuestionB.addEventListener("click", function () {
    fourthQuestionB.style.color = "red";
    btn.style.display = "none";
  });

  fourthQuestionC.addEventListener("click", function () {
    fourthQuestionC.style.color = "green";
    btn.style.display = "block";
  });

  fourthQuestionD.addEventListener("click", function () {
    fourthQuestionD.style.color = "red";
    btn.style.display = "none";
  });

  btn.addEventListener("click", function () {
    document.querySelector("body").innerHTML = `<div>

      <h1> Finish </h1></div>`;

    fourthQuestionA.style.color = "white";
    fourthQuestionB.style.color = "white";
    fourthQuestionC.style.color = "white";
    fourthQuestionD.style.color = "white";
  });
}
