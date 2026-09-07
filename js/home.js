/* =========================================================
   STACKLY CREDIT & LENDING
   HOME PAGE — HERO SLIDER ONLY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       HERO ELEMENTS
    ====================================================== */

    const hero = document.querySelector(".lending-hero");

    if (!hero) return;


    const slides = gsap.utils.toArray(
        ".hero-slide"
    );

    const dots = gsap.utils.toArray(
        ".hero-dot"
    );

    const nextButton =
        document.querySelector("#heroNext");

    const prevButton =
        document.querySelector("#heroPrev");


    if (
        !slides.length ||
        typeof gsap === "undefined"
    ) {
        return;
    }


    /* =====================================================
       SETTINGS
    ====================================================== */

    let currentIndex = 0;

    let isAnimating = false;

    let sliderTimer = null;

    const sliderDuration = 5000;



    /* =====================================================
       GET CONTENT FROM CURRENT SLIDE
    ====================================================== */

    function getSlideContent(slide) {

        return {

            image:
                slide.querySelector(
                    ".hero-image"
                ),

            eyebrow:
                slide.querySelector(
                    ".hero-eyebrow"
                ),

            title:
                slide.querySelector(
                    ".hero-title"
                ),

            description:
                slide.querySelector(
                    ".hero-description"
                ),

            button:
                slide.querySelector(
                    ".hero-button"
                )

        };

    }



    /* =====================================================
       INITIAL STATE
    ====================================================== */

    slides.forEach(
        (slide, index) => {

            const content =
                getSlideContent(slide);


            if (index === 0) {

                gsap.set(
                    slide,
                    {
                        autoAlpha: 1
                    }
                );

                gsap.set(
                    content.image,
                    {
                        scale: 1.03
                    }
                );

            } else {

                gsap.set(
                    slide,
                    {
                        autoAlpha: 0
                    }
                );

            }

        }
    );



    /* =====================================================
       HERO CONTENT INITIAL ANIMATION
    ====================================================== */

    function animateInitialSlide(slide) {

        const content =
            getSlideContent(slide);


        gsap.set(
            content.eyebrow,
            {
                opacity: 0,
                y: 30
            }
        );


        gsap.set(
            content.title,
            {
                opacity: 0,
                y: 45
            }
        );


        gsap.set(
            content.description,
            {
                opacity: 0,
                y: 30
            }
        );


        gsap.set(
            content.button,
            {
                opacity: 0,
                y: 25
            }
        );


        const tl =
            gsap.timeline();


        /* Image */

        tl.fromTo(
            content.image,
            {
                scale: 1.10
            },
            {
                scale: 1.03,
                duration: 1.8,
                ease: "power3.out"
            }
        );


        /* Eyebrow */

        tl.to(
            content.eyebrow,
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "power3.out"
            },
            "-=1.25"
        );


        /* Heading */

        tl.to(
            content.title,
            {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: "power4.out"
            },
            "-=0.45"
        );


        /* Description */

        tl.to(
            content.description,
            {
                opacity: 1,
                y: 0,
                duration: 0.65,
                ease: "power3.out"
            },
            "-=0.45"
        );


        /* Button */

        tl.to(
            content.button,
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "back.out(1.5)"
            },
            "-=0.30"
        );


        return tl;

    }



    /* =====================================================
       INITIAL SLIDE
    ====================================================== */

    animateInitialSlide(
        slides[0]
    );



    /* =====================================================
       SLIDE OUT
    ====================================================== */

    function slideOut(slide) {

        const content =
            getSlideContent(slide);


        return gsap.timeline()
            .to(
                [
                    content.eyebrow,
                    content.title,
                    content.description,
                    content.button
                ],
                {
                    opacity: 0,
                    y: -25,
                    duration: 0.35,
                    stagger: 0.04,
                    ease: "power2.in"
                }
            )
            .to(
                content.image,
                {
                    scale: 1.08,
                    duration: 0.55,
                    ease: "power2.inOut"
                },
                "-=0.20"
            )
            .set(
                slide,
                {
                    autoAlpha: 0
                }
            );

    }



    /* =====================================================
       SLIDE IN
    ====================================================== */

    function slideIn(
        slide,
        direction
    ) {

        const content =
            getSlideContent(slide);


        gsap.set(
            slide,
            {
                autoAlpha: 1
            }
        );


        gsap.set(
            content.image,
            {
                scale: 1.10
            }
        );


        gsap.set(
            content.eyebrow,
            {
                opacity: 0,
                y: 30
            }
        );


        gsap.set(
            content.title,
            {
                opacity: 0,
                y: direction > 0
                    ? 45
                    : -45
            }
        );


        gsap.set(
            content.description,
            {
                opacity: 0,
                y: 30
            }
        );


        gsap.set(
            content.button,
            {
                opacity: 0,
                y: 25
            }
        );


        const tl =
            gsap.timeline();


        /* Image zoom */

        tl.to(
            content.image,
            {
                scale: 1.03,
                duration: 1.7,
                ease: "power3.out"
            }
        );


        /* Eyebrow */

        tl.to(
            content.eyebrow,
            {
                opacity: 1,
                y: 0,
                duration: 0.65,
                ease: "power3.out"
            },
            "-=1.20"
        );


        /* Heading */

        tl.to(
            content.title,
            {
                opacity: 1,
                y: 0,
                duration: 0.85,
                ease: "power4.out"
            },
            "-=0.40"
        );


        /* Description */

        tl.to(
            content.description,
            {
                opacity: 1,
                y: 0,
                duration: 0.60,
                ease: "power3.out"
            },
            "-=0.35"
        );


        /* Button */

        tl.to(
            content.button,
            {
                opacity: 1,
                y: 0,
                duration: 0.55,
                ease: "back.out(1.4)"
            },
            "-=0.25"
        );


        return tl;

    }



    /* =====================================================
       UPDATE DOTS
    ====================================================== */

    function updateDots(index) {

        dots.forEach(
            (dot, dotIndex) => {

                dot.classList.toggle(
                    "active",
                    dotIndex === index
                );

            }
        );

    }



    /* =====================================================
       FLOATING CARDS ANIMATION
    ====================================================== */

    function animateCards(direction) {

        const cards =
            hero.querySelector(
                ".hero-floating-cards"
            );

        const security =
            hero.querySelector(
                ".security-card"
            );

        const success =
            hero.querySelector(
                ".success-card"
            );


        if (!cards) return;


        gsap.fromTo(
            cards,
            {
                opacity: 0,
                y: 25
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "power3.out"
            }
        );


        if (security) {

            gsap.fromTo(
                security,
                {
                    x:
                        direction > 0
                            ? 30
                            : -30
                },
                {
                    x: 0,
                    duration: 0.7,
                    ease: "power3.out"
                }
            );

        }


        if (success) {

            gsap.fromTo(
                success,
                {
                    x:
                        direction > 0
                            ? 40
                            : -40
                },
                {
                    x: 0,
                    duration: 0.8,
                    delay: 0.05,
                    ease: "power3.out"
                }
            );

        }

    }



    /* =====================================================
       CHANGE SLIDE
    ====================================================== */

    function changeSlide(
        newIndex,
        direction
    ) {

        if (
            isAnimating ||
            newIndex === currentIndex
        ) {
            return;
        }


        isAnimating = true;


        const oldSlide =
            slides[currentIndex];

        const newSlide =
            slides[newIndex];


        /* ---------------------------------------------
           Make new slide ready
        ---------------------------------------------- */

        gsap.set(
            newSlide,
            {
                autoAlpha: 0
            }
        );


        /* ---------------------------------------------
           Animate old slide
        ---------------------------------------------- */

        const exitTimeline =
            slideOut(
                oldSlide
            );


        exitTimeline.eventCallback(
            "onComplete",
            () => {


                /* -------------------------------------
                   Animate new slide
                -------------------------------------- */

                slideIn(
                    newSlide,
                    direction
                );


                currentIndex =
                    newIndex;


                updateDots(
                    currentIndex
                );


                animateCards(
                    direction
                );


                isAnimating = false;

            }
        );

    }



    /* =====================================================
       NEXT SLIDE
    ====================================================== */

    function nextSlide() {

        const nextIndex =
            (
                currentIndex + 1
            ) % slides.length;


        changeSlide(
            nextIndex,
            1
        );

    }



    /* =====================================================
       PREVIOUS SLIDE
    ====================================================== */

    function previousSlide() {

        const previousIndex =
            (
                currentIndex -
                1 +
                slides.length
            ) % slides.length;


        changeSlide(
            previousIndex,
            -1
        );

    }



    /* =====================================================
       NEXT BUTTON
    ====================================================== */

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            () => {

                nextSlide();

                restartSlider();

            }
        );

    }



    /* =====================================================
       PREVIOUS BUTTON
    ====================================================== */

    if (prevButton) {

        prevButton.addEventListener(
            "click",
            () => {

                previousSlide();

                restartSlider();

            }
        );

    }



    /* =====================================================
       DOT CLICK
    ====================================================== */

    dots.forEach(
        (dot, index) => {

            dot.addEventListener(
                "click",
                () => {


                    if (
                        index === currentIndex
                    ) {
                        return;
                    }


                    const direction =
                        index > currentIndex
                            ? 1
                            : -1;


                    changeSlide(
                        index,
                        direction
                    );


                    restartSlider();

                }
            );

        }
    );



    /* =====================================================
       AUTO SLIDER
    ====================================================== */

    function startSlider() {

        clearInterval(
            sliderTimer
        );


        sliderTimer =
            setInterval(
                () => {

                    nextSlide();

                },
                sliderDuration
            );

    }



    /* =====================================================
       RESTART SLIDER
    ====================================================== */

    function restartSlider() {

        clearInterval(
            sliderTimer
        );

        startSlider();

    }



    /* =====================================================
       PAUSE ON HOVER
    ====================================================== */

    hero.addEventListener(
        "mouseenter",
        () => {

            clearInterval(
                sliderTimer
            );

        }
    );


    hero.addEventListener(
        "mouseleave",
        () => {

            startSlider();

        }
    );



    /* =====================================================
       TOUCH SWIPE
    ====================================================== */

    let touchStartX = 0;

    let touchEndX = 0;


    hero.addEventListener(
        "touchstart",
        (event) => {

            touchStartX =
                event.changedTouches[0]
                    .screenX;

        },
        {
            passive: true
        }
    );


    hero.addEventListener(
        "touchend",
        (event) => {

            touchEndX =
                event.changedTouches[0]
                    .screenX;


            const distance =
                touchEndX -
                touchStartX;


            if (
                Math.abs(distance) < 50
            ) {
                return;
            }


            if (distance < 0) {

                nextSlide();

            } else {

                previousSlide();

            }


            restartSlider();

        },
        {
            passive: true
        }
    );



    /* =====================================================
       START HERO SLIDER
    ====================================================== */

    startSlider();

});



/* =========================================================
   ABOUT SECTION — GSAP REVEAL
========================================================= */

const aboutSection =
    document.querySelector(
        ".credit-about-section"
    );


if (
    aboutSection &&
    typeof gsap !== "undefined"
) {


    /* =====================================================
       ELEMENTS
    ====================================================== */

    const aboutImage =
        aboutSection.querySelector(
            ".about-image-wrap"
        );


    const aboutRedBar =
        aboutSection.querySelector(
            ".about-red-bar"
        );


    const experienceBadge =
        aboutSection.querySelector(
            ".experience-badge"
        );


    const aboutContent =
        aboutSection.querySelector(
            ".about-content"
        );


    const aboutEyebrow =
        aboutSection.querySelector(
            ".about-eyebrow"
        );


    const aboutTitle =
        aboutSection.querySelector(
            ".about-title"
        );


    const aboutFeatures =
        aboutSection.querySelectorAll(
            ".about-feature"
        );


    const aboutHighlight =
        aboutSection.querySelector(
            ".about-highlight"
        );


    const aboutDescription =
        aboutSection.querySelector(
            ".about-description"
        );


    const aboutProfile =
        aboutSection.querySelector(
            ".about-profile"
        );



    /* =====================================================
       INITIAL STATES
    ====================================================== */

    gsap.set(
        aboutImage,
        {
            opacity: 0,
            x: -90,
            scale: 0.96
        }
    );


    gsap.set(
        aboutRedBar,
        {
            opacity: 0,
            scaleY: 0,
            transformOrigin: "center bottom"
        }
    );


    gsap.set(
        experienceBadge,
        {
            opacity: 0,
            scale: 0.65,
            rotation: -10
        }
    );


    gsap.set(
        aboutContent,
        {
            opacity: 1
        }
    );


    gsap.set(
        [
            aboutEyebrow,
            aboutTitle,
            aboutHighlight,
            aboutDescription,
            aboutProfile
        ],
        {
            opacity: 0,
            x: 80
        }
    );


    gsap.set(
        aboutFeatures,
        {
            opacity: 0,
            y: 35
        }
    );



    /* =====================================================
       SCROLL ANIMATION
    ====================================================== */

    const aboutTimeline =
        gsap.timeline({

            paused: true,

            defaults: {
                ease: "power3.out"
            }

        });


    /* ---------------------------------------------
       IMAGE
    ---------------------------------------------- */

    aboutTimeline.to(
        aboutImage,
        {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.1
        }
    );


    /* ---------------------------------------------
       RED BAR
    ---------------------------------------------- */

    aboutTimeline.to(
        aboutRedBar,
        {
            opacity: 1,
            scaleY: 1,
            duration: 0.65,
            ease: "power2.out"
        },
        "-=0.75"
    );


    /* ---------------------------------------------
       BADGE
    ---------------------------------------------- */

    aboutTimeline.to(
        experienceBadge,
        {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            ease: "back.out(1.5)"
        },
        "-=0.55"
    );


    /* ---------------------------------------------
       EYEBROW
    ---------------------------------------------- */

    aboutTimeline.to(
        aboutEyebrow,
        {
            opacity: 1,
            x: 0,
            duration: 0.55
        },
        "-=0.55"
    );


    /* ---------------------------------------------
       TITLE
    ---------------------------------------------- */

    aboutTimeline.to(
        aboutTitle,
        {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power4.out"
        },
        "-=0.35"
    );


    /* ---------------------------------------------
       FEATURE BOXES
    ---------------------------------------------- */

    aboutTimeline.to(
        aboutFeatures,
        {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.12
        },
        "-=0.40"
    );


    /* ---------------------------------------------
       HIGHLIGHT
    ---------------------------------------------- */

    aboutTimeline.to(
        aboutHighlight,
        {
            opacity: 1,
            x: 0,
            duration: 0.55
        },
        "-=0.25"
    );


    /* ---------------------------------------------
       DESCRIPTION
    ---------------------------------------------- */

    aboutTimeline.to(
        aboutDescription,
        {
            opacity: 1,
            x: 0,
            duration: 0.65
        },
        "-=0.30"
    );


    /* ---------------------------------------------
       PROFILE
    ---------------------------------------------- */

    aboutTimeline.to(
        aboutProfile,
        {
            opacity: 1,
            x: 0,
            duration: 0.55
        },
        "-=0.30"
    );



    /* =====================================================
       INTERSECTION OBSERVER
    ====================================================== */

    const aboutObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            aboutTimeline.play();

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.18
            }
        );


    aboutObserver.observe(
        aboutSection
    );



    /* =====================================================
       BADGE FLOATING EFFECT
    ====================================================== */

    gsap.to(
        experienceBadge,
        {
            y: -7,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        }
    );


}



/* =========================================================
   SERVICES SECTION — GSAP REVEAL
========================================================= */

const servicesSection =
    document.querySelector(
        ".credit-services-section"
    );


if (
    servicesSection &&
    typeof gsap !== "undefined"
) {

    const servicesHeader =
        servicesSection.querySelector(
            ".services-heading"
        );


    const serviceCards =
        servicesSection.querySelectorAll(
            ".credit-service-card"
        );


    const serviceEyebrow =
        servicesSection.querySelector(
            ".services-eyebrow"
        );


    const serviceTitle =
        servicesSection.querySelector(
            ".services-title"
        );


    const serviceIntro =
        servicesSection.querySelector(
            ".services-intro"
        );


    /* =====================================================
       INITIAL STATES
    ====================================================== */

    gsap.set(
        serviceEyebrow,
        {
            opacity: 0,
            y: 25
        }
    );


    gsap.set(
        serviceTitle,
        {
            opacity: 0,
            y: 35
        }
    );


    gsap.set(
        serviceIntro,
        {
            opacity: 0,
            y: 25
        }
    );


    /* Cards reveal from TOP → BOTTOM */

    gsap.set(
        serviceCards,
        {
            opacity: 0,
            y: -65,
            scale: 0.96
        }
    );


    /* =====================================================
       TIMELINE
    ====================================================== */

    const servicesTimeline =
        gsap.timeline({
            paused: true
        });


    /* Eyebrow */

    servicesTimeline.to(
        serviceEyebrow,
        {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out"
        }
    );


    /* Heading */

    servicesTimeline.to(
        serviceTitle,
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power4.out"
        },
        "-=0.25"
    );


    /* Description */

    servicesTimeline.to(
        serviceIntro,
        {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out"
        },
        "-=0.45"
    );


    /* =====================================================
       CARDS TOP → BOTTOM
    ====================================================== */

    servicesTimeline.to(
        serviceCards,
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            stagger: 0.13,
            ease: "power3.out"
        },
        "-=0.15"
    );


    /* =====================================================
       SCROLL TRIGGER USING INTERSECTION OBSERVER
    ====================================================== */

    const servicesObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            servicesTimeline.play();

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.18
            }
        );


    servicesObserver.observe(
        servicesSection
    );


    /* =====================================================
       ICON MICRO ANIMATION
    ===================================================== */

    serviceCards.forEach(
        (card) => {

            const icon =
                card.querySelector(
                    ".service-icon"
                );


            card.addEventListener(
                "mouseenter",
                () => {

                    gsap.to(
                        icon,
                        {
                            scale: 1.1,
                            rotation: -3,
                            duration: 0.35,
                            ease: "power2.out"
                        }
                    );

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    gsap.to(
                        icon,
                        {
                            scale: 1,
                            rotation: 0,
                            duration: 0.4,
                            ease: "power2.out"
                        }
                    );

                }
            );

        }
    );

}


/* =========================================================
   CASE STUDY SECTION — GSAP ANIMATION
========================================================= */

const caseSection =
    document.querySelector(
        ".credit-case-section"
    );


if (
    caseSection &&
    typeof gsap !== "undefined"
) {

    const caseEyebrow =
        caseSection.querySelector(
            ".case-eyebrow"
        );


    const caseTitle =
        caseSection.querySelector(
            ".case-title"
        );


    const caseCards =
        caseSection.querySelectorAll(
            ".case-card"
        );


    /* =====================================================
       HEADER INITIAL STATE
    ====================================================== */

    gsap.set(
        caseEyebrow,
        {
            opacity: 0,
            y: 25
        }
    );


    gsap.set(
        caseTitle,
        {
            opacity: 0,
            y: 35
        }
    );


    /* =====================================================
       CARD INITIAL DIRECTIONS
    ====================================================== */

    /* Card 1 → LEFT */

    gsap.set(
        caseCards[0],
        {
            opacity: 0,
            x: -100,
            scale: 0.96
        }
    );


    /* Card 2 → TOP */

    gsap.set(
        caseCards[1],
        {
            opacity: 0,
            y: -100,
            scale: 0.96
        }
    );


    /* Card 3 → BOTTOM */

    gsap.set(
        caseCards[2],
        {
            opacity: 0,
            y: 100,
            scale: 0.96
        }
    );


    /* Card 4 → RIGHT */

    gsap.set(
        caseCards[3],
        {
            opacity: 0,
            x: 100,
            scale: 0.96
        }
    );


    /* =====================================================
       TIMELINE
    ====================================================== */

    const caseTimeline =
        gsap.timeline({
            paused: true
        });


    /* Eyebrow */

    caseTimeline.to(
        caseEyebrow,
        {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out"
        }
    );


    /* Heading */

    caseTimeline.to(
        caseTitle,
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power4.out"
        },
        "-=0.25"
    );


    /* =====================================================
       CARD 1 — LEFT
    ====================================================== */

    caseTimeline.to(
        caseCards[0],
        {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.85,
            ease: "power3.out"
        },
        "-=0.15"
    );


    /* =====================================================
       CARD 2 — TOP
    ====================================================== */

    caseTimeline.to(
        caseCards[1],
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: "power3.out"
        },
        "-=0.65"
    );


    /* =====================================================
       CARD 3 — BOTTOM
    ====================================================== */

    caseTimeline.to(
        caseCards[2],
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: "power3.out"
        },
        "-=0.65"
    );


    /* =====================================================
       CARD 4 — RIGHT
    ====================================================== */

    caseTimeline.to(
        caseCards[3],
        {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.85,
            ease: "power3.out"
        },
        "-=0.65"
    );


    /* =====================================================
       INTERSECTION OBSERVER
    ====================================================== */

    const caseObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            caseTimeline.play();

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    caseObserver.observe(
        caseSection
    );


    /* =====================================================
       HOVER IMAGE MOVEMENT
    ====================================================== */

    caseCards.forEach(
        (card) => {

            const image =
                card.querySelector(
                    "img"
                );

            const plus =
                card.querySelector(
                    ".case-plus"
                );


            card.addEventListener(
                "mouseenter",
                () => {

                    gsap.to(
                        image,
                        {
                            scale: 1.08,
                            duration: 0.8,
                            ease: "power3.out"
                        }
                    );


                    gsap.to(
                        plus,
                        {
                            rotation: 90,
                            duration: 0.45,
                            ease: "power3.out"
                        }
                    );

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    gsap.to(
                        image,
                        {
                            scale: 1,
                            duration: 0.8,
                            ease: "power3.out"
                        }
                    );


                    gsap.to(
                        plus,
                        {
                            rotation: 0,
                            duration: 0.35,
                            ease: "power3.out"
                        }
                    );

                }
            );

        }
    );

}


/* =====================================================
   STACKLY CREDIT TESTIMONIAL SLIDER - GSAP
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const testimonialSection =
        document.querySelector(".credit-testimonials-section");

    if (!testimonialSection || typeof gsap === "undefined") {
        return;
    }


    const testimonials =
        testimonialSection.querySelectorAll(".testimonial-item");

    const dots =
        testimonialSection.querySelectorAll(".testimonial-dot");

    const mainImage =
        testimonialSection.querySelector(".testimonial-image-box img");


    if (!testimonials.length) {
        return;
    }


    /* -------------------------------------------------
       INITIAL STATES
    ------------------------------------------------- */

    gsap.set(testimonialSection, {
        opacity: 0,
        y: 60
    });


    gsap.set(
        testimonialSection.querySelector(".testimonial-eyebrow"),
        {
            opacity: 0,
            y: 20
        }
    );


    gsap.set(
        testimonialSection.querySelector(".testimonial-heading h2"),
        {
            opacity: 0,
            y: 35
        }
    );


    gsap.set(
        testimonialSection.querySelector(".testimonial-main-image"),
        {
            opacity: 0,
            x: 80
        }
    );


    gsap.set(
        testimonialSection.querySelector(".testimonial-red-box"),
        {
            opacity: 0,
            x: -80
        }
    );


    gsap.set(
        testimonialSection.querySelector(".testimonial-image-box"),
        {
            opacity: 0,
            x: 80
        }
    );


    /* -------------------------------------------------
       SECTION REVEAL
    ------------------------------------------------- */

    const testimonialTimeline = gsap.timeline({
        paused: true
    });


    testimonialTimeline.to(
        testimonialSection,
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
        }
    );


    testimonialTimeline.to(
        testimonialSection.querySelector(".testimonial-eyebrow"),
        {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out"
        },
        "-=0.45"
    );


    testimonialTimeline.to(
        testimonialSection.querySelector(".testimonial-heading h2"),
        {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power4.out"
        },
        "-=0.3"
    );


    testimonialTimeline.to(
        testimonialSection.querySelector(".testimonial-main-image"),
        {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out"
        },
        "-=0.55"
    );


    testimonialTimeline.to(
        testimonialSection.querySelector(".testimonial-red-box"),
        {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out"
        },
        "-=0.45"
    );


    testimonialTimeline.to(
        testimonialSection.querySelector(".testimonial-image-box"),
        {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out"
        },
        "-=0.65"
    );


    /* -------------------------------------------------
       INTERSECTION OBSERVER
    ------------------------------------------------- */

    const testimonialObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        testimonialTimeline.play();

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    testimonialObserver.observe(testimonialSection);


    /* -------------------------------------------------
       SLIDER
    ------------------------------------------------- */

    let currentSlide = 0;
    let isAnimating = false;
    let autoSlide;


    function changeTestimonial(nextIndex) {

        if (
            nextIndex === currentSlide ||
            isAnimating
        ) {
            return;
        }


        isAnimating = true;


        const current =
            testimonials[currentSlide];

        const next =
            testimonials[nextIndex];


        /* Current content moves LEFT */

        gsap.to(current, {
            x: -100,
            opacity: 0,
            duration: 0.55,
            ease: "power3.in",
            onComplete: () => {

                current.classList.remove("active");

            }
        });


        /* New content comes from RIGHT */

        gsap.set(next, {
            x: 100,
            opacity: 0,
            visibility: "visible"
        });


        next.classList.add("active");


        gsap.to(next, {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power4.out",
            onComplete: () => {

                isAnimating = false;

            }
        });


        /* Update dots */

        dots.forEach(dot => {
            dot.classList.remove("active");
        });


        if (dots[nextIndex]) {
            dots[nextIndex].classList.add("active");
        }


        currentSlide = nextIndex;
    }


    /* -------------------------------------------------
       AUTOMATIC SLIDE
    ------------------------------------------------- */

    function startAutoSlide() {

        clearInterval(autoSlide);


        autoSlide = setInterval(() => {

            const nextIndex =
                (currentSlide + 1) % testimonials.length;

            changeTestimonial(nextIndex);

        }, 4500);

    }


    /* -------------------------------------------------
       DOT CLICK
    ------------------------------------------------- */

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            changeTestimonial(index);

            startAutoSlide();

        });

    });


    /* -------------------------------------------------
       START SLIDER
    ------------------------------------------------- */

    startAutoSlide();


    /* -------------------------------------------------
       IMAGE HOVER
    ------------------------------------------------- */

    const imageBox =
        testimonialSection.querySelector(
            ".testimonial-image-box"
        );


    if (imageBox && mainImage) {

        imageBox.addEventListener("mouseenter", () => {

            gsap.to(mainImage, {
                scale: 1.06,
                duration: 0.9,
                ease: "power3.out"
            });

        });


        imageBox.addEventListener("mouseleave", () => {

            gsap.to(mainImage, {
                scale: 1.01,
                duration: 0.9,
                ease: "power3.out"
            });

        });

    }

});


/* =====================================================
   STACKLY TEAM SECTION - GSAP
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const teamSection =
        document.querySelector(".credit-team-section");

    if (!teamSection || typeof gsap === "undefined") {
        return;
    }


    const eyebrow =
        teamSection.querySelector(".team-eyebrow");

    const title =
        teamSection.querySelector(".team-heading h2");

    const cards =
        teamSection.querySelectorAll(".credit-team-card");

    const images =
        teamSection.querySelectorAll(".team-image-wrap");

    const infos =
        teamSection.querySelectorAll(".team-info");


    /* =================================================
       INITIAL STATES
    ================================================= */

    gsap.set(eyebrow, {
        opacity: 0,
        y: 25
    });


    gsap.set(title, {
        opacity: 0,
        y: 35
    });


    gsap.set(cards, {
        opacity: 0,
        y: 70
    });


    gsap.set(images, {
        clipPath: "inset(100% 0% 0% 0%)",
        scale: 1.05
    });


    gsap.set(infos, {
        opacity: 0,
        y: 25
    });


    /* =================================================
       MAIN TIMELINE
    ================================================= */

    const teamTimeline =
        gsap.timeline({
            paused: true
        });


    /* eyebrow */

    teamTimeline.to(
        eyebrow,
        {
            opacity: 1,
            y: 0,
            duration: .55,
            ease: "power3.out"
        }
    );


    /* heading */

    teamTimeline.to(
        title,
        {
            opacity: 1,
            y: 0,
            duration: .75,
            ease: "power4.out"
        },
        "-=.25"
    );


    /* cards */

    teamTimeline.to(
        cards,
        {
            opacity: 1,
            y: 0,
            duration: .75,
            stagger: .15,
            ease: "power3.out"
        },
        "-=.3"
    );


    /* =================================================
       IMAGE REVEAL FROM TOP
    ================================================= */

    teamTimeline.to(
        images,
        {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            duration: 1,
            stagger: .16,
            ease: "power4.out"
        },
        "-=.65"
    );


    /* =================================================
       INFO BOX REVEAL
    ================================================= */

    teamTimeline.to(
        infos,
        {
            opacity: 1,
            y: 0,
            duration: .6,
            stagger: .15,
            ease: "power3.out"
        },
        "-=.6"
    );


    /* =================================================
       INTERSECTION OBSERVER
    ================================================= */

    const teamObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        teamTimeline.play();

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: .18
            }
        );


    teamObserver.observe(teamSection);


    /* =================================================
       HOVER IMAGE ANIMATION
    ================================================= */

    cards.forEach(card => {

        const image =
            card.querySelector(".team-image-wrap img");

        const social =
            card.querySelector(".team-social-card");


        card.addEventListener("mouseenter", () => {

            gsap.to(image, {
                scale: 1.07,
                duration: .8,
                ease: "power3.out"
            });


            gsap.to(social, {
                y: 0,
                opacity: 1,
                duration: .4,
                ease: "power3.out"
            });

        });


        card.addEventListener("mouseleave", () => {

            gsap.to(image, {
                scale: 1,
                duration: .8,
                ease: "power3.out"
            });


            gsap.to(social, {
                y: "100%",
                opacity: 0,
                duration: .35,
                ease: "power3.in"
            });

        });

    });

});


/* =====================================================
   STACKLY WORK PROCESS - GSAP
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const processSection =
        document.querySelector(".credit-process-section");

    if (
        !processSection ||
        typeof gsap === "undefined"
    ) {
        return;
    }


    const heading =
        processSection.querySelector(".process-heading");

    const eyebrow =
        processSection.querySelector(".process-eyebrow");

    const title =
        processSection.querySelector(".process-heading h2");

    const steps =
        processSection.querySelectorAll(".process-step");

    const circles =
        processSection.querySelectorAll(".process-icon");

    const contents =
        processSection.querySelectorAll(".process-content");

    const numbers =
        processSection.querySelectorAll(".process-number");

    const floating =
        processSection.querySelectorAll(".process-floating");

    const line =
        processSection.querySelector(".process-line-path");


    /* =================================================
       INITIAL STATES
    ================================================= */

    gsap.set(eyebrow, {
        opacity: 0,
        y: 20
    });


    gsap.set(title, {
        opacity: 0,
        y: 35
    });


    gsap.set(steps, {
        opacity: 0,
        y: 55,
        scale: .94
    });


    gsap.set(circles, {
        scale: .75
    });


    gsap.set(contents, {
        opacity: 0,
        y: 20
    });


    gsap.set(numbers, {
        scale: 0,
        opacity: 0
    });


    if (line) {

        const lineLength =
            line.getTotalLength();

        gsap.set(line, {
            strokeDasharray: lineLength,
            strokeDashoffset: lineLength
        });

    }


    gsap.set(floating, {
        opacity: 0,
        scale: .6
    });


    /* =================================================
       TIMELINE
    ================================================= */

    const processTimeline =
        gsap.timeline({
            paused: true
        });


    /* eyebrow */

    processTimeline.to(
        eyebrow,
        {
            opacity: 1,
            y: 0,
            duration: .55,
            ease: "power3.out"
        }
    );


    /* heading */

    processTimeline.to(
        title,
        {
            opacity: 1,
            y: 0,
            duration: .75,
            ease: "power4.out"
        },
        "-=.25"
    );


    /* connecting line */

    if (line) {

        processTimeline.to(
            line,
            {
                strokeDashoffset: 0,
                duration: 1.5,
                ease: "power2.inOut"
            },
            "-=.25"
        );

    }


    /* steps */

    processTimeline.to(
        steps,
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: .7,
            stagger: .18,
            ease: "back.out(1.3)"
        },
        "-=1.1"
    );


    /* circles */

    processTimeline.to(
        circles,
        {
            scale: 1,
            duration: .55,
            stagger: .15,
            ease: "back.out(1.7)"
        },
        "-=.65"
    );


    /* numbers */

    processTimeline.to(
        numbers,
        {
            scale: 1,
            opacity: 1,
            duration: .45,
            stagger: .12,
            ease: "back.out(1.8)"
        },
        "-=.45"
    );


    /* text */

    processTimeline.to(
        contents,
        {
            opacity: 1,
            y: 0,
            duration: .6,
            stagger: .12,
            ease: "power3.out"
        },
        "-=.45"
    );


    /* floating icons */

    processTimeline.to(
        floating,
        {
            opacity: .75,
            scale: 1,
            duration: .7,
            stagger: .12,
            ease: "back.out(1.5)"
        },
        "-=.55"
    );


    /* =================================================
       INTERSECTION OBSERVER
    ================================================= */

    const processObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        processTimeline.play();

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: .18
            }
        );


    processObserver.observe(
        processSection
    );


    /* =================================================
       HOVER ANIMATION
    ================================================= */

    steps.forEach(step => {

        const circle =
            step.querySelector(".process-icon");

        const icon =
            step.querySelector(".process-icon i");

        const number =
            step.querySelector(".process-number");


        step.addEventListener(
            "mouseenter",
            () => {

                gsap.to(circle, {
                    y: -5,
                    scale: 1.06,
                    duration: .35,
                    ease: "power3.out"
                });


                gsap.to(icon, {
                    scale: 1.12,
                    rotation: -5,
                    duration: .35,
                    ease: "power3.out"
                });


                gsap.to(number, {
                    scale: 1.15,
                    duration: .3,
                    ease: "back.out(2)"
                });

            }
        );


        step.addEventListener(
            "mouseleave",
            () => {

                gsap.to(circle, {
                    y: 0,
                    scale: 1,
                    duration: .4,
                    ease: "power3.out"
                });


                gsap.to(icon, {
                    scale: 1,
                    rotation: 0,
                    duration: .4,
                    ease: "power3.out"
                });


                gsap.to(number, {
                    scale: 1,
                    duration: .3,
                    ease: "power3.out"
                });

            }
        );

    });


    /* =================================================
       FLOATING ANIMATION
    ================================================= */

    floating.forEach((item, index) => {

        gsap.to(item, {
            y: index % 2 === 0 ? -12 : 12,
            rotation: index % 2 === 0 ? 4 : -4,

            duration: 2.8 + index * .3,

            repeat: -1,

            yoyo: true,

            ease: "sine.inOut",

            delay: index * .25
        });

    });

});


/* =====================================================
   STACKLY BENEFITS SECTION - GSAP
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const section =
        document.querySelector(".credit-benefits-section");

    if (
        !section ||
        typeof gsap === "undefined"
    ) {
        return;
    }


    /* =================================================
       ELEMENTS
    ================================================= */

    const eyebrow =
        section.querySelector(".benefits-eyebrow");

    const title =
        section.querySelector(".benefits-title");

    const tabs =
        section.querySelectorAll(".benefit-tab");

    /* FIXED LARGE IMAGE */
    const image =
        section.querySelector(".benefits-main-image");

    /* CHANGING SMALL IMAGE */
    const smallImage =
        section.querySelector(".benefits-small-img");

    const description =
        section.querySelector(".benefits-description");

    const list =
        section.querySelector(".benefits-list");

    const listItems =
        section.querySelectorAll(".benefits-list li");

    const statNumber =
        section.querySelector(".benefits-stat-number");

    const statText =
        section.querySelector(".benefits-stat-text");

    const statIcon =
        section.querySelector(".benefits-stat-icon i");


    /* =================================================
       CONTENT DATA
    ================================================= */

    const benefitsData = {

        personal: {

            title:
                "Flexible personal loans for your financial goals",

            description:
                "Access practical personal lending solutions designed around your needs, with clear information and professional guidance throughout the application process.",

            /* ONLY SMALL IMAGE CHANGES */
            smallImage:
                "assets/benefit-img.webp",

            bullets: [
                "Flexible loan options for your needs",
                "Clear repayment information",
                "Professional lending guidance",
                "Simple and transparent application"
            ],

            number:
                "6,800",

            stat:
                "Customers supported with lending solutions",

            icon:
                "fa-hand-holding-dollar"
        },


        business: {

            title:
                "Business financing built to support your growth",

            description:
                "Give your business access to suitable financing options that can help manage working capital, expansion plans and important business investments.",

            /* ONLY SMALL IMAGE CHANGES */
            smallImage:
                "assets/benefit-img.webp",

            bullets: [
                "Business funding for growth plans",
                "Financing options for working capital",
                "Guidance from lending specialists",
                "Straightforward funding process"
            ],

            number:
                "4,250",

            stat:
                "Businesses supported with financing",

            icon:
                "fa-building-columns"
        },


        credit: {

            title:
                "Improve your credit with smarter financial guidance",

            description:
                "Understand your credit position, identify opportunities for improvement and build healthier financial habits with practical credit-focused support.",

            /* ONLY SMALL IMAGE CHANGES */
            smallImage:
                "assets/benefit-img.webp",

            bullets: [
                "Understand your credit profile",
                "Identify credit improvement opportunities",
                "Build stronger financial habits",
                "Plan for future lending needs"
            ],

            number:
                "8,500",

            stat:
                "Clients guided toward stronger credit",

            icon:
                "fa-chart-line"
        }

    };


    /* =================================================
       INITIAL SECTION ANIMATION
    ================================================= */

    gsap.set(
        eyebrow,
        {
            opacity: 0,
            y: 20
        }
    );


    gsap.set(
        title,
        {
            opacity: 0,
            x: 45
        }
    );


    /* -----------------------------------------------
       LARGE IMAGE
       REVEALS ONLY ONCE
    ------------------------------------------------ */

    gsap.set(
        image,
        {
            opacity: 1,

            clipPath:
                "inset(100% 0% 0% 0%)",

            scale: 1.05
        }
    );


    /* -----------------------------------------------
       CONTENT
    ------------------------------------------------ */

    gsap.set(
        [
            section.querySelector(".benefits-tabs"),
            section.querySelector(".benefits-description"),
            section.querySelector(".benefits-details"),
            section.querySelector(".benefits-stat")
        ],
        {
            opacity: 0,
            y: 30
        }
    );


    /* =================================================
       SECTION TIMELINE
    ================================================= */

    const timeline =
        gsap.timeline({
            paused: true
        });


    timeline.to(
        eyebrow,
        {
            opacity: 1,
            y: 0,
            duration: .55,
            ease: "power3.out"
        }
    );


    timeline.to(
        title,
        {
            opacity: 1,
            x: 0,
            duration: .75,
            ease: "power4.out"
        },
        "-=.25"
    );


    /* -----------------------------------------------
       LARGE IMAGE BOTTOM → TOP
    ------------------------------------------------ */

    timeline.to(
        image,
        {
            opacity: 1,

            clipPath:
                "inset(0% 0% 0% 0%)",

            scale: 1,

            duration: 1.1,

            ease: "power4.out"
        },
        "-=.65"
    );


    timeline.to(
        section.querySelector(".benefits-tabs"),
        {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        },
        "-=.65"
    );


    timeline.to(
        section.querySelector(".benefits-description"),
        {
            opacity: 1,
            y: 0,
            duration: .55,
            ease: "power3.out"
        },
        "-=.3"
    );


    timeline.to(
        section.querySelector(".benefits-details"),
        {
            opacity: 1,
            y: 0,
            duration: .55,
            ease: "power3.out"
        },
        "-=.3"
    );


    timeline.to(
        section.querySelector(".benefits-stat"),
        {
            opacity: 1,
            y: 0,
            duration: .55,
            ease: "power3.out"
        },
        "-=.25"
    );


    /* =================================================
       INTERSECTION OBSERVER
    ================================================= */

    const observer =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        timeline.play();

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: .15
            }
        );


    observer.observe(section);


    /* =================================================
       TAB CHANGE
    ================================================= */

    tabs.forEach(tab => {

        tab.addEventListener(
            "click",
            () => {

                const key =
                    tab.dataset.benefit;

                const data =
                    benefitsData[key];


                if (!data) {
                    return;
                }


                /* -----------------------------------------
                   ACTIVE TAB
                ------------------------------------------ */

                tabs.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });


                tab.classList.add("active");


                /* -----------------------------------------
                   CHANGE ANIMATION

                   IMPORTANT:
                   LARGE IMAGE IS NOT INCLUDED HERE.
                ------------------------------------------ */

                const changeTimeline =
                    gsap.timeline();


                changeTimeline.to(
                    [
                        title,
                        description,
                        smallImage,
                        list,
                        statNumber,
                        statText,
                        statIcon
                    ],
                    {
                        opacity: 0,
                        y: 15,
                        duration: .25,
                        ease: "power2.in"
                    }
                );


                /* -----------------------------------------
                   CHANGE CONTENT
                ------------------------------------------ */

                changeTimeline.call(
                    () => {

                        /* TITLE */

                        title.textContent =
                            data.title;


                        /* DESCRIPTION */

                        description.textContent =
                            data.description;


                        /* ---------------------------------
                           ONLY SMALL IMAGE CHANGES
                        --------------------------------- */

                        smallImage.src =
                            data.smallImage;


                        /* BULLETS */

                        listItems.forEach(
                            (item, index) => {

                                const icon =
                                    item.querySelector("i");


                                item.innerHTML = "";


                                item.appendChild(
                                    icon
                                );


                                item.append(
                                    document.createTextNode(
                                        data.bullets[index]
                                    )
                                );

                            }
                        );


                        /* STATISTIC */

                        statNumber.textContent =
                            data.number;


                        statText.textContent =
                            data.stat;


                        /* STAT ICON */

                        statIcon.className =
                            `fa-solid ${data.icon}`;

                    }
                );


                /* -----------------------------------------
                   TITLE
                ------------------------------------------ */

                changeTimeline.fromTo(
                    title,
                    {
                        opacity: 0,
                        x: 30
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: .55,
                        ease: "power3.out"
                    }
                );


                /* -----------------------------------------
                   DESCRIPTION
                ------------------------------------------ */

                changeTimeline.fromTo(
                    description,
                    {
                        opacity: 0,
                        y: 15
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: .45,
                        ease: "power3.out"
                    },
                    "-=.3"
                );


                /* -----------------------------------------
                   SMALL IMAGE
                   SMOOTH SCALE + FADE
                ------------------------------------------ */

                changeTimeline.fromTo(
                    smallImage,
                    {
                        opacity: 0,
                        scale: .65
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: .65,
                        ease: "back.out(1.6)"
                    },
                    "-=.25"
                );


                /* -----------------------------------------
                   BULLET LIST
                ------------------------------------------ */

                changeTimeline.fromTo(
                    list,
                    {
                        opacity: 0,
                        x: 25
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: .5,
                        ease: "power3.out"
                    },
                    "-=.4"
                );


                /* -----------------------------------------
                   STATISTIC
                ------------------------------------------ */

                changeTimeline.fromTo(
                    [
                        statNumber,
                        statText,
                        statIcon
                    ],
                    {
                        opacity: 0,
                        y: 15
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: .45,
                        stagger: .08,
                        ease: "power3.out"
                    },
                    "-=.25"
                );

            }
        );

    });

});


/* =====================================================
   STACKLY INSIGHTS SECTION - GSAP
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const section =
        document.querySelector(".credit-insights-section");

    if (
        !section ||
        typeof gsap === "undefined"
    ) {
        return;
    }


    const eyebrow =
        section.querySelector(".insights-eyebrow");

    const title =
        section.querySelector(".insights-heading h2");

    const button =
        section.querySelector(".insights-view-btn");

    const cards =
        section.querySelectorAll(".insight-card");

    const images =
        section.querySelectorAll(".insight-image-wrap");

    const contents =
        section.querySelectorAll(".insight-content");

    const metas =
        section.querySelectorAll(".insight-meta");

    const cardTitles =
        section.querySelectorAll(".insight-content h3");


    /* =================================================
       INITIAL STATES
    ================================================= */

    gsap.set(
        eyebrow,
        {
            opacity: 0,
            y: 20
        }
    );


    gsap.set(
        title,
        {
            opacity: 0,
            y: 35
        }
    );


    gsap.set(
        button,
        {
            opacity: 0,
            x: 35
        }
    );


    /* Cards */

    gsap.set(
        cards,
        {
            opacity: 0,
            y: 60
        }
    );


    /* =================================================
       IMAGE BOTTOM → TOP
    ================================================= */

    gsap.set(
        images,
        {
            clipPath:
                "inset(100% 0% 0% 0%)",

            scale: 1.05
        }
    );


    gsap.set(
        contents,
        {
            opacity: 0,
            y: 35
        }
    );


    /* =================================================
       TIMELINE
    ================================================= */

    const timeline =
        gsap.timeline({
            paused: true
        });


    /* eyebrow */

    timeline.to(
        eyebrow,
        {
            opacity: 1,
            y: 0,
            duration: .55,
            ease: "power3.out"
        }
    );


    /* heading */

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


    /* button */

    timeline.to(
        button,
        {
            opacity: 1,
            x: 0,
            duration: .65,
            ease: "power3.out"
        },
        "-=.55"
    );


    /* cards */

    timeline.to(
        cards,
        {
            opacity: 1,
            y: 0,
            duration: .7,
            stagger: .15,
            ease: "power3.out"
        },
        "-=.35"
    );


    /* =================================================
       IMAGE REVEAL
       BOTTOM → TOP
    ================================================= */

    timeline.to(
        images,
        {
            clipPath:
                "inset(0% 0% 0% 0%)",

            scale: 1,

            duration: 1,

            stagger: .16,

            ease: "power4.out"
        },
        "-=.55"
    );


    /* =================================================
       CARD CONTENT
    ================================================= */

    timeline.to(
        contents,
        {
            opacity: 1,
            y: 0,
            duration: .65,
            stagger: .15,
            ease: "power3.out"
        },
        "-=.65"
    );


    /* =================================================
       INTERSECTION OBSERVER
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
                threshold: .15
            }
        );


    observer.observe(section);


    /* =================================================
       HOVER ANIMATION
    ================================================= */

    cards.forEach(card => {

        const image =
            card.querySelector(
                ".insight-image-wrap img"
            );

        const content =
            card.querySelector(
                ".insight-content"
            );


        card.addEventListener(
            "mouseenter",
            () => {

                gsap.to(
                    image,
                    {
                        scale: 1.09,
                        duration: .8,
                        ease: "power3.out"
                    }
                );


                gsap.to(
                    content,
                    {
                        y: -5,
                        duration: .4,
                        ease: "power3.out"
                    }
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                gsap.to(
                    image,
                    {
                        scale: 1,
                        duration: .8,
                        ease: "power3.out"
                    }
                );


                gsap.to(
                    content,
                    {
                        y: 0,
                        duration: .4,
                        ease: "power3.out"
                    }
                );

            }
        );

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