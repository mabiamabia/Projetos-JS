const msg1 = document.getElementById("msg1");

msg1.addEventListener("click", () => {
  document.body.style.background = randomBg();
});

function confirmar() {
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}
