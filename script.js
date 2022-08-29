const main = (event) => {
    const form = document.querySelector("#form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const password = form.elements["password"].value;
        const confirmPassword = form.elements["confirm_password"];

        if (password !== confirmPassword.value) {
            confirmPassword.setCustomValidity("Passwords do not match.");
            confirmPassword.reportValidity();
            confirmPassword.addEventListener("input", (event) => {
                confirmPassword.setCustomValidity("");
            });
            return;
        }

        alert("Account created.");
        document.location.reload(true);
    });
};

const formHandler = (event, form) => {};

window.addEventListener("DOMContentLoaded", (event) => {
    main(event);
});
