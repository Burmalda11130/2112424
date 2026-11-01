var inputname = document.getElementById("inputtext");
var inputnum = document.getElementById("inputnum");
var button = document.getElementById("button");

// Функция, которая срабатывает при клике
function sendData() {
  var valuetext = inputname.value;
  var valuenum = inputnum.value;

  if (valuetext == "") {
    alert("Поле текста пустое!");
    return;
  }
  if (valuenum == "") {
    alert("Поле чисел пустое!");
    return;
  }
  document.getElementById("username").textContent = valuetext;
  document.getElementById("numbers").textContent = valuenum;
  let data = {
    text: valuetext,
    num: valuenum,
  };

  tg.sendData(JSON.stringify(data));
}

// Привязываем функцию к клику на кнопку
button.addEventListener("click", sendData);
