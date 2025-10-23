
document.addEventListener('DOMContentLoaded', () => {
  const projectItems = document.querySelectorAll('.project-item');

  projectItems.forEach(item => {
    const video = item.querySelector('.project-preview');
    const seeBtn = item.querySelector('.see-project-btn');

    // Lazy load video source
    function lazyLoadVideo() {
      if (!video) return;
      const dataSrc = video.getAttribute('data-src');
      if (dataSrc && !video.dataset.loaded) {
        const source = document.createElement('source');
        source.src = dataSrc;
        source.type = 'video/mp4';
        video.appendChild(source);
        video.load(); // load the new source
        video.dataset.loaded = 'true'; // mark as loaded
      }
    }

    // Play/pause on hover
    item.addEventListener('mouseenter', () => {
      lazyLoadVideo();
      if (video) {
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise?.catch) {
          playPromise.catch(() => {
            // Ignore autoplay restrictions silently
          });
        }
      }
    });

    item.addEventListener('mouseleave', () => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });

    // Accessibility: play video when focused
    item.addEventListener('focusin', () => {
      lazyLoadVideo();
      video?.play().catch(() => {});
    });
    item.addEventListener('focusout', () => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });

    // const projectvideo = video.getAttribute('data-src');
    // console.log(projectvideo);
    // // See project button — placeholder action
    // seeBtn?.addEventListener('click', (e) => {
    //   e.preventDefault();
    //   const title = item.dataset.title || 'Project';
    //   window.location.href = 'http://localhost:5500/assets/video/hero-video.mp4';
    // });
  });
});
