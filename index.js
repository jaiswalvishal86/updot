const startProject = document.getElementById("start-project");
const joinTeam = document.getElementById("join-team");
const quickWord = document.getElementById("quick-word");
// Get references to the buttons and text elements
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const text4 = document.getElementById("text4");
const text5 = document.getElementById("text5");
const text6 = document.getElementById("text6");
const text7 = document.getElementById("text7");
const closeButton = document.getElementById("close");
const muteButton = document.getElementById("mute");
const chatInputField = document.getElementById("name-5");
const chatSubmitButton = document.getElementById("button8");

let hasCodeRun = false;

chatInputField.addEventListener("input", function () {
  // Check if the input field is empty
  if (chatInputField.value.trim() === "") {
    // If empty, hide the button
    chatSubmitButton.disabled = true;
  } else {
    // If not empty, show the button
    chatSubmitButton.disabled = false;
  }
});

const radioElements = Array.from(
  document.querySelectorAll("input[type='radio']")
);

var checkboxes = document.querySelectorAll(".service_checkbox");

// Add a "change" event listener to each checkbox
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    // Get the ID of the associated sibling element
    var siblingElementId = checkbox.id.replace("checkbox", "element");
    var siblingElement = document.getElementById(siblingElementId);

    // Check if the checkbox is checked
    if (checkbox.checked) {
      // Add a class to the sibling element when checked
      siblingElement.classList.add("is-active");
    } else {
      // Remove the class from the sibling element when unchecked
      siblingElement.classList.remove("is-active");
    }
  });
});

radioElements.forEach((re) => {
  const radioGroup = re.getAttribute("data-name");
  const relatedRadioElements = Array.from(
    document.querySelectorAll(
      `input[type='radio'][data-name='${escapeQuotesForSelector(radioGroup)}']`
    )
  );
  re.addEventListener("change", () => {
    relatedRadioElements.forEach((el) =>
      el.closest(".form_radio__button")?.classList.remove("is-active")
    );
    re.closest(".form_radio__button")?.classList.add("is-active");
  });
});

function escapeQuotesForSelector(value) {
  return value.replace(/'/g, "\\'").replace(/"/g, '\\"');
}

// Variable to track mute state
let isMuted = false;

// Event listener for the mute button
muteButton.addEventListener("click", () => {
  isMuted = !isMuted; // Toggle mute state

  if (isMuted) {
    window.speechSynthesis.cancel(); // Cancel any ongoing speech
  }
});

const designationCheckboxes = document.querySelectorAll(
  ".designation-checkbox"
);
button7.style.display = "none";
function showButton7() {
  button7.style.display = "inline-block"; // Show the button
}

designationCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      showButton7();
    }
  });
});

const referenceCheckboxes = document.querySelectorAll(".reference-checkbox");
button6.style.display = "none";
function showButton6() {
  button6.style.display = "inline-block"; // Show the button
}

referenceCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      showButton6();
    }
  });
});

const priceCheckboxes = document.querySelectorAll(".price-checkbox");
button5.style.display = "none";
function showButton5() {
  button5.style.display = "inline-block"; // Show the button
}

priceCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      showButton5();
    }
  });
});

const serviceCheckboxes = document.querySelectorAll(".service_checkbox");
button4.style.display = "none";
function showButton4() {
  button4.style.display = "inline-block"; // Show the button
}

serviceCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      showButton4();
    }
  });
});

const selectCheckboxes = document.querySelectorAll(".select-checkbox");
button3.style.display = "none";
function showButton3() {
  button3.style.display = "inline-block"; // Show the button
}

selectCheckboxes.forEach((radio) => {
  radio.addEventListener("change", function () {
    if (this.checked) {
      showButton3();
    }
  });
});

// Initialize the SpeechSynthesisUtterance object
const synth = window.speechSynthesis;

function getVoiceByName(voiceName) {
  const voices = synth.getVoices();
  return voices.find((voice) => voice.name === voiceName);
}

// Function to set the voice for an utterance
function setVoiceForUtterance(utterance, voiceName) {
  const voice = getVoiceByName(voiceName);
  if (voice) {
    utterance.voice = voice;
    console.warn(`Voice '${voiceName}' found.`);
  } else {
    console.warn(`Voice '${voiceName}' not found.`);
  }
}

// Function to read text using text-to-speech
function speakText(textElement) {
  if (!isMuted) {
    const utterance = new SpeechSynthesisUtterance(textElement.textContent);
    utterance.lang = "en-US";
    utterance.rate = 1;
    // Set the voice for the utterance
    setVoiceForUtterance(utterance, "Nicky");
    synth.speak(utterance);
    console.log(window.speechSynthesis.getVoices());
  }
}

// Event listeners for the buttons
button1.addEventListener("click", () => {
  if (!hasCodeRun) {
    window.speechSynthesis.cancel();
    speakText(text1);
  }

  hasCodeRun = true;
});

button2.addEventListener("click", () => {
  window.speechSynthesis.cancel();
  speakText(text2);
});

button3.addEventListener("click", () => {
  if (startProject.checked) {
    window.speechSynthesis.cancel();
    speakText(text3);
  } else if (joinTeam.checked) {
    window.speechSynthesis.cancel();
    speakText(text6);
  } else if (quickWord.checked) {
    window.speechSynthesis.cancel();
    speakText(text7);
  }
});

button4.addEventListener("click", () => {
  window.speechSynthesis.cancel();
  speakText(text4);
});
button5.addEventListener("click", () => {
  window.speechSynthesis.cancel();
  speakText(text5);
});

button6.addEventListener("click", () => {
  window.speechSynthesis.cancel();
  speakText(text7);
});
button7.addEventListener("click", () => {
  window.speechSynthesis.cancel();
  speakText(text5);
});
closeButton.addEventListener("click", () => {
  window.speechSynthesis.cancel();
});

const body = document.body;
let loaded = false;

const onInteraction = () => {
  if (loaded === true) {
    return;
  }
  loaded = true;

  const modelViewer = document.createElement("script");
  modelViewer.type = "module";
  modelViewer.src =
    "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
  body.appendChild(modelViewer);
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
      .to(".dot", 0.1, {
        transformOrigin: "50% 100%",
        yoyo: true,
        scale: 0.8,
        repeat: 1,
      })
      .to(".dot", 0.75, {
        yPercent: -500,
        scaleY: 1.4,
        scaleX: 1,
        ease: Circ.easeOut,
        yoyo: true,
        repeat: 1,
      })
      .to(".dot", 0.75, {
        yPercent: 500,
        scaleY: 1.4,
        scaleX: 1,
        ease: Circ.easeOut,
        yoyo: true,
        repeat: 1,
      })
      .to(".dot", 0.75, {
        yPercent: -250,
        scaleY: 0,
        scaleX: 0,
        ease: Circ.easeOut,
        yoyo: true,
      })
      .to(
        ".loader_logo__wrapper",
        {
          height: 0,
          duration: 1,
          ease: "power4.inOut",
        },
        "<+0.5"
      )
      .to(
        ".loader",
        {
          height: 0,
          duration: 1.5,
          ease: "power4.inOut",
        },
        "<+0.4"
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
          duration: 0.8,
          ease: "power4.easeInOut",
          stagger: { amount: 0.5 },
        });
      }
      if (index < headings.length - 1) {
        tl.to($(this).find(".word"), {
          delay: 5,
          opacity: 0,
          yPercent: -100,
          skewY: -2,
          duration: 0.8,
          ease: "power4.easeInOut",
          stagger: { amount: 0.5 },
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
          duration: 0.8,
          ease: "power4.easeInOut",
          stagger: { amount: 0.5 },
        });
      }
      if (index < headings.length - 1) {
        tl.to($(this).find(".word"), {
          delay: 5,
          opacity: 0,
          yPercent: -100,
          skewY: -2,
          duration: 0.8,
          ease: "power4.easeInOut",
          stagger: { amount: 0.5 },
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
          duration: 0.8,
          ease: "power2.easeOut",
        });
      }
      if (index < images.length - 1) {
        tl.to($(this).find(".hero_img"), {
          delay: 6,
          opacity: 0,
          duration: 0.8,
          ease: "power2.easeOut",
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
      keyboard: true,
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

  var swiperImg = new Swiper(".swiper.case-img", {
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

  window.addEventListener("beforeunload", function (event) {
    // Select the element to hide by its id
    const updotLogo = document.getElementById("updot");

    // Check if the element exists
    if (updotLogo) {
      // Hide the element by setting its display property to "none"
      updotLogo.style.display = "none";
    }
  });

  var swiper = new Swiper(".swiper.insight", {
    speed: 400,
    spaceBetween: 32,
    pagination: {
      el: ".insight-pagination",
      clickable: true,
    },
  });

  $("technology_tab__desktop").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".body");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top top",
        end: "bottom top",
        scrub: 2,
      },
    });
    tl.fromTo(
      targetElement,
      {
        backgroundColor: "#ffffff",
      },
      {
        backgroundColor: "#f8f8f8",
        duration: 1,
      }
    );
  });

  $(".slide-list.case").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".body");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top +40%, top",
        end: "center bottom",
        scrub: 2,
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
    tl.fromTo(
      ".mobile_navbar",
      {
        backgroundColor: "#f8f8f8",
      },
      {
        backgroundColor: "#000000",
        duration: 1,
      },
      "<"
    );
    tl.fromTo(
      ".gray_spacer",
      {
        backgroundColor: "#f8f8f8",
      },
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
  });
});

// Detect different screens.
$(window)
  .resize(function () {
    // Detect the current screen width.
    var width = $(window).width();
    // Determine what you define a as a mobile screen size.
    var mobileScreen = 990;
    // Check whether the condition applies.
    if (width <= mobileScreen) {
      // Change every href attribute of every a element with #
      $(".technology_card").attr("href", "#");
      // You can also hide them, if you want, with
      // $('a').hide();
    } else {
      // Do nothing otherwise,
      // or change the href attribute back to an actual url, using ids.
    }
  })
  .resize(); // Trigger the re-size event on page load.
