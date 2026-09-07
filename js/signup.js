/* =====================================================
   STACKLY SIGNUP
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =================================================
           ELEMENTS
        ================================================= */

        const card =
            document.querySelector(
                ".stackly-signup-card"
            );


        const leftContent =
            document.querySelector(
                ".signup-left-content"
            );


        const formContent =
            document.querySelector(
                ".signup-form-content"
            );


        const leftImage =
            document.querySelector(
                ".signup-left-image"
            );


        const form =
            document.getElementById(
                "stacklySignupForm"
            );


        const nameInput =
            document.getElementById(
                "signupName"
            );


        const emailInput =
            document.getElementById(
                "signupEmail"
            );


        const phoneInput =
            document.getElementById(
                "signupPhone"
            );


        const passwordInput =
            document.getElementById(
                "signupPassword"
            );


        const confirmPasswordInput =
            document.getElementById(
                "signupConfirmPassword"
            );


        const termsInput =
            document.getElementById(
                "signupTerms"
            );


        const nameError =
            document.getElementById(
                "signupNameError"
            );


        const emailError =
            document.getElementById(
                "signupEmailError"
            );


        const phoneError =
            document.getElementById(
                "signupPhoneError"
            );


        const passwordError =
            document.getElementById(
                "signupPasswordError"
            );


        const confirmPasswordError =
            document.getElementById(
                "signupConfirmPasswordError"
            );


        const termsError =
            document.getElementById(
                "signupTermsError"
            );


        const successMessage =
            document.getElementById(
                "signupSuccess"
            );


        /* =================================================
           GSAP
        ================================================= */

        if (
            typeof gsap !== "undefined"
        ) {


            gsap.set(card, {
                opacity: 0,
                y: 45,
                scale: 0.97
            });


            gsap.set(leftImage, {
                scale: 1.08
            });


            gsap.set(leftContent, {
                opacity: 0,
                x: -60
            });


            gsap.set(formContent, {
                opacity: 0,
                x: 55
            });


            const timeline =
                gsap.timeline();


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
           ERROR TIMERS
        ================================================= */

        const errorTimers = {};


        /* =================================================
           SHOW ERROR
        ================================================= */

        function showError(
            input,
            errorElement,
            message
        ) {

            input.classList.add(
                "input-error"
            );


            errorElement.textContent =
                message;


            errorElement.classList.add(
                "show"
            );


            const id =
                input.id;


            clearTimeout(
                errorTimers[id]
            );


            errorTimers[id] =
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


            if (
                errorTimers[input.id]
            ) {

                clearTimeout(
                    errorTimers[input.id]
                );

            }

        }


        /* =================================================
           NAME VALIDATION
        ================================================= */

        function validateName() {

            const value =
                nameInput.value.trim();


            if (value === "") {

                showError(
                    nameInput,
                    nameError,
                    "Please enter your full name."
                );

                return false;

            }


            const namePattern =
                /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;


            if (
                !namePattern.test(value)
            ) {

                showError(
                    nameInput,
                    nameError,
                    "Name can contain letters and spaces only."
                );

                return false;

            }


            if (value.length < 2) {

                showError(
                    nameInput,
                    nameError,
                    "Name must contain at least 2 letters."
                );

                return false;

            }


            clearError(
                nameInput,
                nameError
            );


            return true;

        }


        /* =================================================
           EMAIL VALIDATION
        ================================================= */

        function validateEmail() {

            const value =
                emailInput.value.trim();


            if (value === "") {

                showError(
                    emailInput,
                    emailError,
                    "Please enter your email address."
                );

                return false;

            }


            const emailPattern =
                /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;


            if (
                !emailPattern.test(value)
            ) {

                showError(
                    emailInput,
                    emailError,
                    "Please enter a valid email address."
                );

                return false;

            }


            if (
                value.includes("..")
            ) {

                showError(
                    emailInput,
                    emailError,
                    "Please enter a valid email address."
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
           PHONE VALIDATION
        ================================================= */

        function validatePhone() {

            const value =
                phoneInput.value.trim();


            if (value === "") {

                showError(
                    phoneInput,
                    phoneError,
                    "Please enter your phone number."
                );

                return false;

            }


            const phonePattern =
                /^\+?[0-9][0-9\s-]{7,14}$/;


            if (
                !phonePattern.test(value)
            ) {

                showError(
                    phoneInput,
                    phoneError,
                    "Please enter a valid phone number."
                );

                return false;

            }


            const digits =
                value.replace(
                    /\D/g,
                    ""
                );


            if (
                digits.length < 8 ||
                digits.length > 15
            ) {

                showError(
                    phoneInput,
                    phoneError,
                    "Phone number must contain 8 to 15 digits."
                );

                return false;

            }


            clearError(
                phoneInput,
                phoneError
            );


            return true;

        }


        /* =================================================
           PASSWORD VALIDATION
        ================================================= */

        function validatePassword() {

            const value =
                passwordInput.value;


            if (value === "") {

                showError(
                    passwordInput,
                    passwordError,
                    "Please create a password."
                );

                return false;

            }


            if (value.length < 6) {

                showError(
                    passwordInput,
                    passwordError,
                    "Password must contain at least 6 characters."
                );

                return false;

            }


            if (value.length > 50) {

                showError(
                    passwordInput,
                    passwordError,
                    "Password cannot exceed 50 characters."
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
           CONFIRM PASSWORD
        ================================================= */

        function validateConfirmPassword() {

            const value =
                confirmPasswordInput.value;


            if (value === "") {

                showError(
                    confirmPasswordInput,
                    confirmPasswordError,
                    "Please confirm your password."
                );

                return false;

            }


            if (
                value !==
                passwordInput.value
            ) {

                showError(
                    confirmPasswordInput,
                    confirmPasswordError,
                    "Passwords do not match."
                );

                return false;

            }


            clearError(
                confirmPasswordInput,
                confirmPasswordError
            );


            return true;

        }


        /* =================================================
           TERMS
        ================================================= */

        function validateTerms() {

            if (
                !termsInput.checked
            ) {

                termsError.textContent =
                    "Please accept the Terms & Conditions.";


                termsError.classList.add(
                    "show"
                );


                clearTimeout(
                    errorTimers.signupTerms
                );


                errorTimers.signupTerms =
                    setTimeout(
                        function () {

                            termsError.classList.remove(
                                "show"
                            );

                            termsError.textContent =
                                "";

                        },
                        3000
                    );


                return false;

            }


            termsError.classList.remove(
                "show"
            );


            termsError.textContent = "";


            return true;

        }


        /* =================================================
           NAME INPUT
           ONLY LETTERS
        ================================================= */

        nameInput.addEventListener(
            "input",
            function () {


                this.value =
                    this.value.replace(
                        /[^A-Za-z\s]/g,
                        ""
                    );


                this.value =
                    this.value.replace(
                        /\s{2,}/g,
                        " "
                    );


                clearError(
                    nameInput,
                    nameError
                );

            }
        );


        /* =================================================
           EMAIL
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
           PHONE
        ================================================= */

        phoneInput.addEventListener(
            "input",
            function () {


                this.value =
                    this.value.replace(
                        /[^0-9+\s-]/g,
                        ""
                    );


                if (
                    this.value.indexOf("+") > 0
                ) {

                    this.value =
                        this.value.replace(
                            /\+/g,
                            ""
                        );

                }


                clearError(
                    phoneInput,
                    phoneError
                );

            }
        );


        /* =================================================
           PASSWORD INPUT
        ================================================= */

        passwordInput.addEventListener(
            "input",
            function () {

                clearError(
                    passwordInput,
                    passwordError
                );


                if (
                    confirmPasswordInput.value !== ""
                ) {

                    clearError(
                        confirmPasswordInput,
                        confirmPasswordError
                    );

                }

            }
        );


        /* =================================================
           CONFIRM PASSWORD INPUT
        ================================================= */

        confirmPasswordInput.addEventListener(
            "input",
            function () {

                clearError(
                    confirmPasswordInput,
                    confirmPasswordError
                );

            }
        );


        /* =================================================
           PASSWORD EYE ICONS
        ================================================= */

        const passwordToggles =
            document.querySelectorAll(
                ".signup-password-toggle"
            );


        passwordToggles.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {


                        const targetId =
                            this.dataset.target;


                        const target =
                            document.getElementById(
                                targetId
                            );


                        const icon =
                            this.querySelector(
                                "i"
                            );


                        if (
                            target.type ===
                            "password"
                        ) {

                            target.type =
                                "text";


                            icon.className =
                                "fa-solid fa-eye";


                            this.setAttribute(
                                "aria-label",
                                "Hide password"
                            );

                        } else {

                            target.type =
                                "password";


                            icon.className =
                                "fa-solid fa-eye-slash";


                            this.setAttribute(
                                "aria-label",
                                "Show password"
                            );

                        }

                    }
                );

            }
        );


        /* =================================================
           TERMS CHANGE
        ================================================= */

        termsInput.addEventListener(
            "change",
            function () {

                termsError.classList.remove(
                    "show"
                );

                termsError.textContent = "";

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


                const validName =
                    validateName();


                const validEmail =
                    validateEmail();


                const validPhone =
                    validatePhone();


                const validPassword =
                    validatePassword();


                const validConfirm =
                    validateConfirmPassword();


                const validTerms =
                    validateTerms();


                if (
                    !validName ||
                    !validEmail ||
                    !validPhone ||
                    !validPassword ||
                    !validConfirm ||
                    !validTerms
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
                        ".signup-submit"
                    );


                submitButton.disabled =
                    true;


                submitButton.style.opacity =
                    "0.7";


                /*
                 * Keep success message for
                 * exactly 3 seconds.
                 */

                setTimeout(
                    function () {


                        successMessage.classList.remove(
                            "show"
                        );


                        form.reset();


                        submitButton.disabled =
                            false;


                        submitButton.style.opacity =
                            "1";


                        /*
                         * Create Account
                         * → Login page
                         */

                        window.location.href =
                            "login.html";


                    },
                    3000
                );

            }
        );


        /* =================================================
           RESET SUCCESS ON PAGE LOAD
        ================================================= */

        successMessage.classList.remove(
            "show"
        );


    }
);