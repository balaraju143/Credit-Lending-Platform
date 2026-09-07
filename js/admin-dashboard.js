document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       ELEMENTS
    ====================================================== */

    const sidebar =
        document.getElementById("adminSidebar");

    const sidebarClose =
        document.getElementById("sidebarClose");

    const mobileMenuBtn =
        document.getElementById("mobileMenuBtn");

    const sidebarOverlay =
        document.getElementById("sidebarOverlay");

    const navLinks =
        document.querySelectorAll(".admin-nav-link[data-page]");

    const pages =
        document.querySelectorAll(".admin-page");

    const headerTitle =
        document.getElementById("headerTitle");

    const headerSmallTitle =
        document.getElementById("headerSmallTitle");


    /* =====================================================
       DYNAMIC EMAIL FROM LOGIN
    ====================================================== */

    const savedEmail =
        localStorage.getItem("stacklyUserEmail");


    if (savedEmail) {

        const adminEmail =
            document.getElementById("adminEmail");

        const headerEmail =
            document.getElementById("headerEmail");

        const settingsEmail =
            document.getElementById("settingsEmail");


        if (adminEmail) {
            adminEmail.textContent = savedEmail;
        }


        if (headerEmail) {
            headerEmail.textContent = savedEmail;
        }


        if (settingsEmail) {
            settingsEmail.textContent = savedEmail;
        }

    }


    /* =====================================================
       PAGE TITLES
    ====================================================== */

    const pageTitles = {

        overview: {
            small: "Admin Control Center",
            title: "Overview"
        },

        applications: {
            small: "Loan Management",
            title: "Loan Applications"
        },

        clients: {
            small: "Client Management",
            title: "Client Directory"
        },

        credit: {
            small: "Credit Operations",
            title: "Credit Review Center"
        },

        payments: {
            small: "Financial Operations",
            title: "Payment Control"
        },

        reports: {
            small: "Business Intelligence",
            title: "Lending Reports"
        },

        settings: {
            small: "Administration",
            title: "Dashboard Settings"
        }

    };


    /* =====================================================
       CLOSE MOBILE SIDEBAR
    ====================================================== */

    function closeSidebar() {

        sidebar.classList.remove(
            "mobile-open"
        );

        sidebarOverlay.classList.remove(
            "active"
        );

    }


    /* =====================================================
       OPEN MOBILE SIDEBAR
    ====================================================== */

    if (mobileMenuBtn) {

        mobileMenuBtn.addEventListener(
            "click",
            function () {

                sidebar.classList.add(
                    "mobile-open"
                );

                sidebarOverlay.classList.add(
                    "active"
                );

            }
        );

    }


    if (sidebarClose) {

        sidebarClose.addEventListener(
            "click",
            closeSidebar
        );

    }


    if (sidebarOverlay) {

        sidebarOverlay.addEventListener(
            "click",
            closeSidebar
        );

    }


    /* =====================================================
       SHOW PAGE
    ====================================================== */

    function showPage(pageName) {

        if (!pageTitles[pageName]) {

            pageName = "overview";

        }


        pages.forEach(function (page) {

            page.classList.remove(
                "active-page"
            );

        });


        const targetPage =
            document.getElementById(
                "page-" + pageName
            );


        if (targetPage) {

            targetPage.classList.add(
                "active-page"
            );

        }


        navLinks.forEach(function (link) {

            link.classList.remove(
                "active"
            );


            if (
                link.dataset.page ===
                pageName
            ) {

                link.classList.add(
                    "active"
                );

            }

        });


        headerSmallTitle.textContent =
            pageTitles[pageName].small;


        headerTitle.textContent =
            pageTitles[pageName].title;


        closeSidebar();


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    /* =====================================================
       SIDEBAR LINKS
    ====================================================== */

    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                const pageName =
                    this.dataset.page;

                showPage(pageName);

                history.replaceState(
                    null,
                    "",
                    "#" + pageName
                );

            }
        );

    });


    /* =====================================================
       LOAD PAGE FROM HASH
    ====================================================== */

    function loadFromHash() {

        let pageName =
            window.location.hash
                .replace("#", "");

        if (!pageName) {

            pageName = "overview";

        }

        showPage(pageName);

    }


    window.addEventListener(
        "hashchange",
        loadFromHash
    );


    loadFromHash();


    /* =====================================================
       SETTINGS TABS
    ====================================================== */

   const settingTabs =
        document.querySelectorAll(
            ".setting-tab"
        );


    settingTabs.forEach(function (tab) {

        tab.addEventListener(
            "click",
            function () {

                settingTabs.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                this.classList.add(
                    "active"
                );

            }
        );

    });

});


document.addEventListener("DOMContentLoaded", () => {

    const email = localStorage.getItem("stacklyUserEmail");
    const avatarLetter = document.getElementById("adminAvatarLetter");
    const headerEmail = document.getElementById("headerEmail");

    if (email) {
        const cleanEmail = email.trim();

        // Change avatar letter automatically
        if (avatarLetter) {
            avatarLetter.textContent = cleanEmail.charAt(0).toUpperCase();
        }

        // Show logged-in email
        if (headerEmail) {
            headerEmail.textContent = cleanEmail;
        }
    }

});
