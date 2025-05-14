//Challenge 1
function displayDate() {
  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = new Date();
}

setTimeout(displayDate, 5000);

//Challenge 2

function showCurrentMilliseconds() {
  let millisecondsElement = document.querySelector("#milliseconds");
  let currentDate = new Date();
  millisecondsElement.innerHTML = currentDate.getMilliseconds();
}
setInterval(showCurrentMilliseconds, 1);
