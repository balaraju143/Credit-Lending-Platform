/* =====================================================
   STACKLY CONTACT HERO - GSAP
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    const hero =
        document.querySelector(".stackly-contact-hero");

    if (!hero) return;


    /* =================================================
       ELEMENTS
    ================================================= */

    const background =
        hero.querySelector(".stackly-contact-hero-bg img");

    const overlay =
        hero.querySelector(".stackly-contact-hero-overlay");

    const breadcrumb =
        hero.querySelector(".stackly-contact-breadcrumb");

    const title =
        hero.querySelector(
            ".stackly-contact-hero-content h1"
        );

    const circle =
        hero.querySelector(".stackly-contact-circle");

    const dot =
        hero.querySelector(".stackly-contact-dot");


    /* =================================================
       INITIAL STATES
    ================================================= */

    gsap.set(background, {
        scale: 1.12
    });


    gsap.set(overlay, {
        opacity: 0
    });


    gsap.set(breadcrumb, {
        opacity: 0,
        y: 25
    });


    gsap.set(title, {
        opacity: 0,
        y: 45
    });


    gsap.set(circle, {
        opacity: 0,
        scale: 0.4
    });


    gsap.set(dot, {
        opacity: 0,
        scale: 0
    });


    /* =================================================
       HERO TIMELINE
    ================================================= */

    const heroTimeline = gsap.timeline();


    /* Background */

    heroTimeline.to(background, {

        scale: 1,

        duration: 1.5,

        ease: "power3.out"

    });


    /* Dark overlay */

    heroTimeline.to(overlay, {

        opacity: 1,

        duration: 0.8,

        ease: "power2.out"

    }, "-=1.0");


    /* Breadcrumb */

    heroTimeline.to(breadcrumb, {

        opacity: 1,

        y: 0,

        duration: 0.65,

        ease: "power3.out"

    }, "-=0.25");


    /* Title */

    heroTimeline.to(title, {

        opacity: 1,

        y: 0,

        duration: 0.85,

        ease: "power3.out"

    }, "-=0.35");


    /* Circle */

    heroTimeline.to(circle, {

        opacity: 1,

        scale: 1,

        duration: 0.55,

        ease: "back.out(1.7)"

    }, "-=0.45");


    /* Dot */

    heroTimeline.to(dot, {

        opacity: 1,

        scale: 1,

        duration: 0.4,

        ease: "back.out(2)"

    }, "-=0.3");


});


/* =====================================================
   STACKLY CONTACT
   GSAP + FORM VALIDATION
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       GET SECTION
    ================================================= */

    const section =
        document.querySelector(".stackly-contact-section");

    if (!section) return;


    /* =================================================
       GSAP CHECK
    ================================================= */

    if (
        typeof gsap === "undefined"
    ) {

        console.warn("GSAP is not loaded.");

    } else {

        if (typeof ScrollTrigger !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }


        /* =================================================
           ELEMENTS
        ================================================= */

        const info =
            section.querySelector(".stackly-contact-info");

        const formWrap =
            section.querySelector(
                ".stackly-contact-form-wrap"
            );

        const details =
            section.querySelectorAll(
                ".stackly-contact-detail"
            );

        const social =
            section.querySelector(
                ".stackly-contact-social"
            );


        /* =================================================
           INITIAL STATES
        ================================================= */

        gsap.set(info, {
            opacity: 0,
            x: -90
        });


        gsap.set(formWrap, {
            opacity: 0,
            x: 100
        });


        gsap.set(details, {
            opacity: 0,
            x: -35
        });


        gsap.set(social, {
            opacity: 0,
            y: 20
        });


        /* =================================================
           ANIMATION
        ================================================= */

        const contactTimeline =
            gsap.timeline({

                scrollTrigger:
                    typeof ScrollTrigger !== "undefined"
                    ? {
                        trigger: section,
                        start: "top 75%",
                        once: true
                    }
                    : undefined

            });


        /* LEFT CONTENT */

        contactTimeline.to(info, {

            opacity: 1,

            x: 0,

            duration: 0.85,

            ease: "power3.out"

        });


        /* CONTACT DETAILS */

        contactTimeline.to(details, {

            opacity: 1,

            x: 0,

            duration: 0.55,

            stagger: 0.12,

            ease: "power3.out"

        }, "-=0.35");


        /* SOCIAL */

        contactTimeline.to(social, {

            opacity: 1,

            y: 0,

            duration: 0.5,

            ease: "power3.out"

        }, "-=0.25");


        /* RIGHT FORM */

        contactTimeline.to(formWrap, {

            opacity: 1,

            x: 0,

            duration: 0.95,

            ease: "power3.out"

        }, "-=0.85");

    }


    /* =================================================
       FORM
    ================================================= */

    const form =
        document.getElementById(
            "stacklyContactForm"
        );

    if (!form) return;


    /* =================================================
       FIELDS
    ================================================= */

    const nameInput =
        document.getElementById(
            "stacklyName"
        );

    const emailInput =
        document.getElementById(
            "stacklyEmail"
        );

    const phoneInput =
        document.getElementById(
            "stacklyPhone"
        );

    const subjectInput =
        document.getElementById(
            "stacklySubject"
        );

    const messageInput =
        document.getElementById(
            "stacklyMessage"
        );


    /* =================================================
       ERROR ELEMENTS
    ================================================= */

    const nameError =
        document.getElementById(
            "nameError"
        );

    const emailError =
        document.getElementById(
            "emailError"
        );

    const phoneError =
        document.getElementById(
            "phoneError"
        );

    const subjectError =
        document.getElementById(
            "subjectError"
        );

    const messageError =
        document.getElementById(
            "messageError"
        );


    const successMessage =
        document.getElementById(
            "contactSuccess"
        );


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

        if (!input || !errorElement) {
            return;
        }


        input.classList.add(
            "input-error"
        );


        errorElement.textContent =
            message;


        errorElement.classList.add(
            "show"
        );


        /* Clear old timer */

        const inputId =
            input.id;


        if (errorTimers[inputId]) {

            clearTimeout(
                errorTimers[inputId]
            );

        }


        /* Remove error after 3 seconds */

        errorTimers[inputId] =
            setTimeout(function () {

                errorElement.classList.remove(
                    "show"
                );

                input.classList.remove(
                    "input-error"
                );

                errorElement.textContent = "";

            }, 3000);

    }


    /* =================================================
       CLEAR ERROR
    ================================================= */

    function clearError(
        input,
        errorElement
    ) {

        if (!input || !errorElement) {
            return;
        }


        input.classList.remove(
            "input-error"
        );


        errorElement.classList.remove(
            "show"
        );


        errorElement.textContent = "";


        if (errorTimers[input.id]) {

            clearTimeout(
                errorTimers[input.id]
            );

            delete errorTimers[input.id];

        }

    }


    /* =================================================
       NAME VALIDATION
       ONLY LETTERS + SPACES
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


        /*
           Only letters and spaces.
           Supports normal English letters.
        */

        const namePattern =
            /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;


        if (!namePattern.test(value)) {

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


        /*
           Email validation
        */

        const emailPattern =
            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;


        if (!emailPattern.test(value)) {

            showError(
                emailInput,
                emailError,
                "Please enter a valid email address."
            );

            return false;

        }


        /*
           Prevent consecutive dots
        */

        if (
            value.includes("..") ||
            value.startsWith(".") ||
            value.endsWith(".")
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


        /*
           Allows:
           +91 9876543210
           9876543210
           +1 9876543210
        */

        const phonePattern =
            /^\+?[0-9][0-9\s-]{7,14}$/;


        if (!phonePattern.test(value)) {

            showError(
                phoneInput,
                phoneError,
                "Please enter a valid phone number."
            );

            return false;

        }


        /*
           Count only digits
        */

        const digits =
            value.replace(/\D/g, "");


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
       SUBJECT VALIDATION
    ================================================= */

    function validateSubject() {

        const value =
            subjectInput.value.trim();


        if (value === "") {

            showError(
                subjectInput,
                subjectError,
                "Please enter a subject."
            );

            return false;

        }


        if (value.length < 3) {

            showError(
                subjectInput,
                subjectError,
                "Subject must contain at least 3 characters."
            );

            return false;

        }


        clearError(
            subjectInput,
            subjectError
        );

        return true;

    }


    /* =================================================
       MESSAGE VALIDATION
    ================================================= */

    function validateMessage() {

        const value =
            messageInput.value.trim();


        if (value === "") {

            showError(
                messageInput,
                messageError,
                "Please enter your message."
            );

            return false;

        }


        if (value.length < 10) {

            showError(
                messageInput,
                messageError,
                "Message must contain at least 10 characters."
            );

            return false;

        }


        clearError(
            messageInput,
            messageError
        );

        return true;

    }


    /* =================================================
       LIVE NAME INPUT
       BLOCK NUMBERS / SPECIAL CHARACTERS
    ================================================= */

    nameInput.addEventListener(
        "input",
        function () {

            /*
               Remove everything except letters and spaces.
            */

            this.value =
                this.value.replace(
                    /[^A-Za-z\s]/g,
                    ""
                );


            /*
               Prevent multiple spaces.
            */

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
       EMAIL INPUT
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
       PHONE INPUT
    ================================================= */

    phoneInput.addEventListener(
        "input",
        function () {

            /*
               Allow only:
               numbers
               +
               spaces
               -
            */

            this.value =
                this.value.replace(
                    /[^0-9+\s-]/g,
                    ""
                );


            /*
               + only at beginning
            */

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
       SUBJECT
    ================================================= */

    subjectInput.addEventListener(
        "input",
        function () {

            clearError(
                subjectInput,
                subjectError
            );

        }
    );


    /* =================================================
       MESSAGE
    ================================================= */

    messageInput.addEventListener(
        "input",
        function () {

            clearError(
                messageInput,
                messageError
            );

        }
    );


    /* =================================================
       SUBMIT
    ================================================= */

    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* Hide previous success */

            successMessage.classList.remove(
                "show"
            );


            /*
               Validate every field
            */

            const validName =
                validateName();

            const validEmail =
                validateEmail();

            const validPhone =
                validatePhone();

            const validSubject =
                validateSubject();

            const validMessage =
                validateMessage();


            /*
               Stop if any field is invalid
            */

            if (
                !validName ||
                !validEmail ||
                !validPhone ||
                !validSubject ||
                !validMessage
            ) {

                return;

            }


            /* =================================================
               SUCCESS
            ================================================= */

            successMessage.classList.add(
                "show"
            );


            /*
               Disable button briefly
            */

            const submitButton =
                document.getElementById(
                    "stacklyContactSubmit"
                );


            if (submitButton) {

                submitButton.disabled = true;

                submitButton.style.opacity =
                    "0.7";

            }


            /*
               Show success for 3 seconds,
               then redirect.
            */

            setTimeout(function () {

                successMessage.classList.remove(
                    "show"
                );


                form.reset();


                if (submitButton) {

                    submitButton.disabled =
                        false;

                    submitButton.style.opacity =
                        "1";

                }


                window.location.href =
                    "404.html";


            }, 3000);

        }
    );


    /* =================================================
       RESET FORM WHEN RETURNING TO PAGE
    ================================================= */

    function resetContactForm() {

        form.reset();


        /*
           Remove all error states
        */

        const inputs =
            form.querySelectorAll(
                "input, textarea"
            );


        inputs.forEach(function (input) {

            input.classList.remove(
                "input-error"
            );

        });


        /*
           Clear all error messages
        */

        const errors =
            form.querySelectorAll(
                ".contact-error"
            );


        errors.forEach(function (error) {

            error.textContent = "";

            error.classList.remove(
                "show"
            );

        });


        /*
           Hide success
        */

        successMessage.classList.remove(
            "show"
        );

    }


    /* =================================================
       PAGE SHOW
       Handles browser BACK button
    ================================================= */

    window.addEventListener(
        "pageshow",
        function () {

            resetContactForm();

        }
    );


});



/* =====================================================
   STACKLY CONTACT LOCATION
   GSAP ANIMATION
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {

        console.warn("GSAP is not loaded.");

        return;
    }


    if (
        typeof ScrollTrigger !== "undefined"
    ) {

        gsap.registerPlugin(
            ScrollTrigger
        );

    }


    /* =================================================
       SECTION
    ================================================= */

    const section =
        document.querySelector(
            ".stackly-location-section"
        );


    if (!section) return;


    /* =================================================
       ELEMENTS
    ================================================= */

    const items =
        section.querySelectorAll(
            ".stackly-location-item"
        );


    const map =
        section.querySelector(
            ".stackly-location-map"
        );


    const leftLine =
        section.querySelector(
            ".location-line-left"
        );


    const rightLine =
        section.querySelector(
            ".location-line-right"
        );


    /* =================================================
       INITIAL STATES
    ================================================= */

    gsap.set(items, {

        opacity: 0,

        y: 45

    });


    gsap.set(map, {

        opacity: 0,

        y: 55

    });


    gsap.set(
        [leftLine, rightLine],
        {

            opacity: 0,

            scaleX: 0.5,

            transformOrigin: "center"

        }
    );


    /* =================================================
       TIMELINE
    ================================================= */

    const locationTimeline =
        gsap.timeline({

            scrollTrigger:
                typeof ScrollTrigger !== "undefined"
                ? {

                    trigger: section,

                    start: "top 78%",

                    once: true

                }
                : undefined

        });


    /* =================================================
       DECORATIVE LINES
    ================================================= */

    locationTimeline.to(
        [leftLine, rightLine],
        {

            opacity: 1,

            scaleX: 1,

            duration: 0.8,

            stagger: 0.08,

            ease: "power2.out"

        }
    );


    /* =================================================
       CONTACT ITEMS
    ================================================= */

    locationTimeline.to(items, {

        opacity: 1,

        y: 0,

        duration: 0.7,

        stagger: 0.18,

        ease: "power3.out"

    }, "-=0.35");


    /* =================================================
       MAP
    ================================================= */

    locationTimeline.to(map, {

        opacity: 1,

        y: 0,

        duration: 1,

        ease: "power3.out"

    }, "-=0.35");


});