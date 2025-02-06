(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "12/31/",  // Дата окончания акции
      date = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > date) {
    date = dayMonth + nextYear;
  }

  const countDown = new Date(date).getTime(),
      x = setInterval(function() {
        const now = new Date().getTime(),
              distance = countDown - now;
        document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        if (distance < 0) {
          document.getElementById("headline").innerText = "Акция завершена!";
          document.getElementById("countdown").style.display = "none";
          clearInterval(x);
        }
      }, 0);
})();

var divToggleVis = document.getElementById('spoiler_text');
var button = document.getElementById('spoiler_button');
button.onclick = function() {
    if (divToggleVis.className === 'fadeout') {
        divToggleVis.className = 'fadein';
    } else {
        divToggleVis.className = 'fadeout';
    }
    if (button.innerHTML === 'Узнать подробности') {
        button.innerHTML = 'Скрыть';
    } else {
        button.innerHTML = 'Узнать подробности';
    }
};
