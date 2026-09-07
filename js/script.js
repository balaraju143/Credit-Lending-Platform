/* =========================================================
   STACKLY CREDIT & LENDING PLATFORM
   NAVBAR JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       SELECT ELEMENTS
    ====================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.getElementById("navMenu");


    /* =====================================================
       SAFETY CHECK
    ====================================================== */

    if (!menuToggle || !navMenu) {
        return;
    }


    /* =====================================================
       OPEN / CLOSE MOBILE MENU
    ====================================================== */

    menuToggle.addEventListener("click", function () {


        const isOpen =
            menuToggle.classList.toggle("active");


        navMenu.classList.toggle(
            "active",
            isOpen
        );


        document.body.classList.toggle(
            "menu-open",
            isOpen
        );


        /* ---------------------------------------------
           Accessibility
        --------------------------------------------- */

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );


        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    /* =====================================================
       CLOSE MENU WHEN NAV LINK IS CLICKED
    ====================================================== */

    const allNavLinks =
        navMenu.querySelectorAll("a");


    allNavLinks.forEach(function (link) {


        link.addEventListener(
            "click",
            function () {


                menuToggle.classList.remove(
                    "active"
                );


                navMenu.classList.remove(
                    "active"
                );


                document.body.classList.remove(
                    "menu-open"
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            }
        );

    });


    /* =====================================================
       CLOSE MENU WITH ESC KEY
    ====================================================== */

    document.addEventListener(
        "keydown",
        function (event) {


            if (
                event.key === "Escape" &&
                navMenu.classList.contains("active")
            ) {


                menuToggle.classList.remove(
                    "active"
                );


                navMenu.classList.remove(
                    "active"
                );


                document.body.classList.remove(
                    "menu-open"
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            }

        }
    );


    /* =====================================================
       RESET MOBILE MENU WHEN SWITCHING TO DESKTOP
    ====================================================== */

    window.addEventListener(
        "resize",
        function () {


            if (window.innerWidth > 850) {


                menuToggle.classList.remove(
                    "active"
                );


                navMenu.classList.remove(
                    "active"
                );


                document.body.classList.remove(
                    "menu-open"
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            }

        }
    );

});


/* =====================================================
   STACKLY FOOTER NEWSLETTER VALIDATION
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const form =
        document.querySelector("#stacklyNewsletter");

    if (!form) return;


    const email =
        document.querySelector("#newsletterEmail");

    const message =
        document.querySelector("#newsletterMessage");


    let messageTimer;


    function showMessage(text, type) {

        clearTimeout(messageTimer);

        message.textContent = text;

        message.className =
            `newsletter-message ${type}`;


        /* Disappear after 3 seconds */

        messageTimer = setTimeout(() => {

            message.textContent = "";

            message.className =
                "newsletter-message";

        }, 3000);

    }


    form.addEventListener("submit", (event) => {

        event.preventDefault();


        const emailValue =
            email.value.trim();


        /* EMPTY */

        if (!emailValue) {

            showMessage(
                "Please enter your email address.",
                "error"
            );

            email.focus();

            return;
        }


        /* EMAIL VALIDATION */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(emailValue)) {

            showMessage(
                "Please enter a valid email address.",
                "error"
            );

            email.focus();

            return;
        }


        /* SUCCESS */

        showMessage(
            "Email verified. Redirecting...",
            "success"
        );


        setTimeout(() => {

            window.location.href =
                "404.html";

        }, 700);

    });

});