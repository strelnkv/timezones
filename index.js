const timeInput = document.querySelectorAll(".input-time");
const spb = document.querySelector(".spb");
const tomsk = document.querySelector(".tomsk");
const tbilisi = document.querySelector(".tbilisi");
const amster = document.querySelector(".amster");
const london = document.querySelector(".london");

function changeNum(array) {
  if (array[0] > 23) {
    array[0] = array[0] % 24; // Приводим значение часов к диапазону от 0 до 23
  } else if (array[0] < 0) {
    array[0] = (24 + array[0]) % 24; // Обрабатываем отрицательные значения часов
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 10) {
      array[i] = "0" + array[i];
    }
  }

  return array.join(":");
}

Array.from(timeInput).forEach((el) =>
  el.addEventListener("input", function (evt) {
    //если нажимаем спб
    if (evt.target.name === "Spb") {
      let input = evt.target.value;
      let arr = input.split(":");
      let tomskArr = [Number(arr[0]) + 4, Number(arr[1])];
      let tbilisiArr = [Number(arr[0]) + 1, Number(arr[1])];
      let amsterArr = [Number(arr[0]) - 2, Number(arr[1])];
      let londonArr = [Number(arr[0]) - 3, Number(arr[1])];

      tomsk.value = changeNum(tomskArr);
      tbilisi.value = changeNum(tbilisiArr);
      amster.value = changeNum(amsterArr);
      london.value = changeNum(londonArr);
    }
    //если нажимаем томск
    if (evt.target.name === "Tomsk") {
      let input = evt.target.value;
      let arr = input.split(":");
      let spbArr = [Number(arr[0]) - 4, Number(arr[1])];
      let tbilisiArr = [Number(arr[0]) - 3, Number(arr[1])];
      let amsterArr = [Number(arr[0]) - 6, Number(arr[1])];
      let londonArr = [Number(arr[0]) - 7, Number(arr[1])];

      spb.value = changeNum(spbArr);
      tbilisi.value = changeNum(tbilisiArr);
      amster.value = changeNum(amsterArr);
      london.value = changeNum(londonArr);
    }

    if (evt.target.name === "Tbilisi") {
      let input = evt.target.value;
      let arr = input.split(":");
      let spbArr = [Number(arr[0]) + 1, Number(arr[1])];
      let tomskArr = [Number(arr[0]) + 3, Number(arr[1])];
      let amsterArr = [Number(arr[0]) - 3, Number(arr[1])];
      let londonArr = [Number(arr[0]) - 4, Number(arr[1])];

      tomsk.value = changeNum(tomskArr);
      spb.value = changeNum(spbArr);
      amster.value = changeNum(amsterArr);
      london.value = changeNum(londonArr);
    }

    if (evt.target.name === "Amsterdam") {
      let input = evt.target.value;
      let arr = input.split(":");
      let spbArr = [Number(arr[0]) + 2, Number(arr[1])];
      let tomskArr = [Number(arr[0]) + 6, Number(arr[1])];
      let tbilisiArr = [Number(arr[0]) + 3, Number(arr[1])];
      let londonArr = [Number(arr[0]) - 1, Number(arr[1])];

      tomsk.value = changeNum(tomskArr);
      spb.value = changeNum(spbArr);
      tbilisi.value = changeNum(tbilisiArr);
      london.value = changeNum(londonArr);
    }

    if (evt.target.name === "London") {
      let input = evt.target.value;
      let arr = input.split(":");
      let spbArr = [Number(arr[0]) + 3, Number(arr[1])];
      let tomskArr = [Number(arr[0]) + 7, Number(arr[1])];
      let tbilisiArr = [Number(arr[0]) + 4, Number(arr[1])];
      let amsterArr = [Number(arr[0]) + 1, Number(arr[1])];

      tomsk.value = changeNum(tomskArr);
      spb.value = changeNum(spbArr);
      tbilisi.value = changeNum(tbilisiArr);
      amster.value = changeNum(amsterArr);
    }
  })
);

const button = document.querySelector(".button");
const buttonCopy = document.querySelector(".copy");
const p = document.querySelector(".result");

button.addEventListener("click", function () {
  let text = `У Маши в Томске будет ${tomsk.value}, либо в СПб ${spb.value};
  у Ани в Тбилиси ${tbilisi.value};
  у Лены в Лондоне ${london.value};
  у Наки в Амстердаме ${amster.value}.`;
  p.innerHTML = text;
  buttonCopy.style.display = "inline-block";
  buttonCopy.addEventListener("click", function () {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Текст скопирован!"))
      .catch((error) => console.error("Ошибка копирования: ", error));
  });
});
