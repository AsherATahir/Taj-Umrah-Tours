//Create a sticky nav bar

document.addEventListener('DOMContentLoaded', function() {
    // Reset scroll position to the top
    window.scrollTo(0, 0);
    
    // Sticky navbar logic
    const navbar = document.querySelector('.header');
    
    function stickynavbar() {
        const top = navbar.offsetTop;
        if (window.scrollY >= top) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    }

    // Initial check
    stickynavbar();

    // Add event listener
    window.addEventListener('scroll', stickynavbar);
});

//intersection observer API to add/remove scroll animations

const scrollAnimations = document.querySelectorAll('.fader');

let IntersectionObserver1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('fade');
        }
        else{
            entry.target.classList.remove('fade');
        }
    });
})

scrollAnimations.forEach((elem) => IntersectionObserver1.observe(elem));

//hiding video controls

const video = document.getElementById('video');

video.addEventListener('pause', function() {
  // Hide controls when the video is paused
  video.removeAttribute('controls');
});

video.addEventListener('play', function() {
  // Show controls when the video is playing
  video.setAttribute('controls', 'controls');
});

// Optionally, show controls when hovering over the video
video.addEventListener('mouseenter', function() {
  if (video.paused) {
    video.setAttribute('controls', 'controls');
  }
});

video.addEventListener('mouseleave', function() {
  if (video.paused) {
    video.removeAttribute('controls');
  }
});

//center the scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      const offsetPosition = target.offsetTop - (window.innerHeight / 2) + (target.clientHeight / 2);

      window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});
