var tablinks = document.getElementsByClassName("tab");
var tabcontents = document.getElementsByClassName("tab-content");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
//message
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxz-E1BUTT8QCStbbWGMkKBz0vk0weOKZZH_r2Sd6YYQlJIL0bIRKobZ2T1BUImOGcj/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
//--------------------------------------------------------------------------
const texts = ["Electronics and Communication Engineering", "at ", "BITM,Ballari"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
const typingSpeed = 75;
const erasingSpeed = 75;
const delayBetweenTexts = 200; // Delay after finishing a word

function type() {
  if (index < currentText.length) {
    letter = currentText.slice(0, ++index);
    document.querySelector(".typed-text").textContent = letter;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenTexts);
  }
}

function erase() {
  if (index > 0) {
    letter = currentText.slice(0, --index);
    document.querySelector(".typed-text").textContent = letter;
    setTimeout(erase, erasingSpeed);
  } else {
    count = (count + 1) % texts.length;
    currentText = texts[count];
    setTimeout(type, 500);
  }
}

currentText = texts[count];
type();
/*-----------------------------------------------------------------------------*/
