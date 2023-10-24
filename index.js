const input = document.querySelector("#input");
const output = document.querySelector("#output");
const lblCount = document.querySelector("#lblCount");
const lblMessage = document.querySelector("#lblMessage");

const initialValue = 1;
input.value = initialValue;
input.addEventListener("input", render);

function render() {
  lblCount.textContent = i18next.t("lblCount");
  lblMessage.textContent = i18next.t("lblMessage");

  output.textContent = i18next.t("message", { count: Number(input.value) });
}

function changeLanguage(lang) {
  i18next.changeLanguage(lang);
  document.lang = lang;
  document.dir = lang === "ar" ? "rtl" : "ltr";
  render();
}

i18next
  .use(window.i18nextICU)
  .init({
    lng: "en",
    debug: true,
    resources: {
      en: {
        translation: {
          lblCount: "Count",
          lblMessage: "Message",
          message:
            "🌳 We've planted {count, plural, one {# tree} other {# trees}} so far!",
        },
      },
      ar: {
        translation: {
          lblCount: "العدد",
          lblMessage: "الرسالة",
          message: `{count, plural,
                zero {🌳 لم نزرع أي شجرة حتى الآن!}
                one {🌳 لقد زرعنا شجرة # حتى الآن!}
                two {🌳 لقد زرعنا شجرتين # حتى الآن!}
                few {🌳 لقد زرعنا # شجرات حتى الآن!}
                many {🌳 لقد زرعنا # شجرة حتى الآن!}
                other {🌳 لقد زرعنا # شجرة حتى الآن!}
            }`,
        },
      },
    },
  })
  .then((_) => {
    render();
  })
  .catch(console.error);
