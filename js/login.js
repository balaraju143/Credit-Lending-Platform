/* =====================================================
   STACKLY LOGIN
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =================================================
           ELEMENTS
        ================================================= */

        const card =
            document.querySelector(
                ".stackly-login-card"
            );


        const leftContent =
            document.querySelector(
                ".login-left-content"
            );


        const formContent =
            document.querySelector(
                ".login-form-content"
            );


        const leftImage =
            document.querySelector(
                ".login-left-image"
            );


        const roleButtons =
            document.querySelectorAll(
                ".role-button"
            );


        const form =
            document.getElementById(
                "stacklyLoginForm"
            );


        const emailInput =
            document.getElementById(
                "loginEmail"
            );


        const passwordInput =
            document.getElementById(
                "loginPassword"
            );


        const emailError =
            document.getElementById(
                "loginEmailError"
            );


        const passwordError =
            document.getElementById(
                "loginPasswordError"
            );


        const passwordToggle =
            document.getElementById(
                "passwordToggle"
            );


        const successMessage =
            document.getElementById(
                "loginSuccess"
            );


        let selectedRole = "client";


        let emailTimer = null;

        let passwordTimer = null;


        /* =================================================
           GSAP ANIMATION
        ================================================= */

        if (
            typeof gsap !== "undefined"
        ) {


            const timeline =
                gsap.timeline();


            gsap.set(card, {
                opacity: 0,
                y: 45,
                scale: 0.97
            });


            gsap.set(leftContent, {
                opacity: 0,
                x: -60
            });


            gsap.set(formContent, {
                opacity: 0,
                x: 55
            });


            gsap.set(leftImage, {
                scale: 1.08
            });


            timeline.to(card, {

                opacity: 1,

                y: 0,

                scale: 1,

                duration: 0.9,

                ease: "power3.out"

            });


            timeline.to(leftImage, {

                scale: 1,

                duration: 1.3,

                ease: "power2.out"

            }, "-=0.8");


            timeline.to(leftContent, {

                opacity: 1,

                x: 0,

                duration: 0.8,

                ease: "power3.out"

            }, "-=0.9");


            timeline.to(formContent, {

                opacity: 1,

                x: 0,

                duration: 0.8,

                ease: "power3.out"

            }, "-=0.6");

        }


        /* =================================================
           ROLE SELECTION
        ================================================= */

        roleButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {


                        roleButtons.forEach(
                            function (item) {

                                item.classList.remove(
                                    "active"
                                );

                            }
                        );


                        this.classList.add(
                            "active"
                        );


                        selectedRole =
                            this.dataset.role;

                    }
                );

            }
        );


        /* =================================================
           SHOW ERROR
        ================================================= */

        function showError(
            input,
            errorElement,
            message,
            type
        ) {


            input.classList.add(
                "input-error"
            );


            errorElement.textContent =
                message;


            errorElement.classList.add(
                "show"
            );


            if (type === "email") {

                clearTimeout(
                    emailTimer
                );


                emailTimer =
                    setTimeout(
                        function () {

                            clearError(
                                input,
                                errorElement
                            );

                        },
                        3000
                    );

            }


            if (type === "password") {

                clearTimeout(
                    passwordTimer
                );


                passwordTimer =
                    setTimeout(
                        function () {

                            clearError(
                                input,
                                errorElement
                            );

                        },
                        3000
                    );

            }

        }


        /* =================================================
           CLEAR ERROR
        ================================================= */

        function clearError(
            input,
            errorElement
        ) {

            input.classList.remove(
                "input-error"
            );


            errorElement.classList.remove(
                "show"
            );


            errorElement.textContent = "";

        }


        /* =================================================
           EMAIL VALIDATION
        ================================================= */

        function validateEmail() {

            const email =
                emailInput.value.trim();


            if (email === "") {

                showError(
                    emailInput,
                    emailError,
                    "Please enter your email address.",
                    "email"
                );

                return false;

            }


            const emailPattern =
                /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;


            if (
                !emailPattern.test(email)
            ) {

                showError(
                    emailInput,
                    emailError,
                    "Please enter a valid email address.",
                    "email"
                );

                return false;

            }


            if (
                email.includes("..")
            ) {

                showError(
                    emailInput,
                    emailError,
                    "Please enter a valid email address.",
                    "email"
                );

                return false;

            }


            clearError(
                emailInput,
                emailError
            );


            return true;

        }


        /* =================================================
           PASSWORD VALIDATION
        ================================================= */

        function validatePassword() {

            const password =
                passwordInput.value;


            if (password === "") {

                showError(
                    passwordInput,
                    passwordError,
                    "Please enter your password.",
                    "password"
                );

                return false;

            }


            if (
                password.length < 6
            ) {

                showError(
                    passwordInput,
                    passwordError,
                    "Password must contain at least 6 characters.",
                    "password"
                );

                return false;

            }


            if (
                password.length > 50
            ) {

                showError(
                    passwordInput,
                    passwordError,
                    "Password cannot exceed 50 characters.",
                    "password"
                );

                return false;

            }


            clearError(
                passwordInput,
                passwordError
            );


            return true;

        }


        /* =================================================
           EMAIL LIVE CLEAR
        ================================================= */

        emailInput.addEventListener(
            "input",
            function () {

                clearError(
                    emailInput,
                    emailError
                );

            }
        );


        /* =================================================
           PASSWORD LIVE CLEAR
        ================================================= */

        passwordInput.addEventListener(
            "input",
            function () {

                clearError(
                    passwordInput,
                    passwordError
                );

            }
        );


        /* =================================================
           PASSWORD SHOW / HIDE
        ================================================= */

        passwordToggle.addEventListener(
            "click",
            function () {


                if (
                    passwordInput.type ===
                    "password"
                ) {

                    passwordInput.type =
                        "text";


                    this.innerHTML =
                        '<i class="fa-solid fa-eye"></i>';


                    this.setAttribute(
                        "aria-label",
                        "Hide password"
                    );

                } else {

                    passwordInput.type =
                        "password";


                    this.innerHTML =
                        '<i class="fa-solid fa-eye-slash"></i>';


                    this.setAttribute(
                        "aria-label",
                        "Show password"
                    );

                }

            }
        );


        /* =================================================
           FORM SUBMIT
        ================================================= */

        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                successMessage.classList.remove(
                    "show"
                );


                const emailValid =
                    validateEmail();


                const passwordValid =
                    validatePassword();


                if (
                    !emailValid ||
                    !passwordValid
                ) {

                    return;

                }


                /* =================================================
                   SUCCESS
                ================================================= */
             successMessage.classList.add(
    "show"
);


const submitButton =
    form.querySelector(
        ".login-submit"
    );


submitButton.disabled =
    true;


submitButton.style.opacity =
    "0.7";

/* Save email for Client Dashboard */
localStorage.setItem(
    "stacklyUserEmail",
    emailInput.value.trim()
);
/*
 * Keep success message visible
 * for exactly 3 seconds.
 */

setTimeout(
    function () {

        successMessage.classList.remove(
            "show"
        );


        /*
         * Redirect based on selected role
         * after the 3-second message.
         */

        if (
            selectedRole ===
            "admin"
        ) {

            window.location.href =
                "admin-dashboard.html";

        } else {

            window.location.href =
                "client-dashboard.html";

        }

    },
    3000
);
            }
        );


    }
);