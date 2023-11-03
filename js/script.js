const tank1 = document.querySelector(".tank1");
const ball = document.querySelector(".ball");
const tank2 = document.querySelector(".tank2");
const divar1 = document.querySelector(".divar1");
const playGround = document.querySelector(".bg");
let turn, tank, divar, jahat, target;

function gameInitialization() {
  tank1.style.left = "25px";
  ball.style.left = "42px";
  tank1.style.top = "250px";
  ball.style.top = "275px";
  tank2.style.right = "25px";
  tank2.style.top = "250px";
  divar1.style.top = "100px";
  divar1.style.left = "100px";
  turn = 1;
}
gameInitialization();
divar = {
  x: +divar1.style.left.replace(/px/g, ""),
  y: +divar1.style.top.replace(/px/g, ""),
  width: divar1.clientWidth,
  height: divar1.clientHeight,
};
let timer = null;
let aiPath = [
  {
    x: 12,
    y: 45
  },
  {
    x: 45,
    y: 45
  },
  {
    x: 90,
    y: 45
  },
  {
    x: 90,
    y: 80
  },
]
document.onkeydown = function (e) {
  tank = {
    x: +tank1.style.left.replace(/px/g, ""),
    y: +tank1.style.top.replace(/px/g, ""),
    width: tank1.clientWidth,
    height: tank1.clientHeight,
  };
  // if (timer) {
  //   clearTimeout(timer);
  //   timer = null;
  // }
  // timer = setTimeout(() => {

  // }, 200);
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
    case " ":
      shoot();
      break;
  }
};
document.onkeyup = function (e) {
  tank1.classList.remove("shakeIt");
};

function moveUp () {
  jahat = 'up';
  const currentPosition = tank1.style.top.replace(/px/g, "");
  tank1.classList.remove("down");
  tank1.classList.remove("left");
  tank1.classList.remove("right");
  tank1.classList.add("up");
  if (+currentPosition > 25 && !isCollide(tank,divar)) {
    tank1.style.top = +currentPosition - 20 + "px";
    ball.style.top = +currentPosition - 20 + "px";
  } else {
    tank1.classList.add("shakeIt");
  }
}
function moveDown () {
  jahat = "down";
  
  const currentPosition = tank1.style.top.replace(/px/g, "");
  tank1.classList.remove("up");
  tank1.classList.remove("left");
  tank1.classList.remove("right");
  tank1.classList.add("down");
  if (+currentPosition < playGround.clientHeight - 80) {
    tank1.style.top = +currentPosition + 20 + "px";
    ball.style.top = +currentPosition + 20 + "px";
  } else {
    tank1.classList.add("shakeIt");
  }
}
function moveLeft () {
  jahat = "left";
  
  const currentPosition = tank1.style.left.replace(/px/g, "");
  tank1.classList.remove("up");
  tank1.classList.remove("down");
  tank1.classList.remove("right");
  tank1.classList.add("left");
  if (+currentPosition > 25 && !isCollide(tank, divar)) {
    tank1.style.left = +currentPosition - 20 + "px";
    ball.style.left = +currentPosition - 20 + "px";
  } else {
    tank1.classList.add("shakeIt");
  }
}
function moveRight () {
  jahat = "right";
  
  const leftPosition = tank1.style.left.replace(/px/g, "");
  const topPostition = tank1.style.top.replace(/px/g, "");
  tank1.classList.remove("up");
  tank1.classList.remove("down");
  tank1.classList.remove("left");
  tank1.classList.add("right");
  console.log(+topPostition);
  if (+leftPosition < playGround.clientWidth - 80 && !isCollide(tank, divar)) {
    tank1.style.left = +leftPosition + 20 + "px";
    ball.style.left = +leftPosition + 20 + "px";
  } else {
    tank1.classList.add("shakeIt");
  }
}
function shoot () {
  switch (jahat) {
    case "up":
      target = 0;
      ball.style.top = 0 + "px";
      break;
    case "down":
      target = playGround.clientHeight;
      ball.style.top = target + "px";
      break;
    case "left":
      target = 0;
      ball.style.left = 0 + "px";
      break;
    case "right":
      target = playGround.clientWidth;
      ball.style.left = target + 'px'
      break;
  }
}
function isCollide(tank, divar) {
  return !(
    tank.y + tank.height < divar.y ||
    tank.y > divar.y + divar.height ||
    tank.x + tank.width < divar.x ||
    tank.x > divar.x + divar.width
  );
}
