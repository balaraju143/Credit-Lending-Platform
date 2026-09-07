/* =====================================================
   STACKLY ABOUT HERO - GSAP
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const hero =
        document.querySelector(
            ".about-hero-section"
        );

    if (
        !hero ||
        typeof gsap === "undefined"
    ) {
        return;
    }


    const background =
        hero.querySelector(
            ".about-hero-bg img"
        );

    const overlay =
        hero.querySelector(
            ".about-hero-overlay"
        );

    const content =
        hero.querySelector(
            ".about-hero-content"
        );

    const breadcrumb =
        hero.querySelector(
            ".about-breadcrumb"
        );

    const title =
        hero.querySelector(
            ".about-hero-content h1"
        );

    const circle =
        hero.querySelector(
            ".about-hero-circle"
        );


    /* =================================================
       INITIAL STATES
    ================================================= */

    gsap.set(
        background,
        {
            scale: 1.12
        }
    );


    gsap.set(
        overlay,
        {
            opacity: 0
        }
    );


    gsap.set(
        breadcrumb,
        {
            opacity: 0,
            y: 25
        }
    );


    gsap.set(
        title,
        {
            opacity: 0,
            y: 40
        }
    );


    gsap.set(
        circle,
        {
            opacity: 0,
            scale: .4
        }
    );


    /* =================================================
       TIMELINE
    ================================================= */

    const timeline =
        gsap.timeline();


    /* Background */

    timeline.to(
        background,
        {
            scale: 1,
            duration: 1.4,
            ease: "power3.out"
        }
    );


    /* Overlay */

    timeline.to(
        overlay,
        {
            opacity: 1,
            duration: .9,
            ease: "power2.out"
        },
        "-=1.15"
    );


    /* Breadcrumb */

    timeline.to(
        breadcrumb,
        {
            opacity: 1,
            y: 0,
            duration: .55,
            ease: "power3.out"
        },
        "-=.35"
    );


    /* Title */

    timeline.to(
        title,
        {
            opacity: 1,
            y: 0,
            duration: .75,
            ease: "power4.out"
        },
        "-=.25"
    );


    /* Circle */

    timeline.to(
        circle,
        {
            opacity: 1,
            scale: 1,
            duration: .55,
            ease: "back.out(1.8)"
        },
        "-=.45"
    );


    /* =================================================
       SMALL CIRCLE FLOAT
    ================================================= */

    gsap.to(
        circle,
        {
            y: -8,

            duration: 2,

            repeat: -1,

            yoyo: true,

            ease: "sine.inOut"
        }
    );

});



/* =====================================================
   STACKLY CREDIT FEATURE - GSAP ANIMATIONS
   Section only - NO NAVBAR JS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        console.warn("GSAP is not loaded.");
        return;
    }

    if (typeof ScrollTrigger === "undefined") {
        console.warn("GSAP ScrollTrigger is not loaded.");
        return;
    }

    gsap.registerPlugin(ScrollTrigger);


    const section = document.querySelector(".credit-feature-section");

    if (!section) return;


    /* =================================================
       ELEMENTS
    ================================================= */

    const image = section.querySelector(".credit-main-image");
    const imageFrame = section.querySelector(".credit-image-frame");

    const experience = section.querySelector(".credit-experience-shape");
    const floatingCard = section.querySelector(".credit-floating-card");

    const eyebrow = section.querySelector(".credit-eyebrow");
    const heading = section.querySelector(".credit-feature-content h2");
    const highlight = section.querySelector(".credit-feature-content h4");
    const description = section.querySelector(".credit-description");

    const progressItems =
        section.querySelectorAll(".credit-progress-item");

    const bottom =
        section.querySelector(".credit-feature-bottom");

    const bgWord =
        section.querySelector(".credit-bg-word");

    const bgLines =
        section.querySelectorAll(".credit-bg-line");

    const moneyDecoration =
        section.querySelector(".credit-money-decoration");


    /* =================================================
       INITIAL STATES
    ================================================= */

    gsap.set(image, {
        y: 100,
        scale: 1.12,
        opacity: 0
    });

    gsap.set(imageFrame, {
        clipPath: "inset(100% 0% 0% 0%)"
    });

    gsap.set(experience, {
        y: 80,
        opacity: 0
    });

    gsap.set(floatingCard, {
        y: 40,
        opacity: 0
    });


    gsap.set(
        [
            eyebrow,
            heading,
            highlight,
            description,
            ...progressItems,
            bottom
        ],
        {
            x: 80,
            opacity: 0
        }
    );


    gsap.set(bgWord, {
        x: -80,
        opacity: 0
    });


    gsap.set(bgLines, {
        scaleX: 0,
        opacity: 0
    });


    gsap.set(moneyDecoration, {
        scale: .5,
        opacity: 0,
        rotation: -30
    });


    /* =================================================
       MAIN SCROLL ANIMATION
    ================================================= */

    const mainTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top 78%",
            toggleActions: "play none none none"
        }
    });


    /* -------------------------------------------------
       BACKGROUND
    ------------------------------------------------- */

    mainTimeline
        .to(bgWord, {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out"
        }, 0);


    /* -------------------------------------------------
       LEFT IMAGE - BOTTOM REVEAL
    ------------------------------------------------- */

    mainTimeline
        .to(imageFrame, {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.25,
            ease: "power4.inOut"
        }, 0.05)

        .to(image, {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1.3,
            ease: "power3.out"
        }, 0.05);


    /* -------------------------------------------------
       EXPERIENCE BADGE
    ------------------------------------------------- */

    mainTimeline
        .to(experience, {
            y: 0,
            opacity: 1,
            duration: .85,
            ease: "back.out(1.5)"
        }, 0.65);


    /* -------------------------------------------------
       FLOATING CARD
    ------------------------------------------------- */

    mainTimeline
        .to(floatingCard, {
            y: 0,
            opacity: 1,
            duration: .7,
            ease: "power3.out"
        }, 0.9);


    /* -------------------------------------------------
       RIGHT CONTENT
    ------------------------------------------------- */

    mainTimeline
        .to(eyebrow, {
            x: 0,
            opacity: 1,
            duration: .55,
            ease: "power3.out"
        }, 0.2)

        .to(heading, {
            x: 0,
            opacity: 1,
            duration: .75,
            ease: "power3.out"
        }, 0.32)

        .to(highlight, {
            x: 0,
            opacity: 1,
            duration: .55,
            ease: "power3.out"
        }, 0.48)

        .to(description, {
            x: 0,
            opacity: 1,
            duration: .65,
            ease: "power3.out"
        }, 0.58);


    /* -------------------------------------------------
       PROGRESS BARS CONTENT
    ------------------------------------------------- */

    mainTimeline
        .to(progressItems, {
            x: 0,
            opacity: 1,
            duration: .55,
            stagger: .12,
            ease: "power3.out"
        }, 0.72);


    /* -------------------------------------------------
       PROGRESS BAR FILL
    ------------------------------------------------- */

    progressItems.forEach((item, index) => {

        const fill =
            item.querySelector(".credit-progress-fill");

        const width =
            fill.getAttribute("data-width");

        mainTimeline.to(
            fill,
            {
                width: width,
                duration: 1.1,
                ease: "power3.out"
            },
            0.9 + (index * .15)
        );

    });


    /* -------------------------------------------------
       BOTTOM CONTENT
    ------------------------------------------------- */

    mainTimeline
        .to(bottom, {
            x: 0,
            opacity: 1,
            duration: .7,
            ease: "power3.out"
        }, 1.15);


    /* -------------------------------------------------
       BACKGROUND LINES
    ------------------------------------------------- */

    mainTimeline
        .to(bgLines, {
            scaleX: 1,
            opacity: 1,
            duration: .8,
            stagger: .15,
            ease: "power2.out"
        }, 0.35);


    /* -------------------------------------------------
       MONEY ICON
    ------------------------------------------------- */

    mainTimeline
        .to(moneyDecoration, {
            scale: 1,
            opacity: .7,
            rotation: -15,
            duration: 1,
            ease: "back.out(1.4)"
        }, 1);


    /* =================================================
       FLOATING CARD MOTION
    ================================================= */

    gsap.to(floatingCard, {
        y: -10,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.8
    });


    /* =================================================
       MONEY DECORATION MOTION
    ================================================= */

    gsap.to(moneyDecoration, {
        y: -8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2
    });


    /* =================================================
       IMAGE HOVER
    ================================================= */

    const imageFrameElement =
        section.querySelector(".credit-image-frame");

    if (imageFrameElement) {

        imageFrameElement.addEventListener("mouseenter", () => {

            gsap.to(image, {
                scale: 1.05,
                duration: .8,
                ease: "power2.out"
            });

        });


        imageFrameElement.addEventListener("mouseleave", () => {

            gsap.to(image, {
                scale: 1,
                duration: .8,
                ease: "power2.out"
            });

        });

    }


    /* =================================================
       REFRESH SCROLLTRIGGER
    ================================================= */

    window.addEventListener("load", () => {
        ScrollTrigger.refresh();
    });

});


/* =====================================================
   STACKLY LOAN CTA - GSAP
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") return;
    if (typeof ScrollTrigger === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);


    const section = document.querySelector(".stackly-loan-cta");

    if (!section) return;


    const image = section.querySelector(".loan-cta-image");
    const imageElement = section.querySelector(".loan-cta-image img");

    const meta = section.querySelector(".loan-cta-meta");
    const heading = section.querySelector(".loan-cta-content h2");
    const action = section.querySelector(".loan-cta-action");

    const diagonalOne =
        section.querySelector(".diagonal-one");

    const diagonalTwo =
        section.querySelector(".diagonal-two");


    /* =================================================
       INITIAL STATES
    ================================================= */

    gsap.set(image, {
        clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)"
    });

    gsap.set(imageElement, {
        scale: 1.15
    });


    gsap.set(
        [meta, heading, action],
        {
            x: 90,
            opacity: 0
        }
    );


    gsap.set(
        [diagonalOne, diagonalTwo],
        {
            x: 150,
            opacity: 0
        }
    );


    /* =================================================
       SCROLL ANIMATION
    ================================================= */

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });


    /* IMAGE REVEAL */

    timeline.to(image, {
        clipPath: "polygon(0 0, 100% 0, 92% 100%, 0 100%)",
        duration: 1.15,
        ease: "power4.inOut"
    }, 0);


    timeline.to(imageElement, {
        scale: 1,
        duration: 1.4,
        ease: "power3.out"
    }, 0);


    /* RIGHT CONTENT */

    timeline.to(meta, {
        x: 0,
        opacity: 1,
        duration: .55,
        ease: "power3.out"
    }, .35);


    timeline.to(heading, {
        x: 0,
        opacity: 1,
        duration: .7,
        ease: "power3.out"
    }, .48);


    timeline.to(action, {
        x: 0,
        opacity: 1,
        duration: .65,
        ease: "power3.out"
    }, .65);


    /* DECORATIVE LINES */

    timeline.to(diagonalOne, {
        x: 0,
        opacity: 1,
        duration: .9,
        ease: "power3.out"
    }, .25);


    timeline.to(diagonalTwo, {
        x: 0,
        opacity: .65,
        duration: .9,
        ease: "power3.out"
    }, .4);


    /* =================================================
       IMAGE GENTLE MOTION
    ================================================= */

    gsap.to(imageElement, {
        y: -5,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.8
    });


    /* =================================================
       BUTTON HOVER
    ================================================= */

    const button = section.querySelector(".loan-cta-btn");

    if (button) {

        button.addEventListener("mouseenter", () => {

            gsap.to(button, {
                y: -3,
                duration: .25,
                ease: "power2.out"
            });

        });


        button.addEventListener("mouseleave", () => {

            gsap.to(button, {
                y: 0,
                duration: .25,
                ease: "power2.out"
            });

        });

    }

});


/* =====================================================
   STACKLY TESTIMONIALS + STATISTICS GSAP
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
        document.querySelector(".stackly-testimonials");

    if (!section) return;


    /* =================================================
       ELEMENTS
    ================================================= */

    const heading =
        section.querySelector(".testimonial-heading");

    const cards =
        section.querySelectorAll(".testimonial-card");

    const dots =
        section.querySelectorAll(".testimonial-dots span");

    const statistics =
        section.querySelector(".stackly-statistics");

    const statItems =
        section.querySelectorAll(".stat-item");

    const statNumbers =
        section.querySelectorAll(".stat-number");

    const globes =
        section.querySelectorAll(".testimonial-globe");


    /* =================================================
       INITIAL HEADING STATE
    ================================================= */

    gsap.set(heading, {
        y: 45,
        opacity: 0
    });


    /* =================================================
       INITIAL CARD STATE
       TOP → BOTTOM
    ================================================= */

    gsap.set(cards, {
        y: -90,
        opacity: 0,
        scale: .96
    });


    /* =================================================
       INITIAL DOTS
    ================================================= */

    gsap.set(dots, {
        scale: 0,
        opacity: 0
    });


    /* =================================================
       INITIAL STATISTICS
    ================================================= */

    gsap.set(statItems, {
        y: 65,
        opacity: 0
    });


    /* =================================================
       INITIAL GLOBES
    ================================================= */

    gsap.set(globes, {
        opacity: 0,
        scale: .85
    });


    /* =================================================
       MAIN TIMELINE
    ================================================= */

    const mainTimeline = gsap.timeline({

        scrollTrigger: {
            trigger: section,

            start: "top 75%",

            toggleActions:
                "play none none none"
        }

    });


    /* =================================================
       BACKGROUND GLOBES
    ================================================= */

    mainTimeline.to(globes, {

        opacity: .5,

        scale: 1,

        duration: 1.2,

        stagger: .15,

        ease: "power3.out"

    }, 0);


    /* =================================================
       HEADING
    ================================================= */

    mainTimeline.to(heading, {

        y: 0,

        opacity: 1,

        duration: .8,

        ease: "power3.out"

    }, .1);


    /* =================================================
       TESTIMONIAL CARDS
       TOP → BOTTOM
    ================================================= */

    mainTimeline.to(cards, {

        y: 0,

        opacity: 1,

        scale: 1,

        duration: .9,

        stagger: .18,

        ease: "power3.out"

    }, .35);


    /* =================================================
       DOTS
    ================================================= */

    mainTimeline.to(dots, {

        scale: 1,

        opacity: 1,

        duration: .35,

        stagger: .08,

        ease: "back.out(2)"

    }, 1.05);


    /* =================================================
       STATISTICS
    ================================================= */

    mainTimeline.to(statItems, {

        y: 0,

        opacity: 1,

        duration: .7,

        stagger: .13,

        ease: "power3.out"

    }, .75);


    /* =================================================
       NUMBER COUNTERS
    ================================================= */

    let countersStarted = false;


    function startCounters() {

        if (countersStarted) return;

        countersStarted = true;


        statNumbers.forEach(numberElement => {

            const target =
                parseInt(
                    numberElement.dataset.target,
                    10
                );


            const prefix =
                numberElement.dataset.prefix || "";


            const suffix =
                numberElement.dataset.suffix || "";


            const counter = {
                value: 0
            };


            gsap.to(counter, {

                value: target,

                duration: 2.2,

                ease: "power2.out",

                onUpdate: () => {

                    numberElement.textContent =
                        prefix +
                        Math.floor(counter.value) +
                        suffix;

                },

                onComplete: () => {

                    numberElement.textContent =
                        prefix +
                        target +
                        suffix;

                }

            });

        });

    }


    /* =================================================
       COUNTER TRIGGER
    ================================================= */

    ScrollTrigger.create({

        trigger: statistics,

        start: "top 85%",

        once: true,

        onEnter: startCounters

    });


    /* =================================================
       CARD IMAGE HOVER
    ================================================= */

    cards.forEach(card => {

        const image =
            card.querySelector(
                ".testimonial-image-wrap img"
            );


        if (!image) return;


        card.addEventListener("mouseenter", () => {

            gsap.to(image, {

                scale: 1.06,

                duration: .45,

                ease: "power2.out"

            });

        });


        card.addEventListener("mouseleave", () => {

            gsap.to(image, {

                scale: 1,

                duration: .45,

                ease: "power2.out"

            });

        });

    });


    /* =================================================
       CARD ACTIVE HOVER
    ================================================= */

    cards.forEach((card, index) => {

        card.addEventListener("mouseenter", () => {

            cards.forEach(item => {
                item.classList.remove("active");
            });

            card.classList.add("active");


            dots.forEach(dot => {
                dot.classList.remove("active");
            });


            if (dots[index]) {
                dots[index].classList.add("active");
            }

        });

    });


    /* =================================================
       SUBTLE BACKGROUND MOTION
    ================================================= */

    gsap.to(globes, {

        x: 15,

        duration: 5,

        repeat: -1,

        yoyo: true,

        stagger: .5,

        ease: "sine.inOut"

    });


    /* =================================================
       REFRESH
    ================================================= */

    window.addEventListener("load", () => {

        ScrollTrigger.refresh();

    });

});


/* =====================================================
   STACKLY BENEFITS SECTION - GSAP
   Section only
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
        document.querySelector(".stackly-benefits-section");

    if (!section) return;


    /* =================================================
       ELEMENTS
    ================================================= */

    const redPanel =
        section.querySelector(".benefits-red-panel");

    const redLines =
        section.querySelectorAll(".red-line");

    const imageWrap =
        section.querySelector(".benefits-image-wrap");

    const image =
        section.querySelector(".benefits-main-image");

    const success =
        section.querySelector(".benefits-success");

    const content =
        section.querySelector(".benefits-content");

    const eyebrow =
        section.querySelector(".benefits-eyebrow");

    const heading =
        section.querySelector(".benefits-content h2");

    const intro =
        section.querySelector(".benefits-intro");

    const benefits =
        section.querySelectorAll(".benefit-item");


    /* =================================================
       INITIAL STATES
    ================================================= */

    /* Red panel */

    gsap.set(redPanel, {
        x: -80,
        opacity: 0
    });


    gsap.set(redLines, {
        scaleX: 0,
        transformOrigin: "left center"
    });


    /* Image bottom reveal */

    gsap.set(imageWrap, {
        clipPath: "inset(100% 0 0 0)"
    });


    gsap.set(image, {
        y: 70,
        scale: 1.12,
        opacity: 0
    });


    /* Success badge */

    gsap.set(success, {
        y: 30,
        opacity: 0
    });


    /* Right content */

    gsap.set(
        [
            eyebrow,
            heading,
            intro,
            ...benefits
        ],
        {
            x: -90,
            opacity: 0
        }
    );


    /* =================================================
       MAIN TIMELINE
    ================================================= */

    const timeline = gsap.timeline({

        scrollTrigger: {
            trigger: section,

            start: "top 78%",

            toggleActions:
                "play none none none"
        }

    });


    /* =================================================
       RED PANEL
    ================================================= */

    timeline.to(redPanel, {

        x: 0,

        opacity: 1,

        duration: 1,

        ease: "power3.out"

    }, 0);


    /* =================================================
       RED DECORATIVE LINES
    ================================================= */

    timeline.to(redLines, {

        scaleX: 1,

        duration: .9,

        stagger: .08,

        ease: "power2.out"

    }, .25);


    /* =================================================
       IMAGE - BOTTOM REVEAL
    ================================================= */

    timeline.to(imageWrap, {

        clipPath: "inset(0% 0 0 0)",

        duration: 1.2,

        ease: "power4.inOut"

    }, .15);


    timeline.to(image, {

        y: 0,

        scale: 1,

        opacity: 1,

        duration: 1.3,

        ease: "power3.out"

    }, .15);


    /* =================================================
       SUCCESS BADGE
    ================================================= */

    timeline.to(success, {

        y: 0,

        opacity: 1,

        duration: .65,

        ease: "back.out(1.5)"

    }, .85);


    /* =================================================
       RIGHT CONTENT - LEFT TO RIGHT
    ================================================= */

    timeline.to(eyebrow, {

        x: 0,

        opacity: 1,

        duration: .55,

        ease: "power3.out"

    }, .25);


    timeline.to(heading, {

        x: 0,

        opacity: 1,

        duration: .75,

        ease: "power3.out"

    }, .38);


    timeline.to(intro, {

        x: 0,

        opacity: 1,

        duration: .65,

        ease: "power3.out"

    }, .55);


    /* =================================================
       BENEFITS ONE BY ONE
    ================================================= */

    timeline.to(benefits, {

        x: 0,

        opacity: 1,

        duration: .6,

        stagger: .15,

        ease: "power3.out"

    }, .7);


    /* =================================================
       IMAGE GENTLE FLOAT
    ================================================= */

    gsap.to(image, {

        y: -5,

        duration: 3,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",

        delay: 1.8

    });


    /* =================================================
       BENEFIT ICON HOVER
    ================================================= */

    benefits.forEach(item => {

        const icon =
            item.querySelector(".benefit-icon");


        if (!icon) return;


        item.addEventListener("mouseenter", () => {

            gsap.to(icon, {

                scale: 1.06,

                duration: .3,

                ease: "power2.out"

            });

        });


        item.addEventListener("mouseleave", () => {

            gsap.to(icon, {

                scale: 1,

                duration: .3,

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