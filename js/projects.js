// projects.js - lazy loads preview videos and handles hover play + "See Project" button behavior
document.addEventListener('DOMContentLoaded', () => {
  const projectItems = Array.from(document.querySelectorAll('.project-item'));

  projectItems.forEach(item => {
    const video = item.querySelector('.project-preview');
    const thumb = item.querySelector('.thumb');
    const seeBtn = item.querySelector('.see-project-btn');

    // Lazy set src from data-src when needed
    const lazyLoadVideo = () => {
      if (!video) return;
      const dataSrc = video.getAttribute('data-src');
      if (dataSrc && !video.src) {
        const source = document.createElement('source');
        source.src = dataSrc;
        source.type = 'video/mp4';
        video.appendChild(source);
        // set src attr for some browsers
        video.src = dataSrc;
      }
    };

    // play/pause on hover
    item.addEventListener('mouseenter', () => {
      lazyLoadVideo();
      if (video) {
        // play preview muted
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise && playPromise.then) {
          playPromise.catch(() => {
            // autoplay blocked — show nothing disruptive; keep thumbnail visible
          });
        }
      }
    });

    item.addEventListener('mouseleave', () => {
      if (video) {
        try { video.pause(); video.currentTime = 0; } catch(e){}
      }
    });

    // Make the see project anchor behave as a placeholder (open detail or anchor)
    if (seeBtn) {
      seeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Placeholder behavior: for now, show an alert or navigate to anchor
        // Replace with actual project page link later
        const title = item.getAttribute('data-title') || 'Project';
        // Simple modal fallback (alert) — you will replace with project detail page
        alert(`${title} — Project details is update soon.`);
      });
    }

    // Accessibility: keyboard focus triggers hover behaviors
    item.addEventListener('focusin', () => {
      lazyLoadVideo();
      if (video) video.play().catch(()=>{});
    });
    item.addEventListener('focusout', () => {
      if (video) { video.pause(); video.currentTime = 0; }
    });
  });
});
