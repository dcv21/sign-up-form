const main = (event) => {
    const form = document.querySelector("#form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const password = form.elements["password"].value;
        const confirmPassword = form.elements["confirm_password"];

        if (password !== confirmPassword.value) {
            confirmPassword.setCustomValidity("Passwords do not match.");
            confirmPassword.reportValidity();
            confirmPassword.addEventListener("input", function handler(event) {
                confirmPassword.setCustomValidity("");
                confirmPassword.removeEventListener("input", handler);
            });
            return;
        }

        alert("Account created.");
        document.location.reload(true);
    });
};

window.addEventListener("DOMContentLoaded", (event) => {
    main(event);
});
