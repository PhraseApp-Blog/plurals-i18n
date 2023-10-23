const input = document.querySelector("#input");
const output = document.querySelector("#output");

const initialValue = 23456789;
input.value = initialValue;
input.addEventListener("input", render);

function render() {
  document.querySelector("#lblCount").textContent = i18next.t("count_label");
  document.querySelector("#lblMessage").textContent =
    i18next.t("message_label");

  output.textContent = i18next.t("message", { count: input.value });
}

function changeLanguage(lang) {
  i18next.changeLanguage(lang);
  document.lang = lang;
  document.dir = lang === "ar" ? "rtl" : "ltr";
  render();
}

i18next
  .init({
    lng: "en",
    debug: true,
    resources: {
      en: {
        translation: {
          count_label: "Count",
          message_label: "Message",
          message: "🌳 We've planted {{count}} trees so far!",
        },
      },
      ar: {
        translation: {
          count_label: "العدد",
          message_label: "الرسالة",
          message: "🌳 لقد زرعنا {{count}} شجرة حتى الآن!",
        },
      },
    },
  })
  .then((_) => {
    render();
  })
  .catch(console.error);
