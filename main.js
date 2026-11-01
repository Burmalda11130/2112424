var tg = window.Telegram.WebApp;
tg.ready();
tg.disableVerticalSwipes();

// let data = {
//   text: valuetext,
//   num: valuenum,
// };
// tg.sendData(JSON.stringify(data));

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("user_id");
const username = urlParams.get("username");
document.getElementById("id").textContent = userId;
document.getElementById("name").textContent = username;

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");

let kol = 0;

function plus_kol() {
  kol += 1;
  document.getElementById("kol").textContent = kol;
  return;
}

function minus_kol() {
  kol -= 1;
  document.getElementById("kol").textContent = kol;
  return;
}

function reset_kol() {
  kol = 0;
  document.getElementById("kol").textContent = kol;
  return;
}

plus.addEventListener("click", plus_kol);
minus.addEventListener("click", minus_kol);
reset.addEventListener("dblclick", reset_kol);

document.getElementById("kol").textContent = kol;
