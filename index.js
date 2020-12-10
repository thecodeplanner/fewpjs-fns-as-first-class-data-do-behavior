/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  let checkTime = parseInt(time)
  if (checkTime < 12)
    return "Good Morning"
  if (checkTime >= 12 && checkTime < 17)
    return "Good Afternoon"
  if (checkTime > 17)
    return "Good Evening"
}

function displayMessage(string) {
  document.getElementById("greeting").innerText = string;

}