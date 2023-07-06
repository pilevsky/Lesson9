let btn1 = document.querySelector(".btn1");
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
btn1.onclick = function () {
  let out1 = a[5];
  console.log(out1);
  document.querySelector(".out1").innerHTML = out1;
};

let btn2 = document.querySelector(".btn2");
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
btn2.onclick = function () {
  for (let i = 0; b.length > i; i += 2) {
    console.log("Нечётный числа: " + b[i]);
  }
};

let btn3 = document.querySelector(".btn3");
let c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
btn3.onclick = function () {
  for (let i = 1; c.length > i; i += 2) {
    console.log("Чётный числа: " + b[i]);
  }
};

let btn4 = document.querySelector(".btn4");
let d = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];
btn4.onclick = function () {
  for (let i = 0; d.length > i; i++) {
    let f = d[i];
    for (let k = f.length - 1; k >= 0; k--) {
      console.log("Обратный порядок: " + f[k]);
    }
  }
};
