const input = document.querySelector("#input");
const output = document.querySelector("#output");
const ordinalOutput = document.querySelector("#ordinalOutput");
const lblCount = document.querySelector("#lblCount");
const lblMessage = document.querySelector("#lblMessage");
const lblOrdinalMessage = document.querySelector("#lblOrdinalMessage");

const initialValue = 1;
input.value = initialValue;
input.addEventListener("input", render);

function render() {
  lblCount.textContent = i18next.t("countLabel");
  lblMessage.textContent = i18next.t("messageLabel");
  lblOrdinalMessage.textContent = i18next.t("ordinalMessageLabel");

  output.textContent = i18next.t("message", { count: Number(input.value) });
  ordinalOutput.textContent = i18next.t("ordinalMessage", {
    count: Number(input.value),
  });
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
          countLabel: "Count",
          messageLabel: "Message",
          message: `
            {count, plural,
              =0 {🌳 We haven't planted any trees yet!}
              one {🌳 We've planted one tree so far!}
              other {🌳 We've planted # trees so far!}
            }`,
          ordinalMessageLabel: "Ordinal Message",
          ordinalMessage: `Yay! Our
              {count, selectordinal,
                one {#st}
                two {#nd}
                few {#rd}
                other {#th}
              }
            tree!`,
        },
      },
      ar: {
        translation: {
          countLabel: "العدد",
          messageLabel: "الرسالة",
          message: `{count, plural,
                zero {🌳 لم نزرع أي شجرة حتى الآن!}
                one {🌳 لقد زرعنا شجرة {count, number} حتى الآن!}
                two {🌳 لقد زرعنا شجرتين # حتى الآن!}
                few {🌳 لقد زرعنا # شجرات حتى الآن!}
                many {🌳 لقد زرعنا # شجرة حتى الآن!}
                other {🌳 لقد زرعنا # شجرة حتى الآن!}
            }`,
          ordinalMessageLabel: "الرسالة الترتيبية",
          ordinalMessage: `
            رائع! شجرتنا الـ
            {count, selectordinal, other {#}}
            !`,
        },
      },
    },
  })
  .then((_) => {
    render();
  })
  .catch(console.error);
