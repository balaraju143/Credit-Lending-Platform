/* =====================================================
   STACKLY BLOG HERO - GSAP
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    const section =
        document.querySelector(".blog-hero-section");

    if (!section) return;


    const background =
        section.querySelector(".blog-hero-bg img");

    const breadcrumb =
        section.querySelector(".blog-breadcrumb");

    const title =
        section.querySelector(".blog-hero-content h1");

    const circle =
        section.querySelector(".blog-hero-circle");

    const dot =
        section.querySelector(".blog-hero-dot");


    /* =================================================
       INITIAL STATE
    ================================================= */

    gsap.set(background, {
        scale: 1.1
    });


    gsap.set(breadcrumb, {
        opacity: 0,
        x: -60
    });


    gsap.set(title, {
        opacity: 0,
        y: 45
    });


    gsap.set(circle, {
        opacity: 0,
        scale: 0.5
    });


    gsap.set(dot, {
        opacity: 0,
        scale: 0.5
    });


    /* =================================================
       HERO TIMELINE
    ================================================= */

    const timeline = gsap.timeline();


    /* Background */

    timeline.to(background, {

        scale: 1,

        duration: 1.8,

        ease: "power2.out"

    });


    /* Breadcrumb */

    timeline.to(breadcrumb, {

        opacity: 1,

        x: 0,

        duration: 0.7,

        ease: "power3.out"

    }, "-=1.15");


    /* Title */

    timeline.to(title, {

        opacity: 1,

        y: 0,

        duration: 0.85,

        ease: "power3.out"

    }, "-=0.35");


    /* Circle */

    timeline.to(circle, {

        opacity: 1,

        scale: 1,

        duration: 0.55,

        ease: "back.out(1.7)"

    }, "-=0.35");


    /* Dot */

    timeline.to(dot, {

        opacity: 1,

        scale: 1,

        duration: 0.45,

        ease: "back.out(1.7)"

    }, "-=0.3");


    /* =================================================
       SUBTLE CIRCLE FLOAT
    ================================================= */

    gsap.to(circle, {

        y: -7,

        duration: 2,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });


    /* =================================================
       SUBTLE BACKGROUND MOVEMENT
    ================================================= */

    gsap.to(background, {

        scale: 1.035,

        duration: 8,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });

});


/* =====================================================
   STACKLY BLOG INTRO - GSAP
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    const section =
        document.querySelector(".stackly-blog-intro");

    if (!section) return;


    /* =================================================
       ELEMENTS
    ================================================= */

    const mainImage =
        section.querySelector(".blog-main-image");

    const experienceBox =
        section.querySelector(".blog-experience-box");

    const experienceShape =
        section.querySelector(".blog-experience-shape");

    const smallImage =
        section.querySelector(".blog-small-image");

    const dots =
        section.querySelector(".blog-visual-dots");

    const content =
        section.querySelector(".blog-intro-content");

    const checks =
        section.querySelectorAll(".blog-check-item");

    const button =
        section.querySelector(".blog-intro-button");


    /* =================================================
       INITIAL STATES
    ================================================= */

    gsap.set(mainImage, {
        opacity: 0,
        x: -100
    });


    gsap.set(experienceBox, {
        opacity: 0,
        x: -45
    });


    gsap.set(experienceShape, {
        opacity: 0,
        x: -25
    });


    gsap.set(smallImage, {
        opacity: 0,
        x: -70,
        y: 35
    });


    gsap.set(dots, {
        opacity: 0,
        x: 40
    });


    gsap.set(content, {
        opacity: 0,
        x: 90
    });


    gsap.set(checks, {
        opacity: 0,
        x: 30
    });


    gsap.set(button, {
        opacity: 0,
        y: 25
    });


    /* =================================================
       TIMELINE
    ================================================= */

    const timeline = gsap.timeline({

        scrollTrigger: {
            trigger: section,

            start: "top 72%",

            toggleActions:
                "play none none none"
        }

    });


    /* =================================================
       MAIN IMAGE - LEFT
    ================================================= */

    timeline.to(mainImage, {

        opacity: 1,

        x: 0,

        duration: 1,

        ease: "power3.out"

    });


    /* =================================================
       EXPERIENCE BOX
    ================================================= */

    timeline.to(experienceBox, {

        opacity: 1,

        x: 0,

        duration: 0.75,

        ease: "back.out(1.5)"

    }, "-=0.55");


    /* Triangle */

    timeline.to(experienceShape, {

        opacity: 1,

        x: 0,

        duration: 0.45,

        ease: "power2.out"

    }, "-=0.4");


    /* =================================================
       SMALL IMAGE
    ================================================= */

    timeline.to(smallImage, {

        opacity: 1,

        x: 0,

        y: 0,

        duration: 0.8,

        ease: "power3.out"

    }, "-=0.3");


    /* =================================================
       DOTS
    ================================================= */

    timeline.to(dots, {

        opacity: 1,

        x: 0,

        duration: 0.6,

        ease: "power2.out"

    }, "-=0.5");


    /* =================================================
       RIGHT CONTENT
    ================================================= */

    timeline.to(content, {

        opacity: 1,

        x: 0,

        duration: 0.9,

        ease: "power3.out"

    }, "-=1.0");


    /* =================================================
       CHECKLIST
    ================================================= */

    timeline.to(checks, {

        opacity: 1,

        x: 0,

        duration: 0.55,

        stagger: 0.12,

        ease: "power3.out"

    }, "-=0.4");


    /* =================================================
       BUTTON
    ================================================= */

    timeline.to(button, {

        opacity: 1,

        y: 0,

        duration: 0.6,

        ease: "power3.out"

    }, "-=0.25");


    /* =================================================
       SMALL IMAGE HOVER
    ================================================= */

    smallImage.addEventListener("mouseenter", function () {

        gsap.to(
            smallImage.querySelector("img"),
            {
                scale: 1.06,
                duration: 0.5,
                ease: "power2.out"
            }
        );

    });


    smallImage.addEventListener("mouseleave", function () {

        gsap.to(
            smallImage.querySelector("img"),
            {
                scale: 1,
                duration: 0.5,
                ease: "power2.out"
            }
        );

    });

});


/* =====================================================
   STACKLY FINANCIAL JOURNEY - GSAP
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    const section =
        document.querySelector(".stackly-financial-journey");

    if (!section) return;


    /* =================================================
       ELEMENTS
    ================================================= */

    const heading =
        section.querySelector(".stackly-blog-heading");

    const cards =
        section.querySelectorAll(".stackly-blog-card");

    const viewAll =
        section.querySelector(".blog-view-all");


    /* =================================================
       INITIAL STATES
    ================================================= */

    gsap.set(heading, {
        opacity: 0,
        y: 55
    });


    gsap.set(cards, {
        opacity: 0,
        y: 90
    });


    gsap.set(viewAll, {
        opacity: 0,
        y: 35
    });


    /* =================================================
       MAIN TIMELINE
    ================================================= */

    const journeyTimeline = gsap.timeline({

        scrollTrigger: {
            trigger: section,

            start: "top 72%",

            toggleActions:
                "play none none none"
        }

    });


    /* Heading reveal */

    journeyTimeline.to(heading, {

        opacity: 1,

        y: 0,

        duration: 0.85,

        ease: "power3.out"

    });


    /* Cards reveal bottom -> top */

    journeyTimeline.to(cards, {

        opacity: 1,

        y: 0,

        duration: 0.85,

        stagger: 0.18,

        ease: "power3.out"

    }, "-=0.35");


    /* Bottom button */

    journeyTimeline.to(viewAll, {

        opacity: 1,

        y: 0,

        duration: 0.65,

        ease: "power3.out"

    }, "-=0.3");


    /* =================================================
       CARD HOVER ANIMATION
    ================================================= */

    cards.forEach(function (card) {

        const image =
            card.querySelector(".blog-card-image img");

        const plus =
            card.querySelector(".blog-plus");


        card.addEventListener(
            "mouseenter",
            function () {

                gsap.to(image, {

                    scale: 1.06,

                    duration: 0.65,

                    ease: "power2.out"

                });


                gsap.to(plus, {

                    rotation: 90,

                    scale: 1.05,

                    duration: 0.45,

                    ease: "power2.out"

                });

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                gsap.to(image, {

                    scale: 1,

                    duration: 0.65,

                    ease: "power2.out"

                });


                gsap.to(plus, {

                    rotation: 0,

                    scale: 1,

                    duration: 0.45,

                    ease: "power2.out"

                });

            }
        );

    });

});



/* =====================================================
   STACKLY FAQ SECTION
   GSAP REVEAL + ACCORDION
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* -------------------------------------------------
       Check GSAP
    ------------------------------------------------- */

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    /* -------------------------------------------------
       Register ScrollTrigger
    ------------------------------------------------- */

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }


    /* -------------------------------------------------
       Get FAQ Section
    ------------------------------------------------- */

    const section = document.querySelector(
        ".stackly-faq-section"
    );

    if (!section) return;


    /* -------------------------------------------------
       Elements
    ------------------------------------------------- */

    const heading = section.querySelector(
        ".stackly-faq-heading"
    );

    const image = section.querySelector(
        ".stackly-faq-image-wrap"
    );

    const faqList = section.querySelector(
        ".stackly-faq-list"
    );

    const faqItems = section.querySelectorAll(
        ".stackly-faq-item"
    );


    /* =================================================
       GSAP INITIAL STATES
    ================================================= */

    /*
       Heading comes from RIGHT
    */

    gsap.set(heading, {
        opacity: 0,
        x: 80
    });


    /*
       Image comes from BOTTOM
    */

    gsap.set(image, {
        opacity: 0,
        y: 120
    });


    /*
       FAQ container stays visible.
       Individual FAQ items animate from RIGHT.
    */

    gsap.set(faqList, {
        opacity: 1,
        x: 0
    });


    gsap.set(faqItems, {
        opacity: 0,
        x: 90
    });


    /* =================================================
       GSAP SCROLL ANIMATION
    ================================================= */

    const faqAnimation = gsap.timeline({
        paused: true
    });


    /* -------------------------------------------------
       Heading RIGHT -> LEFT
    ------------------------------------------------- */

    faqAnimation.to(heading, {

        opacity: 1,
        x: 0,

        duration: 0.8,

        ease: "power3.out"

    });


    /* -------------------------------------------------
       IMAGE BOTTOM -> TOP
    ------------------------------------------------- */

    faqAnimation.to(image, {

        opacity: 1,
        y: 0,

        duration: 1.1,

        ease: "power3.out"

    }, "-=0.45");


    /* -------------------------------------------------
       FAQ ITEMS RIGHT -> LEFT
    ------------------------------------------------- */

    faqAnimation.to(faqItems, {

        opacity: 1,
        x: 0,

        duration: 0.65,

        stagger: 0.14,

        ease: "power3.out"

    }, "-=0.65");


    /* =================================================
       SCROLL TRIGGER
    ================================================= */

    if (typeof ScrollTrigger !== "undefined") {

        ScrollTrigger.create({

            trigger: section,

            start: "top 78%",

            once: true,

            onEnter: function () {

                faqAnimation.play();

            }

        });

    } else {

        /* Fallback if ScrollTrigger isn't loaded */

        faqAnimation.play();

    }


    /* =================================================
       FAQ ACCORDION
    ================================================= */

    faqItems.forEach(function (item) {

        const question = item.querySelector(
            ".stackly-faq-question"
        );

        const answer = item.querySelector(
            ".stackly-faq-answer"
        );

        const icon = item.querySelector(
            ".faq-icon"
        );


        if (!question || !answer || !icon) return;


        question.addEventListener("click", function () {

            const currentlyOpen =
                item.classList.contains("active");


            /* =========================================
               CLOSE ALL OTHER FAQ ITEMS
            ========================================= */

            faqItems.forEach(function (otherItem) {

                if (otherItem === item) return;


                const otherAnswer =
                    otherItem.querySelector(
                        ".stackly-faq-answer"
                    );

                const otherIcon =
                    otherItem.querySelector(
                        ".faq-icon"
                    );

                const otherQuestion =
                    otherItem.querySelector(
                        ".stackly-faq-question"
                    );


                otherItem.classList.remove("active");


                if (otherQuestion) {

                    otherQuestion.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }


                if (otherAnswer) {

                    gsap.to(otherAnswer, {

                        height: 0,

                        duration: 0.35,

                        ease: "power2.inOut"

                    });

                }


                if (otherIcon) {

                    gsap.to(otherIcon, {

                        rotation: 0,

                        duration: 0.3,

                        ease: "power2.out"

                    });

                }

            });


            /* =========================================
               OPEN FAQ
            ========================================= */

            if (!currentlyOpen) {

                item.classList.add("active");


                question.setAttribute(
                    "aria-expanded",
                    "true"
                );


                /*
                   Measure actual answer height
                */

                const answerHeight =
                    answer.scrollHeight;


                gsap.to(answer, {

                    height: answerHeight,

                    duration: 0.45,

                    ease: "power2.out"

                });


                gsap.to(icon, {

                    rotation: 180,

                    duration: 0.3,

                    ease: "power2.out"

                });

            }


            /* =========================================
               CLOSE CURRENT FAQ
            ========================================= */

            else {

                item.classList.remove("active");


                question.setAttribute(
                    "aria-expanded",
                    "false"
                );


                gsap.to(answer, {

                    height: 0,

                    duration: 0.35,

                    ease: "power2.inOut"

                });


                gsap.to(icon, {

                    rotation: 0,

                    duration: 0.3,

                    ease: "power2.out"

                });

            }

        });

    });

});


/* =====================================================
   STACKLY PROFESSIONAL TEAM
   GSAP ANIMATION
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }


    const section =
        document.querySelector(".stackly-team-section");

    if (!section) return;


    /* =================================================
       ELEMENTS
    ================================================= */

    const heading =
        section.querySelector(".stackly-team-heading");

    const cards =
        section.querySelectorAll(".stackly-team-card");

    const dots =
        section.querySelector(".stackly-team-dots");


    /* =================================================
       INITIAL STATES
    ================================================= */

    gsap.set(heading, {
        opacity: 0,
        y: 45
    });


    /*
       Cards start HIGH above the section.
    */

    gsap.set(cards, {
        opacity: 0,
        y: -120,
        rotateX: -8,
        transformOrigin: "center top"
    });


    gsap.set(dots, {
        opacity: 0,
        y: 15
    });


    /* =================================================
       TIMELINE
    ================================================= */

    const teamTimeline = gsap.timeline({

        scrollTrigger: {
            trigger: section,

            start: "top 75%",

            toggleActions:
                "play none none none"
        }

    });


    /* Heading */

    teamTimeline.to(heading, {

        opacity: 1,

        y: 0,

        duration: 0.8,

        ease: "power3.out"

    });


    /* =================================================
       CARDS FALL FROM TOP
    ================================================= */

    teamTimeline.to(cards, {

        opacity: 1,

        y: 0,

        rotateX: 0,

        duration: 1.05,

        stagger: 0.18,

        ease: "bounce.out"

    }, "-=0.25");


    /* =================================================
       DOTS
    ================================================= */

    teamTimeline.to(dots, {

        opacity: 1,

        y: 0,

        duration: 0.5,

        ease: "power2.out"

    }, "-=0.45");


    /* =================================================
       IMAGE HOVER GSAP
    ================================================= */

    cards.forEach(function (card) {

        const image =
            card.querySelector(".stackly-team-image img");

        const socials =
            card.querySelectorAll(".team-socials a");


        card.addEventListener("mouseenter", function () {

            gsap.to(image, {

                scale: 1.06,

                duration: 0.7,

                ease: "power2.out"

            });


            gsap.fromTo(
                socials,
                {
                    opacity: 0,
                    x: 18
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.35,
                    stagger: 0.06,
                    ease: "power2.out"
                }
            );

        });


        card.addEventListener("mouseleave", function () {

            gsap.to(image, {

                scale: 1,

                duration: 0.7,

                ease: "power2.out"

            });

        });

    });

});



/* =====================================================
   STACKLY CTA - GSAP
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const cta =
        document.querySelector(".credit-cta-section");

    if (
        !cta ||
        typeof gsap === "undefined"
    ) {
        return;
    }


    const card =
        cta.querySelector(".credit-cta-card");

    const eyebrow =
        cta.querySelector(".cta-eyebrow");

    const heading =
        cta.querySelector(".cta-content h2");

    const paragraph =
        cta.querySelector(".cta-content p");

    const button =
        cta.querySelector(".cta-button");

    const pattern =
        cta.querySelector(".cta-background-pattern");


    /* =================================================
       INITIAL STATE
    ================================================= */

    gsap.set(card, {
        opacity: 0,
        y: 70,
        scale: .97
    });


    gsap.set(eyebrow, {
        opacity: 0,
        y: 20
    });


    gsap.set(heading, {
        opacity: 0,
        x: -35
    });


    gsap.set(paragraph, {
        opacity: 0,
        y: 20
    });


    gsap.set(button, {
        opacity: 0,
        x: 35
    });


    gsap.set(pattern, {
        opacity: 0,
        scale: 1.15
    });


    /* =================================================
       TIMELINE
    ================================================= */

    const timeline =
        gsap.timeline({
            paused: true
        });


    timeline.to(
        card,
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: .9,
            ease: "power4.out"
        }
    );


    timeline.to(
        pattern,
        {
            opacity: .22,
            scale: 1,
            duration: 1,
            ease: "power3.out"
        },
        "-=.7"
    );


    timeline.to(
        eyebrow,
        {
            opacity: 1,
            y: 0,
            duration: .45,
            ease: "power3.out"
        },
        "-=.55"
    );


    timeline.to(
        heading,
        {
            opacity: 1,
            x: 0,
            duration: .7,
            ease: "power4.out"
        },
        "-=.25"
    );


    timeline.to(
        paragraph,
        {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        },
        "-=.35"
    );


    timeline.to(
        button,
        {
            opacity: 1,
            x: 0,
            duration: .6,
            ease: "back.out(1.4)"
        },
        "-=.45"
    );


    /* =================================================
       OBSERVER
    ================================================= */

    const observer =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        timeline.play();

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: .2
            }
        );


    observer.observe(cta);


    /* =================================================
       BUTTON HOVER
    ================================================= */

    button.addEventListener(
        "mouseenter",
        () => {

            gsap.to(button, {
                scale: 1.04,
                duration: .3,
                ease: "power2.out"
            });

        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            gsap.to(button, {
                scale: 1,
                duration: .3,
                ease: "power2.out"
            });

        }
    );

});