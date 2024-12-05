document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const email = document.getElementById("email");
    const iconAlert = document.getElementById("icon-alert");
    const textAlert = document.getElementById("text-alert");
    form.setAttribute("novalidate", true);
    form.addEventListener("submit", function (event) {
        if (!showAlertMessageIcon()) {
            event.preventDefault();
        }
        let dados = new FormData(form);

        // exibe os dados no console
        for (let [chave, valor] of dados.entries()) {
            console.log(`${chave}: ${valor}`);
        }
    });

    function showAlertMessageIcon() {
        let emailValue = email.value;
        let emailFilled = false;
        if (!emailValue || !emailValue.includes("@")) {
            iconAlert.style.display = "block";
            textAlert.style.display = "block";
        } else {
            emailFilled = true;
        }
        const mediaQuery = window.matchMedia("(max-width: 375px)");
        if (mediaQuery.matches) {
            iconAlert.style.right = "7rem";
            iconAlert.style.top = "28%";
            textAlert.style.marginLeft = "2.6rem";
        }
        return emailFilled;
    }
});
