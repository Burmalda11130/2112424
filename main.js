function isTelegramWebApp() {
  const tg = window.Telegram.WebApp;
  if (tg && tg.initData && tg.initData.length > 0) {
    return true;
  }
  return false;
}

// if (!isTelegramWebApp()) {
//   document.body.innerHTML =
//     "<div style='text-align:center; margin-top:20%; font-family:sans-serif;'><h1>Пожалуйста, откройте это приложение в Telegram!</h1></div>";
//   throw new Error("Приложение запущено вне Telegram Web App");
// }

var tg = window.Telegram.WebApp;
tg.ready();
tg.disableVerticalSwipes();

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("user_id");
let username = urlParams.get("username");

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");

const send_info = document.getElementById("send_info");

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

function send_info_fun() {
  let data = {
    num: kol,
  };
  tg.sendData(JSON.stringify(data));
}

function check() {
  if (
    username === "None" ||
    username === null ||
    username === undefined ||
    username === ""
  ) {
    username = "Отсутствует";
    document.getElementById("name").textContent = username;
  } else {
    document.getElementById("name").textContent = username;
  }
}

plus.addEventListener("click", plus_kol);
minus.addEventListener("click", minus_kol);
reset.addEventListener("dblclick", reset_kol);
send_info.addEventListener("dblclick", send_info_fun);

document.getElementById("kol").textContent = kol;
document.getElementById("id").textContent = userId;
check();
