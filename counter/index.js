let value = document.querySelector(".value");
const button = document.querySelectorAll(".btn");
let count = 0;
button.forEach((btn) => {
  btn.addEventListener(`click`, (e) => {
    let style = e.currentTarget.classList;
    if (style.contains("increase")) {
      count++;
    } else if (style.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count == 0) {
      value.style.color = "black";
    }
    value.innerHTML = count;
  });
});
