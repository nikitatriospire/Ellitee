// --------------Mobile Menu--------------
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const menuList = document.getElementById("menuList");
const bars = menuBtn.querySelectorAll(".bar");
let menuOpen = false;

// match the CSS transition duration (ms)
const TRANSITION_MS = 300;

menuBtn.addEventListener("click", () => {
  menuOpen = !menuOpen;
  menuBtn.setAttribute("aria-expanded", menuOpen);

  // BAR (hamburger -> cross) animation (non-destructive, toggles only the needed classes)
  bars[0].classList.toggle("rotate-45", menuOpen);
  bars[0].classList.toggle("translate-y-[8px]", menuOpen);
  bars[1].classList.toggle("opacity-0", menuOpen);
  bars[2].classList.toggle("-rotate-45", menuOpen);
  bars[2].classList.toggle("-translate-y-[8px]", menuOpen);

  if (menuOpen) {
    document.body.style.overflow = "hidden";

    menu.classList.remove("h-0");
    menu.classList.add("h-screen");

    // Force a reflow so the UL transition always runs (optional but reliable)
    void menuList.offsetWidth;

    // Show UL (fade + translate to 0) and enable pointer events
    menuList.classList.remove("opacity-0", "-translate-y-2", "pointer-events-none");
    menuList.classList.add("opacity-100", "translate-y-0", "pointer-events-auto");
  } else {
    // 🔓 Enable page scroll again
    document.body.style.overflow = "";

    // Close menu: first hide UL (fade out + translate), disable pointer events immediately
    menuList.classList.remove("opacity-100", "translate-y-0", "pointer-events-auto");
    menuList.classList.add("opacity-0", "-translate-y-2", "pointer-events-none");

    // After UL transition finishes, collapse the NAV so no flash
    setTimeout(() => {
      menu.classList.remove("h-screen");
      menu.classList.add("h-0");
    }, TRANSITION_MS);
  }
});

/*-----------------------HOMEPAGE-------------------*/

// Video section with play button
//------------ Play Video ---------------
  document.addEventListener("DOMContentLoaded", function () {
  
  document.querySelectorAll(".video-block video").forEach(function (video) {
    video.removeAttribute("controls");
  });

  document.querySelectorAll(".video-section").forEach(function (section) {
    const playBtn = section.querySelector(".play-btn");
    const video = section.querySelector("video");

    if (!playBtn || !video) return;

    // Play button click
    playBtn.addEventListener("click", function (e) {
      e.preventDefault();
      video.play();
      video.controls = true;
      playBtn.style.visibility = "hidden";
    });

    // Video click to pause
    video.addEventListener("click", function (e) {
      e.preventDefault();
      video.pause();
      video.controls = false;
      if (playBtn) playBtn.style.visibility = "visible";
    });

    // Video ended
    video.addEventListener("ended", function () {
      video.controls = false;
      if (playBtn) playBtn.style.visibility = "visible";
      video.load(); // reset video
    });
  });
});


// Video Section Without Button
document.addEventListener("DOMContentLoaded", function () {

  const videos = document.querySelectorAll(".video-block1 video");

  videos.forEach((video) => {
    video.muted = true;
    video.loop = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("aria-label", "Demonstration video");
    video.removeAttribute("controls");
  });


  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;

        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    },
    {
      threshold: 0.45,
    }
  );

  videos.forEach((video) => {
    observer.observe(video);
  });
});


// Customer Review Slider
const customerSwiperEl = document.querySelector(".customerSwiper");

if (customerSwiperEl) {
  const customerSwiper = new Swiper(".customerSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: { el: ".swiper-pagination", clickable: true },
    autoplay: true,
    speed: 1000,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 24,
        autoplay: { delay: 5000, disableOnInteraction: true },
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
        autoplay: { delay: 5000, disableOnInteraction: true },
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 24,
        autoplay: false,
      }
    }
  });
}

/*-----------------------PRODUCT DETAIL PAGE-------------------*/
// Product-slider
const productSwiperEl = document.querySelector(".productSwiper");

if (productSwiperEl) {
  const productSwiper = new Swiper(".productSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: { el: ".swiper-pagination", clickable: true },
    loop: true,
    autoplay: { delay: 7000, disableOnInteraction: true },
    speed: 1000,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 24,
        autoplay: false,
      }
    }
  });
}
   
//product detail select sizes button
const sizeButtons = document.querySelectorAll(".size-btn");

sizeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    
    // reset all buttons
    sizeButtons.forEach(b => {
      b.classList.remove("bg-black", "text-button-text");
      b.classList.add("bg-white", "text-black");
    });

    // activate clicked one
    btn.classList.add("bg-black", "text-button-text");
    btn.classList.remove("bg-white", "text-black");

    console.log("Selected Size:", btn.dataset.size);
  });
});

