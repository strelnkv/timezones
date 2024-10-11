const timeInput = document.querySelectorAll(".input-time");
const spb = document.querySelector(".spb");
const tomsk = document.querySelector(".tomsk");
const tbilisi = document.querySelector(".tbilisi");
const amster = document.querySelector(".amster");
const london = document.querySelector(".london");

Array.from(timeInput).forEach((el) =>
  el.addEventListener("input", function (evt) {
    //если нажимаем спб
    if (evt.target.name === "Spb") {
      let input = dayjs.tz(evt.target.value, "HH:mm", "Europe/Moscow");

      tomsk.value = input.tz("Asia/Tomsk").format("HH:mm");
      tbilisi.value = input.tz("Asia/Tbilisi").format("HH:mm");
      amster.value = input.tz("Europe/Amsterdam").format("HH:mm");
      london.value = input.tz("Europe/London").format("HH:mm");
    }
    //если нажимаем томск
    if (evt.target.name === "Tomsk") {
      let input = dayjs(evt.target.value, "HH:mm", "Asia/Tomsk");

      spb.value = input.tz("Europe/Moscow").format("HH:mm");
      tbilisi.value = input.tz("Asia/Tbilisi").format("HH:mm");
      amster.value = input.tz("Europe/Amsterdam").format("HH:mm");
      london.value = input.tz("Europe/London").format("HH:mm");
    }
    //если нажимаем тбилиси
    if (evt.target.name === "Tbilisi") {
      let input = dayjs(evt.target.value, "HH:mm", "Asia/Tbilisi");

      tomsk.value = input.tz("Asia/Tomsk").format("HH:mm");
      spb.value = input.tz("Europe/Moscow").format("HH:mm");
      amster.value = input.tz("Europe/Amsterdam").format("HH:mm");
      london.value = input.tz("Europe/London").format("HH:mm");
    }
    //если нажимаем амстердам
    if (evt.target.name === "Amsterdam") {
      let input = dayjs.tz(evt.target.value, "HH:mm", "Europe/Amsterdam");

      tomsk.value = input.tz("Asia/Tomsk").format("HH:mm");
      spb.value = input.tz("Europe/Moscow").format("HH:mm");
      tbilisi.value = input.tz("Asia/Tbilisi").format("HH:mm");
      london.value = input.tz("Europe/London").format("HH:mm");
    }

    if (evt.target.name === "London") {
      let input = dayjs.tz(evt.target.value, "HH:mm", "Europe/London");

      tomsk.value = input.tz("Asia/Tomsk").format("HH:mm");
      spb.value = input.tz("Europe/Moscow").format("HH:mm");
      tbilisi.value = input.tz("Asia/Tbilisi").format("HH:mm");
      amster.value = input.tz("Europe/Amsterdam").format("HH:mm");
    }
  })
);

const button = document.querySelector(".button");
const buttonCopy = document.querySelector(".copy");
const p = document.querySelector(".result");

button.addEventListener("click", function () {
  let text = `Томск: ${tomsk.value}
  СПб: ${spb.value};
  Тбилиси: ${tbilisi.value};
  Лондон: ${london.value};
  Амстердам: ${amster.value}.`;
  p.innerHTML = text;
  buttonCopy.style.display = "inline-block";
  buttonCopy.addEventListener("click", function () {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Текст скопирован!"))
      .catch((error) => console.error("Ошибка копирования: ", error));
  });
});
