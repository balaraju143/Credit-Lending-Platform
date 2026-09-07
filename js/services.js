/* =====================================================
   STACKLY SERVICES HERO - GSAP
   No Navbar / Toggle JS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    const hero =
        document.querySelector(".services-hero-section");

    if (!hero) return;


    /* =================================================
       ELEMENTS
    ================================================= */

    const background =
        hero.querySelector(".services-hero-bg img");

    const overlay =
        hero.querySelector(".services-hero-overlay");

    const breadcrumb =
        hero.querySelector(".services-breadcrumb");

    const title =
        hero.querySelector(".services-hero-content h1");

    const circle =
        hero.querySelector(".services-hero-circle");

    const dot =
        hero.querySelector(".services-hero-dot");


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
        y: 25,
        opacity: 0
    });


    gsap.set(title, {
        y: 45,
        opacity: 0
    });


    gsap.set(circle, {
        scale: .3,
        opacity: 0
    });


    gsap.set(dot, {
        scale: 0,
        opacity: 0
    });


    /* =================================================
       HERO TIMELINE
    ================================================= */

    const timeline = gsap.timeline();


    /* Background */

    timeline.to(background, {

        scale: 1,

        duration: 1.6,

        ease: "power3.out"

    }, 0);


    /* Overlay */

    timeline.to(overlay, {

        opacity: 1,

        duration: 1.1,

        ease: "power2.out"

    }, 0);


    /* Breadcrumb */

    timeline.to(breadcrumb, {

        y: 0,

        opacity: 1,

        duration: .65,

        ease: "power3.out"

    }, .45);


    /* Title */

    timeline.to(title, {

        y: 0,

        opacity: 1,

        duration: .8,

        ease: "power3.out"

    }, .58);


    /* Circle */

    timeline.to(circle, {

        scale: 1,

        opacity: 1,

        duration: .65,

        ease: "back.out(1.8)"

    }, .85);


    /* Dot */

    timeline.to(dot, {

        scale: 1,

        opacity: .45,

        duration: .5,

        ease: "back.out(1.5)"

    }, 1);


    /* =================================================
       DECORATIVE FLOAT
    ================================================= */

    gsap.to(circle, {

        y: -7,

        duration: 2.5,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",

        delay: 1.5

    });


    gsap.to(dot, {

        y: -5,

        duration: 2,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",

        delay: 1.8

    });


    /* =================================================
       REFRESH
    ================================================= */

    window.addEventListener("load", () => {

        if (
            typeof ScrollTrigger !== "undefined"
        ) {
            ScrollTrigger.refresh();
        }

    });

});



/* =====================================================
   STACKLY SERVICES - GSAP
   No Navbar / Toggle JS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    if (typeof ScrollTrigger === "undefined") {
        console.warn("ScrollTrigger is not loaded.");
        return;
    }


    gsap.registerPlugin(ScrollTrigger);


    const section =
        document.querySelector(".stackly-services-section");

    if (!section) return;


    const heading =
        section.querySelector(".services-section-heading");


    const cards =
        section.querySelectorAll(".service-card");


    /* =================================================
       INITIAL STATES
    ================================================= */

    gsap.set(heading, {
        y: 45,
        opacity: 0
    });


    gsap.set(cards, {
        y: 90,
        opacity: 0
    });


    /* =================================================
       MAIN SCROLL ANIMATION
    ================================================= */

    const timeline = gsap.timeline({

        scrollTrigger: {

            trigger: section,

            start: "top 78%",

            toggleActions:
                "play none none none"

        }

    });


    /* Heading */

    timeline.to(heading, {

        y: 0,

        opacity: 1,

        duration: .8,

        ease: "power3.out"

    }, 0);


    /* Cards - BOTTOM TO TOP */

    timeline.to(cards, {

        y: 0,

        opacity: 1,

        duration: .85,

        stagger: .15,

        ease: "power3.out"

    }, .3);


    /* =================================================
       IMAGE HOVER MOTION
    ================================================= */

    cards.forEach(card => {

        const image =
            card.querySelector(".service-image img");


        if (!image) return;


        card.addEventListener("mouseenter", () => {

            gsap.to(image, {

                scale: 1.07,

                duration: .55,

                ease: "power2.out"

            });

        });


        card.addEventListener("mouseleave", () => {

            gsap.to(image, {

                scale: 1,

                duration: .55,

                ease: "power2.out"

            });

        });

    });


    /* =================================================
       REFRESH
    ================================================= */

    window.addEventListener("load", () => {

        ScrollTrigger.refresh();

    });

});


/* =====================================================
   STACKLY FINANCIAL SOLUTIONS - GSAP
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    const section =
        document.querySelector(".financial-solutions-section");

    if (!section) return;


    const headingLeft =
        section.querySelector(".financial-heading-left");

    const headingRight =
        section.querySelector(".financial-heading-right");

    const cards =
        section.querySelectorAll(".financial-card");

    const bottom =
        section.querySelector(".financial-bottom");

    const leftDecor =
        section.querySelector(".financial-decor-left");

    const rightDecor =
        section.querySelector(".financial-decor-right");


    /* =================================================
       INITIAL POSITIONS
    ================================================= */

    gsap.set(headingLeft, {
        opacity: 0,
        x: -70
    });


    gsap.set(headingRight, {
        opacity: 0,
        x: 70
    });


    gsap.set(cards, {
        opacity: 0,
        y: 90
    });


    gsap.set(bottom, {
        opacity: 0,
        y: 40
    });


    gsap.set(leftDecor, {
        opacity: 0,
        x: -80
    });


    gsap.set(rightDecor, {
        opacity: 0,
        x: 80
    });


    /* =================================================
       MAIN TIMELINE
    ================================================= */

    const timeline = gsap.timeline({

        scrollTrigger: {
            trigger: section,

            start: "top 72%",

            toggleActions:
                "play none none none"
        }

    });


    /* Heading */

    timeline.to(headingLeft, {

        opacity: 1,

        x: 0,

        duration: 0.8,

        ease: "power3.out"

    });


    /* Right description */

    timeline.to(headingRight, {

        opacity: 1,

        x: 0,

        duration: 0.8,

        ease: "power3.out"

    }, "-=0.55");


    /* Cards bottom -> top */

    timeline.to(cards, {

        opacity: 1,

        y: 0,

        duration: 0.85,

        stagger: 0.16,

        ease: "power3.out"

    }, "-=0.25");


    /* Bottom CTA */

    timeline.to(bottom, {

        opacity: 1,

        y: 0,

        duration: 0.7,

        ease: "power3.out"

    }, "-=0.3");


    /* =================================================
       DECORATIONS
    ================================================= */

    gsap.to(leftDecor, {

        opacity: 1,

        x: 0,

        duration: 1.1,

        ease: "power3.out",

        scrollTrigger: {

            trigger: section,

            start: "top 80%",

            toggleActions:
                "play none none none"

        }

    });


    gsap.to(rightDecor, {

        opacity: 1,

        x: 0,

        duration: 1.1,

        ease: "power3.out",

        scrollTrigger: {

            trigger: section,

            start: "top 80%",

            toggleActions:
                "play none none none"

        }

    });


    /* =================================================
       ICON HOVER
    ================================================= */

    cards.forEach(function (card) {

        const icon =
            card.querySelector(".financial-icon-box i");

        const arrow =
            card.querySelector(".financial-card-arrow");


        card.addEventListener("mouseenter", function () {

            gsap.to(icon, {

                scale: 1.1,

                rotation: -5,

                duration: 0.3,

                ease: "power2.out"

            });


            gsap.to(arrow, {

                x: 4,

                duration: 0.25,

                ease: "power2.out"

            });

        });


        card.addEventListener("mouseleave", function () {

            gsap.to(icon, {

                scale: 1,

                rotation: 0,

                duration: 0.3,

                ease: "power2.out"

            });


            gsap.to(arrow, {

                x: 0,

                duration: 0.25,

                ease: "power2.out"

            });

        });

    });

});


/* =====================================================
   STACKLY FINANCIAL FUTURE - GSAP
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    const section =
        document.querySelector(".financial-future-section");

    if (!section) return;


    const background =
        section.querySelector(".financial-future-bg img");

    const eyebrow =
        section.querySelector(".financial-future-eyebrow");

    const heading =
        section.querySelector(".financial-future-content h2");

    const paragraph =
        section.querySelector(".financial-future-content p");

    const button =
        section.querySelector(".financial-future-btn");

    const lines =
        section.querySelectorAll(".financial-future-line");


    /* =================================================
       INITIAL STATE
    ================================================= */

    gsap.set(eyebrow, {
        opacity: 0,
        y: 25
    });


    gsap.set(heading, {
        opacity: 0,
        y: 45
    });


    gsap.set(paragraph, {
        opacity: 0,
        y: 30
    });


    gsap.set(button, {
        opacity: 0,
        y: 25,
        scale: 0.94
    });


    gsap.set(lines, {
        opacity: 0,
        scaleX: 0
    });


    /* =================================================
       BACKGROUND ZOOM
    ================================================= */

    gsap.to(background, {

        scale: 1,

        duration: 2.2,

        ease: "power2.out",

        scrollTrigger: {
            trigger: section,

            start: "top 80%",

            toggleActions:
                "play none none none"
        }

    });


    /* =================================================
       CONTENT TIMELINE
    ================================================= */

    const timeline = gsap.timeline({

        scrollTrigger: {
            trigger: section,

            start: "top 72%",

            toggleActions:
                "play none none none"
        }

    });


    /* Eyebrow */

    timeline.to(eyebrow, {

        opacity: 1,

        y: 0,

        duration: 0.7,

        ease: "power3.out"

    });


    /* Heading */

    timeline.to(heading, {

        opacity: 1,

        y: 0,

        duration: 0.9,

        ease: "power3.out"

    }, "-=0.35");


    /* Paragraph */

    timeline.to(paragraph, {

        opacity: 1,

        y: 0,

        duration: 0.75,

        ease: "power3.out"

    }, "-=0.45");


    /* Button */

    timeline.to(button, {

        opacity: 1,

        y: 0,

        scale: 1,

        duration: 0.65,

        ease: "back.out(1.5)"

    }, "-=0.35");


    /* Decorative lines */

    timeline.to(lines, {

        opacity: 1,

        scaleX: 1,

        duration: 0.8,

        stagger: 0.15,

        ease: "power2.out"

    }, "-=0.5");


    /* =================================================
       SUBTLE BACKGROUND MOVEMENT
    ================================================= */

    gsap.to(background, {

        scale: 1.04,

        duration: 8,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });

});

/* =====================================================
   STACKLY TRUST SECTION - GSAP
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }


    const section =
        document.querySelector(".stackly-trust-section");

    if (!section) return;


    /* =================================================
       ELEMENTS
    ================================================= */

    const content =
        section.querySelector(".trust-content");

    const eyebrow =
        section.querySelector(".trust-eyebrow");

    const heading =
        section.querySelector(".trust-content h2");

    const intro =
        section.querySelector(".trust-intro");

    const features =
        section.querySelectorAll(".trust-feature");

    const link =
        section.querySelector(".trust-link");

    const image =
        section.querySelector(".trust-image");

    const imageElement =
        section.querySelector(".trust-image img");

    const floatingCard =
        section.querySelector(".trust-floating-card");


    /* =================================================
       INITIAL STATE
    ================================================= */

    gsap.set(content, {
        opacity: 1
    });


    gsap.set(
        [eyebrow, heading, intro, features],
        {
            opacity: 0,
            x: -70
        }
    );


    gsap.set(link, {
        opacity: 0,
        x: -40
    });


    gsap.set(image, {
        opacity: 0,
        y: 100
    });


    gsap.set(floatingCard, {
        opacity: 0,
        y: -35
    });


    /* =================================================
       MAIN TIMELINE
    ================================================= */

    const timeline = gsap.timeline({

        scrollTrigger: {
            trigger: section,

            start: "top 72%",

            toggleActions:
                "play none none none"
        }

    });


    /* Eyebrow */

    timeline.to(eyebrow, {

        opacity: 1,

        x: 0,

        duration: 0.65,

        ease: "power3.out"

    });


    /* Heading */

    timeline.to(heading, {

        opacity: 1,

        x: 0,

        duration: 0.8,

        ease: "power3.out"

    }, "-=0.3");


    /* Intro */

    timeline.to(intro, {

        opacity: 1,

        x: 0,

        duration: 0.7,

        ease: "power3.out"

    }, "-=0.35");


    /* Features */

    timeline.to(features, {

        opacity: 1,

        x: 0,

        duration: 0.65,

        stagger: 0.15,

        ease: "power3.out"

    }, "-=0.25");


    /* Link */

    timeline.to(link, {

        opacity: 1,

        x: 0,

        duration: 0.55,

        ease: "power3.out"

    }, "-=0.25");


    /* =================================================
       IMAGE BOTTOM REVEAL
    ================================================= */

    timeline.to(image, {

        opacity: 1,

        y: 0,

        duration: 1.05,

        ease: "power3.out"

    }, "-=0.7");


    /* =================================================
       RED FLOATING CARD
    ================================================= */

    timeline.to(floatingCard, {

        opacity: 1,

        y: 0,

        duration: 0.75,

        ease: "back.out(1.4)"

    }, "-=0.55");


    /* =================================================
       IMAGE SUBTLE HOVER
    ================================================= */

    image.addEventListener("mouseenter", function () {

        gsap.to(imageElement, {

            scale: 1.04,

            duration: 0.8,

            ease: "power2.out"

        });

    });


    image.addEventListener("mouseleave", function () {

        gsap.to(imageElement, {

            scale: 1,

            duration: 0.8,

            ease: "power2.out"

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