const input = document.querySelector("#input");
const output = document.querySelector("#output");

const message = "🌳 We've planted {count} trees so far!";

input.addEventListener("input", () => {
  output.textContent = message.replace("{count}", input.value);
});

input.value = 23456789;
input.dispatchEvent(new InputEvent("input"));
