function getTime() {
  var today = new Date();
  var hr = today.getHours();
  //   console.log(hr.toString().length);
  document.getElementById("hr").innerText = checkPos(today.getHours());
  document.getElementById("min").innerText = checkPos(today.getMinutes());
  document.getElementById("sec").innerText = checkPos(today.getSeconds());
}

function checkPos(time) {
  if (time.toString().length == 1) return "0" + time;
  return time.toString();
}

setInterval(async function () {
  getTime();
}, 1000);
