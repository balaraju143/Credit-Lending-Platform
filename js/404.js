/* =====================================================
   STACKLY 404 PAGE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const backButton =
            document.getElementById(
                "errorBackButton"
            );


        if (!backButton) return;


        backButton.addEventListener(
            "click",
            function () {

                /*
                 * Go to previous page if history exists.
                 */

                if (window.history.length > 1) {

                    window.history.back();

                } else {

                    /*
                     * If there is no previous page,
                     * return to Stackly home.
                     */

                    window.location.href =
                        "index.html";

                }

            }
        );

    }
);