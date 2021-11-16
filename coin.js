let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

let obverse = 0;
let reverse = 0;

flipBtn.addEventListener("click", () => {
  let i = Math.floor(Math.random() * 2);
  coin.style.animation = "none";
  if (i) {
    setTimeout(function () {
      coin.style.animation = "spin-obverse 3s forwards";
    }, 200);
    obverse++;
  } else {
    setTimeout(function () {
      coin.style.animation = "spin-reverse 3s forwards";
    }, 200);
    reverse++;
  }
  setTimeout(updateStats, 3000);
  disableButton();
});
function updateStats() {
  document.querySelector("#obverse-count").textContent = `Obverse: ${obverse}`;
  document.querySelector("#reverse-count").textContent = `Reverse: ${reverse}`;
}

resetBtn.addEventListener("click", () => {
  coin.style.animation = "none";
  obverse = 0;
  reverse = 0;
  updateStats();
});
