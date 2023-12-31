const input = document.querySelector("#input");
const output = document.querySelector("#output");
const lblCount = document.querySelector("#lblCount");
const lblMessage = document.querySelector("#lblMessage");

const initialValue = 1;
input.value = initialValue;
input.addEventListener("input", render);

function render() {
  lblCount.textContent = i18next.t("countLabel");
  lblMessage.textContent = i18next.t("messageLabel");

  output.textContent = i18next.t("message", { count: Number(input.value) });
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
          countLabel: "Count",
          messageLabel: "Message",
          message_zero: "🌳 We haven't planted any trees yet.",
          message_one: "🌳 We've planted {{count, number}} tree so far!",
          message_other: "🌳 We've planted {{count, number}} trees so far!",
        },
      },
      ar: {
        translation: {
          countLabel: "العدد",
          messageLabel: "الرسالة",
          message_zero: "🌳 لم نزرع أي شجرة حتى الآن!",
          message_one: "🌳 لقد زرعنا شجرة {{count, number}} حتى الآن!",
          message_two: "🌳 لقد زرعنا شجرتين {{count, number}} حتى الآن!",
          message_few: "🌳 لقد زرعنا {{count, number}} شجرات حتى الآن!",
          message_many: "🌳 لقد زرعنا {{count, number}} شجرة حتى الآن!",
          message_other: "🌳 لقد زرعنا {{count, number}} شجرة حتى الآن!",
        },
      },
    },
  })
  .then((_) => {
    render();
  })
  .catch(console.error);
