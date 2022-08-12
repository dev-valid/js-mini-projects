const color = document.querySelector('.color');
const button = document.querySelector('.btn');
const rangeValue = document.querySelectorAll('.range-value');
const rangeText = document.querySelectorAll('.range-text');

const getRandomNumber = () => {
  return Math.floor(Math.random() * 256);
};

const changeColor = (R, G, B) => {
  let colorCode = `rgb(${R}, ${G}, ${B})`;
  document.body.style.backgroundColor = colorCode;
  color.textContent = colorCode;
  rangeValue[0].value = R;
  rangeValue[1].value = G;
  rangeValue[2].value = B;
  rangeText[0].textContent = rangeValue[0].value;
  rangeText[1].textContent = rangeValue[1].value;
  rangeText[2].textContent = rangeValue[2].value;
};

let red = rangeValue[0].value;
let green = rangeValue[1].value;
let blue = rangeValue[2].value;

rangeValue[0].oninput = function () {
  red = this.value;
  changeColor(red, green, blue);
};
rangeValue[1].oninput = function () {
  green = this.value;
  changeColor(red, green, blue);
};
rangeValue[2].oninput = function () {
  blue = this.value;
  changeColor(red, green, blue);
};

button.addEventListener('click', () => {
  red = getRandomNumber();
  green = getRandomNumber();
  blue = getRandomNumber();
  changeColor(red, green, blue);
});
