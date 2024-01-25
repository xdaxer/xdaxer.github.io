let sliderDom = document.querySelector("#slider");
let backBtn = document.querySelector("#back");
let nextBtn = document.querySelector("#next");
let images = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];
let number = 0;

backBtn.addEventListener("click", function () {
  if (number == 0) {
    number = images.length;
  }

  number--;
  console.log(number);
  sliderDom.innerHTML = `<img src="${images[number]}">`;
});

nextBtn.addEventListener("click", function () {
  if (number == 3) {
    number = -1;
  }

  number++;
  console.log(number);
  sliderDom.innerHTML = `<img src="${images[number]}">`;
});

sliderDom.innerHTML = `<img src="${images[number]}">`;
