/* =====================================================
   STACKLY CLIENT DASHBOARD JS
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =================================================
           ELEMENTS
        ================================================= */

        const sidebar =
            document.getElementById(
                "clientSidebar"
            );


        const overlay =
            document.getElementById(
                "sidebarOverlay"
            );


        const menuButton =
            document.getElementById(
                "mobileMenuBtn"
            );


        const navLinks =
            document.querySelectorAll(
                ".dashboard-nav"
            );


        const pages =
            document.querySelectorAll(
                ".dashboard-page"
            );


        const pageTitle =
            document.getElementById(
                "pageTitle"
            );


        const pageSubtitle =
            document.getElementById(
                "pageSubtitle"
            );


        const sidebarEmail =
            document.getElementById(
                "sidebarEmail"
            );


        const welcomeEmail =
            document.getElementById(
                "welcomeEmail"
            );


        const profileEmail =
            document.getElementById(
                "profileEmail"
            );


        /* =================================================
           DYNAMIC EMAIL
        ================================================= */

        let savedEmail =
            localStorage.getItem(
                "stacklyUserEmail"
            );


        if (
            !savedEmail
        ) {

            savedEmail =
                localStorage.getItem(
                    "signupEmail"
                );

        }


        if (
            !savedEmail
        ) {

            savedEmail =
                localStorage.getItem(
                    "userEmail"
                );

        }


        if (
            savedEmail
        ) {

            sidebarEmail.textContent =
                savedEmail;


            profileEmail.textContent =
                savedEmail;


            if (
                welcomeEmail
            ) {

                welcomeEmail.textContent =
                    savedEmail;

            }

        }


        /* =================================================
           MOBILE SIDEBAR
        ================================================= */

        function openSidebar() {

            sidebar.classList.add(
                "sidebar-open"
            );


            overlay.classList.add(
                "show"
            );


            document.body.style.overflow =
                "hidden";

        }


        function closeSidebar() {

            sidebar.classList.remove(
                "sidebar-open"
            );


            overlay.classList.remove(
                "show"
            );


            document.body.style.overflow =
                "";

        }


        if (
            menuButton
        ) {

            menuButton.addEventListener(
                "click",
                function () {

                    if (
                        sidebar.classList.contains(
                            "sidebar-open"
                        )
                    ) {

                        closeSidebar();

                    } else {

                        openSidebar();

                    }

                }
            );

        }


        overlay.addEventListener(
            "click",
            closeSidebar
        );


        /* =================================================
           PAGE ANIMATION
        ================================================= */

        function animatePage(
            page
        ) {


            if (
                typeof gsap ===
                "undefined"
            ) {

                return;

            }


            const elements =
                page.querySelectorAll(
                    "h2, h3, p, .overview-stat-card, " +
                    ".credit-progress-card, .quick-actions-card, " +
                    ".dashboard-insight, .loan-card, .loan-banner, " +
                    ".credit-health-score, .credit-factor, .credit-tip, " +
                    ".application-item, .application-help, " +
                    ".payment-balance-card, .payment-table-wrap, " +
                    ".payment-action, .profile-page-header, " +
                    ".profile-information-block, .profile-security, " +
                    ".support-hero, .support-card, .support-contact"
                );


            gsap.fromTo(
                elements,
                {
                    opacity: 0,
                    y: 25
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: .55,
                    stagger: .055,
                    ease: "power3.out",
                    clearProps: "transform"
                }
            );

        }


        /* =================================================
           SHOW PAGE
        ================================================= */

        function showPage(
            pageName
        ) {


            let targetPage =
                document.getElementById(
                    "page-" + pageName
                );


            if (
                !targetPage
            ) {

                targetPage =
                    document.getElementById(
                        "page-overview"
                    );

                pageName =
                    "overview";

            }


            pages.forEach(
                function (page) {

                    page.classList.remove(
                        "active-page"
                    );

                }
            );


            navLinks.forEach(
                function (link) {

                    link.classList.remove(
                        "active"
                    );

                }
            );


            targetPage.classList.add(
                "active-page"
            );


            const activeLink =
                document.querySelector(
                    '.dashboard-nav[data-page="' +
                    pageName +
                    '"]'
                );


            if (
                activeLink
            ) {

                activeLink.classList.add(
                    "active"
                );

            }


            pageTitle.textContent =
                targetPage.dataset.title ||
                "Overview";


            pageSubtitle.textContent =
                targetPage.dataset.subtitle ||
                "Your Stackly dashboard";


            /*
             * Scroll to top whenever
             * dashboard page changes.
             */

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });


            closeSidebar();


            /*
             * GSAP page reveal.
             */

            requestAnimationFrame(
                function () {

                    animatePage(
                        targetPage
                    );

                }
            );

        }


        /* =================================================
           NAVIGATION
        ================================================= */

        navLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();


                        const pageName =
                            this.dataset.page;


                        window.location.hash =
                            pageName;


                        showPage(
                            pageName
                        );

                    }
                );

            }
        );


        /* =================================================
           LOGO → DASHBOARD HOME
        ================================================= */

        const logo =
            document.querySelector(
                ".client-logo"
            );


        if (
            logo
        ) {

            logo.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();


                    window.location.hash =
                        "overview";


                    showPage(
                        "overview"
                    );

                }
            );

        }


        /* =================================================
           HASH PAGE
        ================================================= */

        function loadHashPage() {

            let hash =
                window.location.hash
                    .replace(
                        "#",
                        ""
                    )
                    .trim();


            if (
                !hash
            ) {

                hash =
                    "overview";

            }


            showPage(
                hash
            );

        }


        window.addEventListener(
            "hashchange",
            loadHashPage
        );


        /* =================================================
           INITIAL PAGE
        ================================================= */

        loadHashPage();


        /* =================================================
           GSAP SIDEBAR INTRO
        ================================================= */

        if (
            typeof gsap !==
            "undefined"
        ) {


            gsap.from(
                ".client-sidebar",
                {
                    x: -35,
                    opacity: 0,
                    duration: .7,
                    ease: "power3.out"
                }
            );


            gsap.from(
                ".client-header",
                {
                    y: -25,
                    opacity: 0,
                    duration: .6,
                    delay: .15,
                    ease: "power3.out"
                }
            );

        }

    }
);


document.addEventListener("DOMContentLoaded", () => {

    const email = localStorage.getItem("stacklyUserEmail");
    const avatarLetter = document.getElementById("headerAvatarLetter");

    if (email && avatarLetter) {
        avatarLetter.textContent = email.trim().charAt(0).toUpperCase();
    }

});