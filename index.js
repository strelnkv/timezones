const timeInput = document.querySelectorAll(".input-time");
const spb = document.querySelector(".spb");
const tomsk = document.querySelector(".tomsk");
const tbilisi = document.querySelector(".tbilisi");
const amster = document.querySelector(".amster");
const london = document.querySelector(".london");
const berlin = document.querySelector(".berlin");

function setCityTime(citySelector, timezone) {
  const currentTime = dayjs().tz(timezone).format("HH:mm");
  citySelector.value = currentTime;
}

document.addEventListener("DOMContentLoaded", function () {
  setCityTime(tomsk, "Asia/Tomsk");
  setCityTime(spb, "Europe/Moscow");
  setCityTime(tbilisi, "Asia/Tbilisi");
  setCityTime(amster, "Europe/Amsterdam");
  setCityTime(london, "Europe/London");
  setCityTime(berlin, "Europe/Berlin");
});

Array.from(timeInput).forEach((el) =>
  el.addEventListener("input", function (evt) {
    //если нажимаем спб
    if (evt.target.name === "Spb") {
      let input = dayjs.tz(evt.target.value, "HH:mm", "Europe/Moscow");

      tomsk.value = input.tz("Asia/Tomsk").format("HH:mm");
      tbilisi.value = input.tz("Asia/Tbilisi").format("HH:mm");
      amster.value = input.tz("Europe/Amsterdam").format("HH:mm");
      london.value = input.tz("Europe/London").format("HH:mm");
      berlin.value = input.tz("Europe/Berlin").format("HH:mm");
    }
    //если нажимаем томск
    if (evt.target.name === "Tomsk") {
      let input = dayjs(evt.target.value, "HH:mm", "Asia/Tomsk");

      spb.value = input.tz("Europe/Moscow").format("HH:mm");
      tbilisi.value = input.tz("Asia/Tbilisi").format("HH:mm");
      amster.value = input.tz("Europe/Amsterdam").format("HH:mm");
      london.value = input.tz("Europe/London").format("HH:mm");
      berlin.value = input.tz("Europe/Berlin").format("HH:mm");
    }
    //если нажимаем тбилиси
    if (evt.target.name === "Tbilisi") {
      let input = dayjs(evt.target.value, "HH:mm", "Asia/Tbilisi");

      tomsk.value = input.tz("Asia/Tomsk").format("HH:mm");
      spb.value = input.tz("Europe/Moscow").format("HH:mm");
      amster.value = input.tz("Europe/Amsterdam").format("HH:mm");
      london.value = input.tz("Europe/London").format("HH:mm");
      berlin.value = input.tz("Europe/Berlin").format("HH:mm");
    }
    //если нажимаем амстердам
    if (evt.target.name === "Amsterdam") {
      let input = dayjs.tz(evt.target.value, "HH:mm", "Europe/Amsterdam");

      tomsk.value = input.tz("Asia/Tomsk").format("HH:mm");
      spb.value = input.tz("Europe/Moscow").format("HH:mm");
      tbilisi.value = input.tz("Asia/Tbilisi").format("HH:mm");
      london.value = input.tz("Europe/London").format("HH:mm");
      berlin.value = input.tz("Europe/Berlin").format("HH:mm");
    }
    //если нажимаем лондон
    if (evt.target.name === "London") {
      let input = dayjs.tz(evt.target.value, "HH:mm", "Europe/London");

      tomsk.value = input.tz("Asia/Tomsk").format("HH:mm");
      spb.value = input.tz("Europe/Moscow").format("HH:mm");
      tbilisi.value = input.tz("Asia/Tbilisi").format("HH:mm");
      amster.value = input.tz("Europe/Amsterdam").format("HH:mm");
      berlin.value = input.tz("Europe/Berlin").format("HH:mm");
    }

    //если нажимаем берлин
    if (evt.target.name === "Berlin") {
      let input = dayjs.tz(evt.target.value, "HH:mm", "Europe/Berlin");

      tomsk.value = input.tz("Asia/Tomsk").format("HH:mm");
      spb.value = input.tz("Europe/Moscow").format("HH:mm");
      tbilisi.value = input.tz("Asia/Tbilisi").format("HH:mm");
      amster.value = input.tz("Europe/Amsterdam").format("HH:mm");
      london.value = input.tz("Europe/London").format("HH:mm");
    }
  })
);

const button = document.querySelector(".button");
const buttonCopy = document.querySelector(".copy");
const p = document.querySelector(".result");

button.addEventListener("click", function () {
  let text = `
  Томск: ${tomsk.value};
  СПб: ${spb.value};
  Тбилиси: ${tbilisi.value};
  Амстердам: ${amster.value};
  Берлин: ${berlin.value};
  Лондон: ${london.value}.`;
  p.innerHTML = text.replace(/\n/g, "<br>");
  buttonCopy.style.display = "inline-block";
  buttonCopy.addEventListener("click", function () {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Текст скопирован!"))
      .catch((error) => console.error("Ошибка копирования: ", error));
  });
});
