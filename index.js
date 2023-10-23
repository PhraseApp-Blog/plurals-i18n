const input = document.querySelector("#input");
const output = document.querySelector("#output");

const message_en = "🌳 We've planted {count} trees so far!";
const initialValue = 23456789;

input.addEventListener("input", () => {
  output.textContent = message_en.replace("{count}", input.value);
});

input.value = initialValue;
input.dispatchEvent(new InputEvent("input"));
