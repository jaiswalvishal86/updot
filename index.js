const body = document.body;
let loaded = false;

const onInteraction = () => {
  if (loaded === true) {
    return;
  }
  loaded = true;

  const modelViewer = document.createElement("script");
  const lottieScript = document.createElement("script");
  modelViewer.type = "module";
  lottieScript.type = "module";
  modelViewer.src =
    "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
  body.appendChild(modelViewer);
  lottieScript.src =
    "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
  body.appendChild(lottieScript);
  gsap.to(".updot_logo__large", {
    yPercent: -100,
    ease: "power4.easeInOut",
    duration: 1.2,
  });
};

body.addEventListener("mouseover", onInteraction, { once: true });
body.addEventListener("touchmove", onInteraction, { once: true });
body.addEventListener("scroll", onInteraction, { once: true });
body.addEventListener("keydown", onInteraction, { once: true });

window.Webflow ||= [];
window.Webflow.push(() => {
  const master = gsap.timeline();
  master.add(loader());

  function loader() {
    const tlLoader = gsap
      .timeline({
        defaults: { ease: "none" },
        onComplete: () => {
          gsap.set(".loader", { visibility: "hidden" });
        },
      })
      .to(".dot", 0.01, {
        transformOrigin: "50% 100%",
        yoyo: true,
        scale: 0.8,
        repeat: 1,
      })
      .to(".dot", 0.8, {
        yPercent: -500,
        scaleY: 1.4,
        scaleX: 1,
        ease: Circ.easeOut,
        yoyo: true,
        repeat: 1,
      })
      .to(".dot", 1, {
        yPercent: 500,
        scaleY: 1.4,
        scaleX: 1,
        ease: Circ.easeOut,
        yoyo: true,
        repeat: 1,
      })
      .to(".dot", 0.5, {
        yPercent: -250,
        scaleY: 0,
        scaleX: 0,
        ease: Circ.easInOut,
        yoyo: true,
      })
      .to(
        ".loader_logo__wrapper",
        {
          height: 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "<+0.2"
      )
      .to(
        ".loader",
        {
          height: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        "<+0.1"
      );
    return tlLoader;
  }
});

window.addEventListener("DOMContentLoaded", (event) => {
  // Split text into spans
  let typeSplit = new SplitType("[text-split]", {
    types: "words, chars",
    tagName: "span",
  });

  $(".heading-container").each(function (index) {
    let headings = $(this).find(".hero_heading__main");
    let tl = gsap.timeline({ repeat: -1 });
    tl.set($(this), { opacity: 1 });
    headings.each(function (index) {
      if (index > 0) {
        tl.from($(this).find(".word"), {
          opacity: 0,
          yPercent: 100,
          skewY: 8,
          duration: 0.5,
          ease: "power4.easeInOut",
          stagger: { amount: 0.3 },
        });
      }
      if (index < headings.length - 1) {
        tl.to($(this).find(".word"), {
          delay: 5,
          opacity: 0,
          yPercent: -100,
          skewY: -2,
          duration: 0.5,
          ease: "power4.easeInOut",
          stagger: { amount: 0.3 },
        });
      }
    });
  });

  $(".sub_heading_wrapper").each(function (index) {
    let headings = $(this).find(".main-sub-text");
    let tl = gsap.timeline({ repeat: -1 });
    tl.set($(this), { opacity: 0.8 });
    headings.each(function (index) {
      if (index > 0) {
        tl.from($(this).find(".word"), {
          opacity: 0,
          yPercent: 100,
          skewY: 4,
          duration: 0.5,
          ease: "power4.easeInOut",
          stagger: { amount: 0.3 },
        });
      }
      if (index < headings.length - 1) {
        tl.to($(this).find(".word"), {
          delay: 5,
          opacity: 0,
          yPercent: -100,
          skewY: -2,
          duration: 0.5,
          ease: "power4.easeInOut",
          stagger: { amount: 0.3 },
        });
      }
    });
  });

  $(".hero_img__wrapper").each(function (index) {
    let images = $(this).find(".hero_img__container");
    let tl = gsap.timeline({ repeat: -1 });
    tl.set($(this), { opacity: 1 });
    images.each(function (index) {
      if (index > 0) {
        tl.from($(this).find(".hero_img"), {
          opacity: 0,
          duration: 0.5,
          ease: "power4.easeInOut",
        });
      }
      if (index < images.length - 1) {
        tl.to($(this).find(".hero_img"), {
          delay: 5.5,
          opacity: 0,
          duration: 0.5,
          ease: "power4.easeInOut",
        });
      }
    });
  });

  $(".tab_2").addClass("w--current");

  $(".slider_gallery__component").each(function (index) {
    const bgSwiper = new Swiper($(this).find(".swiper.is-slider-bg")[0], {
      slidesPerView: 1,
      loop: true,
      loopedSlides: 4,
      speed: 800,
      // keyboard: true,
      centeredSlides: true,
    });

    const thumbsSwiper = new Swiper(
      $(this).find(".swiper.is-slider-thumbs")[0],
      {
        speed: 600,
        keyboard: true,
        direction: "horizontal",
        slideToClickedSlide: true,
        breakpoints: {
          768: {
            slidesPerView: 4,
          },
          990: {
            slidesPerView: 5,
          },
        },
        allowTouchMove: true,
        spaceBetween: 48,
        loop: true,
        loopedSlides: 4,
        centeredSlides: true,
        slideActiveClass: "is-active",
        slideDuplicateActiveClass: "is-active",
      }
    );

    thumbsSwiper.controller.control = bgSwiper;
    bgSwiper.controller.control = thumbsSwiper;
  });

  let swiperImg = new Swiper(".swiper.case-img", {
    speed: 300,
    grabCursor: true,
    slidesPerView: "auto",
    centeredSlides: true,
    direction: "horizontal",
    touchAngle: 45,
    slideActiveClass: "is-active",
    slideDuplicateActiveClass: "is-active",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  let swiper = new Swiper(".swiper.insight", {
    speed: 400,
    spaceBetween: 32,
    pagination: {
      el: ".insight-pagination",
      clickable: true,
    },
  });

  $(".clients_logo__wrapper").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".body");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top top",
        end: "center bottom",
        scrub: 1,
      },
    });
    tl.fromTo(
      ".mobile_navbar",
      {
        backgroundColor: "#d4d4d4",
      },
      {
        backgroundColor: "#f8f8f8",
        duration: 1,
      },
      "<"
    );
    tl.fromTo(
      ".gray_spacer",
      {
        backgroundColor: "#d4d4d4",
      },
      {
        backgroundColor: "#f8f8f8",
        duration: 1,
      },
      "<"
    );
  });

  $(".slide-list.case").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".body");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top +50%, top",
        end: "center bottom",
        scrub: 1,
      },
    });
    tl.fromTo(
      targetElement,
      {
        backgroundColor: "#f8f8f8",
        color: "#000000",
      },
      {
        backgroundColor: "#000000",
        color: "#ffffff",
        duration: 1,
      }
    );
    tl.to(
      ".mobile_navbar",
      {
        backgroundColor: "#000000",
        duration: 1,
      },
      "<"
    );
    tl.to(
      ".gray_spacer",
      {
        backgroundColor: "#000000",
        duration: 1,
      },
      "<"
    );
    tl.fromTo(
      ".mobile_logo__img",
      {
        color: "#000000",
      },
      {
        color: "#ffffff",
        duration: 1,
      },
      "<"
    );
    tl.fromTo(
      ".hamburger_line__1",
      {
        backgroundColor: "#000000",
      },
      {
        backgroundColor: "#ffffff",
        duration: 1,
      },
      "<"
    );
    tl.fromTo(
      ".hamburger_line_2",
      {
        backgroundColor: "#000000",
      },
      {
        backgroundColor: "#ffffff",
        duration: 1,
      },
      "<"
    );
    tl.fromTo(
      ".brand_logo",
      {
        color: "#000000",
      },
      {
        color: "#ffffff",
        duration: 1,
      },
      "<"
    );
    tl.fromTo(
      ".contact_btn__sidebar",
      {
        backgroundColor: "#000000",
        color: "#ffffff",
      },
      {
        backgroundColor: "#ffffff",
        color: "#000000",
        duration: 1,
      },
      "<"
    );
    tl.fromTo(
      ".case_study__heading--wrapper",
      {
        color: "#000000",
      },
      {
        color: "#ffffff",
        duration: 1,
      },
      "<"
    );
    tl.fromTo(
      ".header_marquee_container",
      {
        backgroundColor: "#000000",
      },
      {
        backgroundColor: "#ffffff",
        duration: 1,
      },
      "<"
    );
    tl.fromTo(
      ".header_marquee__text",
      {
        color: "#ffffff",
      },
      {
        color: "#000000",
        duration: 1,
      },
      "<"
    );
    tl.fromTo(
      ".header_button",
      {
        borderColor: "#ffffff",
      },
      {
        borderColor: "#000000",
        duration: 1,
      },
      "<"
    );
    tl.fromTo(
      ".header_button__text",
      {
        color: "#ffffff",
      },
      {
        color: "#000000",
        duration: 1,
      },
      "<"
    );
    tl.fromTo(
      ".close_img",
      {
        color: "#ffffff",
      },
      {
        color: "#000000",
        duration: 1,
      },
      "<"
    );
    tl.fromTo(
      ".insight_card__heading",
      {
        color: "#000000",
      },
      {
        color: "#ffffff",
        duration: 1,
      },
      "<"
    );
    tl.fromTo(
      ".technology_card",
      {
        color: "#ffffff",
      },
      {
        color: "#2c2c2c",
        duration: 1,
      },
      "<"
    );
  });
});
