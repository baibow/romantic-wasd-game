const player = document.getElementById("player");
const heart = document.getElementById("heart");
const message = document.getElementById("message");

let x = 10;
let y = 10;
const speed = 15;

document.addEventListener("keydown", (e) => {
  if (e.key === "w") y -= speed;
  if (e.key === "s") y += speed;
  if (e.key === "a") x -= speed;
  if (e.key === "d") x += speed;

  // limit inside box
  x = Math.max(0, Math.min(360, x));
  y = Math.max(0, Math.min(360, y));

  player.style.left = x + "px";
  player.style.top = y + "px";

  checkWin();
});

function checkWin() {
  const p = player.getBoundingClientRect();
  const h = heart.getBoundingClientRect();

  if (
    p.left < h.right &&
    p.right > h.left &&
    p.top < h.bottom &&
    p.bottom > h.top
  ) {
    message.classList.remove("hidden");
  }
}
