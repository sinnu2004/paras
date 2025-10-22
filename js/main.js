// main.js — fixed autoplay timing for hero video + splash behavior
document.addEventListener("DOMContentLoaded", () => {
  const introOverlay = document.getElementById("intro-overlay");
  const enterBtn = document.getElementById("enter-btn");
  const companyName = document.getElementById("company-name");
  const companySlogan = document.getElementById("company-slogan");
  const mainContent = document.getElementById("main-content");
  const heroVideo = document.getElementById("hero-video");
  const heroFallback = document.getElementById("hero-fallback");

  const showEnterAfter = 4000; // ms
  const introShown = sessionStorage.getItem("introShown");

  function revealEnter() {
    companySlogan.classList.add("hidden");
    companyName.classList.add("hidden");
    enterBtn.classList.remove("hidden");
    enterBtn.focus();
  }

  // 🧠 Robust autoplay helper
  async function playHeroVideo() {
    if (!heroVideo) return;

    // Make absolutely sure video attributes are correct
    heroVideo.muted = true;
    heroVideo.playsInline = true;
    heroVideo.autoplay = true;

    try {
      await heroVideo.play();
      // console.log("✅ Hero video started automatically");
    } catch (err) {
      // console.warn("⚠️ Autoplay blocked, retrying after user interaction");
      const onUserAction = () => {
        heroVideo.play().catch(() => {});
        window.removeEventListener("click", onUserAction);
        window.removeEventListener("keydown", onUserAction);
      };
      window.addEventListener("click", onUserAction, { once: true });
      window.addEventListener("keydown", onUserAction, { once: true });
    }

    heroVideo.addEventListener(
      "ended",
      () => {
        heroVideo.classList.add("played");
        if (heroFallback) heroFallback.style.opacity = "1";
      },
      { once: true }
    );
  }

  function hideIntroAndShowSite() {
    introOverlay.classList.add("hidden");
    introOverlay.setAttribute("aria-hidden", "true");
    mainContent.classList.remove("hidden");

    // Wait for layout + next frame to ensure video is visible
    requestAnimationFrame(() => {
      setTimeout(playHeroVideo, 300);
    });
  }

  // 💡 If intro already shown this session
  if (introShown) {
    introOverlay.classList.add("hidden");
    introOverlay.setAttribute("aria-hidden", "true");
    mainContent.classList.remove("hidden");

    // Delay just a little before autoplay
    requestAnimationFrame(() => {
      setTimeout(playHeroVideo, 250);
    });
  } else {
    // First visit in this session → show intro splash
    introOverlay.classList.remove("hidden");
    mainContent.classList.add("hidden");

    setTimeout(revealEnter, showEnterAfter);

    enterBtn.addEventListener("click", () => {
      hideIntroAndShowSite();
      sessionStorage.setItem("introShown", "true");
    });
  }

  // Accessibility
  enterBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      enterBtn.click();
    }
  });

  // Fallback safety: show background if video never starts
  if (heroVideo) {
    let fallbackTimer = setTimeout(() => {
      if (heroVideo.paused && heroFallback) {
        heroVideo.classList.add("played");
        heroFallback.style.opacity = "1";
      }
    }, 2500);

    heroVideo.addEventListener("playing", () => clearTimeout(fallbackTimer));
  }
});
