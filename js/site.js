// jQuery 3.x-style ready event and locally scoped $

document.getElementById("chance").addEventListener("return", myFunction);

function myFunction() {
  document.getElementById("chance").innerHTML = "WOW, WINNER!";
}
