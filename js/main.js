// main.js - controls the intro overlay and hero video behavior for index.html
document.addEventListener('DOMContentLoaded', () => {
  const introOverlay = document.getElementById('intro-overlay');
  const enterBtn = document.getElementById('enter-btn');
  const companyName = document.getElementById('company-name');
  const companySlogan = document.getElementById('company-slogan');
  const mainContent = document.getElementById('main-content');

  const HERO_VIDEO_ID = 'hero-video';
  const heroVideo = document.getElementById(HERO_VIDEO_ID);
  const heroFallback = document.getElementById('hero-fallback');

  // Show company name + slogan on load, then after ~3s fade to enter button
  const showEnterAfter = 4000; // ms

  // Use sessionStorage to show intro only once per tab session
  const introShown = sessionStorage.getItem('introShown');

  function revealEnter() {
    companySlogan.classList.add('hidden');
    companyName.classList.add('hidden');
    // show enter button
    enterBtn.classList.remove('hidden');
    enterBtn.focus();
  }

  function hideIntroAndShowSite() {
    // hide overlay visually and enable site content
    introOverlay.classList.add('hidden');
    introOverlay.setAttribute('aria-hidden', 'true');
    mainContent.classList.remove('hidden');
    // play hero video (will play once)
    if (heroVideo) {
      heroVideo.play().catch(() => { /* If blocked, it's fine */ });
      heroVideo.addEventListener('ended', () => {
        heroVideo.classList.add('played');
        heroFallback.style.opacity = '1';
      }, { once: true });
    }
  }

  if (introShown) {
    // Intro already shown this session → skip directly to main content
    introOverlay.classList.add('hidden');
    introOverlay.setAttribute('aria-hidden', 'true');
    mainContent.classList.remove('hidden');
    if (heroVideo) {
      heroVideo.play().catch(() => {});
      heroVideo.addEventListener('ended', () => {
        heroVideo.classList.add('played');
        heroFallback.style.opacity = '1';
      }, { once: true });
    }
  } else {
    // First visit in this session → show intro animation
    introOverlay.classList.remove('hidden');
    mainContent.classList.add('hidden');

    setTimeout(revealEnter, showEnterAfter);

    enterBtn.addEventListener('click', () => {
      hideIntroAndShowSite();
      // mark intro as shown for this session
      sessionStorage.setItem('introShown', 'true');
    });
  }

  // Accessibility: keyboard Enter key triggers button
  enterBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      enterBtn.click();
    }
  });

  // If hero video autoplay is blocked, show fallback
  if (heroVideo) {
    let fallbackTimer = setTimeout(() => {
      if (heroVideo.paused) {
        heroVideo.classList.add('played');
        heroFallback.style.opacity = '1';
      }
    }, 1500);

    heroVideo.addEventListener('playing', () => {
      clearTimeout(fallbackTimer);
    });
  }
});

