let count = 0;
const text = document.getElementById("get-started").innerHTML;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function getStarted() {
    let el = document.getElementById("get-started");
    count += 1;
    el.innerHTML = `${text} ${count}`;
    el.style.backgroundColor = getRandomColor();
}

function showMenu() {
  let el = document.querySelector("nav");
  el.classList.toggle("unvisible");
}
