function updateGreeting() {
  const now = new Date();
  const hour = now.getHours();

  let greeting = "";

  if (hour >= 5 && hour < 12) {
    greeting = "Selamat Pagi Mimicosmic";
  } else if (hour >= 12 && hour < 15) {
    greeting = "Selamat Siang Mimicosmic";
  } else if (hour >= 15 && hour < 18) {
    greeting = "Selamat Sore Mimicosmic";
  } else {
    greeting = "Selamat Malam Mimicosmic";
  }

  document.getElementById("greeting").innerText = greeting;
}

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  document.getElementById("time").innerText = `${hours}.${minutes} WIB`;
}

updateGreeting();
updateTime();
setInterval(updateTime, 1000);
