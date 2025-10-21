// common-nav.js - shared navigation + hamburger behavior on all pages
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButtons = document.querySelectorAll('.hamburger');
  hamburgerButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const controls = btn.getAttribute('aria-controls');
      if (!controls) return;
      const nav = document.getElementById(controls);
      if (!nav) return;
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('show');
    });
  });

  // Close nav when clicking outside on mobile
  document.addEventListener('click', (e) => {
    const openNav = document.querySelector('.nav-links.show');
    if (!openNav) return;
    const isInside = openNav.contains(e.target) || e.target.closest('.hamburger');
    if (!isInside) {
      openNav.classList.remove('show');
      const relatedBtn = document.querySelector(`.hamburger[aria-controls="${openNav.id}"]`);
      if (relatedBtn) relatedBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // set footer year if present
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
