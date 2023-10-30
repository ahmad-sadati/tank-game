const tank1 = document.querySelector(".tank1");
const tank2 = document.querySelector(".tank2");
const playGround = document.querySelector(".bg");
let turn;
function gameInitialization() {
  tank1.style.left = "25px";
  tank1.style.top = "250px";
  tank2.style.right = "25px";
  tank2.style.top = "250px";
  turn = 1;
}
gameInitialization();
document.onkeydown = function (e) {
  switch (e.key) {
    case "ArrowUp":
      moveUp();
      break;
    case "ArrowDown":
      moveDown();
      break;
    case "ArrowLeft":
      moveLeft();
      break;
    case "ArrowRight":
      moveRight();
      break;
  }
};
document.onkeyup = function (e) {
  tank1.classList.remove("shakeIt");
};

function moveUp() {
  const currentPosition = tank1.style.top.replace(/px/g, "");
  tank1.classList.remove("down");
  tank1.classList.remove("left");
  tank1.classList.remove("right");
  tank1.classList.add("up");
  if (+currentPosition > 25) {
    tank1.style.top = +currentPosition - 20 + "px";
  } else {
    tank1.classList.add("shakeIt");
  }
}
function moveDown() {
  const currentPosition = tank1.style.top.replace(/px/g, "");
  tank1.classList.remove("up");
  tank1.classList.remove("left");
  tank1.classList.remove("right");
  tank1.classList.add("down");
  if (+currentPosition < playGround.clientHeight - 80) {
    tank1.style.top = +currentPosition + 20 + "px";
  } else {
    tank1.classList.add("shakeIt");
  }
}
function moveLeft() {
  const currentPosition = tank1.style.left.replace(/px/g, "");
  tank1.classList.remove("up");
  tank1.classList.remove("down");
  tank1.classList.remove("right");
  tank1.classList.add("left");
  if (+currentPosition > 25) {
    tank1.style.left = +currentPosition - 20 + "px";
  } else {
    tank1.classList.add("shakeIt");
  }
}
function moveRight() {
  const leftPosition = tank1.style.left.replace(/px/g, "");
  const topPostition = tank1.style.top.replace(/px/g, "");
  tank1.classList.remove("up");
  tank1.classList.remove("down");
  tank1.classList.remove("left");
  tank1.classList.add("right");
  console.log(+topPostition);
  if (+leftPosition < playGround.clientWidth - 80) {
    tank1.style.left = +leftPosition + 20 + "px";
  } else {
    tank1.classList.add("shakeIt");
  }
}
