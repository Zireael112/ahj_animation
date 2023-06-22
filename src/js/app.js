const btn = document.querySelector(".collap-btn");
const message = document.querySelector(".collap-container");
const pMessage = message.querySelector(".collap-text");

btn.addEventListener("click", () => {
  console.log(message.style.display);
  if (!Array.from(message.classList).includes("active")) {
    message.classList.add("active");
    return;
  }

  message.classList.remove("active");
});
