function isTelegramWebApp() {
  const tg = window.Telegram.WebApp;
  if (tg && tg.initData && tg.initData.length > 0) {
    return true;
  }
  return false;
}
if (!isTelegramWebApp()) {
  document.body.innerHTML =
    "<div style='text-align:center; margin-top:20%; font-family:sans-serif;'><h1>Пожалуйста, откройте это приложение в Telegram!</h1></div>";
  throw new Error("Приложение запущено вне Telegram Web App");
}
var tg = window.Telegram.WebApp;
tg.ready();
tg.disableVerticalSwipes();

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("user_id");
let username = urlParams.get("username");

const input = document.getElementById("input");
const buttom = document.getElementById("buttom");

function send_info() {
  const textValue = input.value;
  let data = {
    info: textValue,
  };
  tg.sendData(JSON.stringify(data));
}

function check_username() {
  if (username == "None") {
    username = "Отсутсвует!";
    document.getElementById("username").textContent = username;
  } else;
  document.getElementById("username").textContent = username;
}

buttom.addEventListener("click", send_info);
document.getElementById("id").textContent = userId;
check_username();
