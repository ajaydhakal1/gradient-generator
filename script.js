let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let copyCode = document.querySelector("#colorcode");
let rgb1 = "#000";
let rgb2 = "#fff";
let popup = document.querySelector(".popup");

const hexValues = () => {
  const myHexValues = "0123456789abcdef";
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors = colors + myHexValues[Math.floor(Math.random() * 16)];
  }
  return colors;
};

const handleButton1 = () => {
  rgb1 = hexValues();
  console.log(rgb1);
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  copyCode.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
  btn1.innerText = `${rgb1}`;
};

const handleButton2 = () => {
  rgb2 = hexValues();
  console.log(rgb2);
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  copyCode.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
  btn2.innerText = `${rgb2}`;
};

btn1.addEventListener("click", () => {
  handleButton1();
});

btn2.addEventListener("click", () => {
  handleButton2();
});

copyCode.addEventListener("click", () => {
  popup.innerText = "Code Copied!";
  navigator.clipboard.writeText(copyCode.innerText);
});
