window.addEventListener("wheel", function (dets) {
  if (dets.deltaY > 0) {
    gsap.to(".marque", {
      transform: "translateX(-200%)",
      duration: 4,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".marque i", {
      rotate: 180,
    });
  } else {
    gsap.to(".marque", {
      transform: "translateX(0%)",
      duration: 4,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".marque i", {
      rotate: 0,
    });
  }
});

// logo animation

function breakText() {
  var logo = document.querySelector("#logoText");

  var logoText = logo.textContent;

  var splittedText = logoText.split("");

  var clutter = "";

  var halfValue = Math.floor(splittedText.length / 2);

  splittedText.forEach(function (item, index) {
    if (index < halfValue) {
      clutter += `<span class="firstHalf">${item}</span>`;
    } else {
      clutter += `<span class="secondHalf">${item}</span>`;
    }
  });

  logo.innerHTML = clutter;
}

breakText();

gsap.from("#logoText .firstHalf", {
  y: 80,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.15,
});

gsap.from("#logoText .secondHalf", {
  y: 80,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: -0.15,
});

// end logo animation

let tl = gsap.timeline();

tl.from("nav .logo i, nav .menu h4, nav .menu button", {
  y: -40,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.15,
});

tl.from(".banner-l h2", {
  x: -400,
  opacity: 0,
  duration: 0.5,
});
tl.from(".banner-l p", {
  y: 20,
  opacity: 0,
  duration: 0.5,
});

tl.from(".banner-l button", {
  opacity: 0,
  duration: 0.5,
});

tl.from(
  ".banner-r img",
  {
    x: 20,
    opacity: 0,
    duration: 0.5,
  },
  "-=1.5"
);
