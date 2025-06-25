const sticky = document.getElementById("header");
const navbar = document.getElementById("navigation");
const navbarDropdown = document.getElementById("navigation-dropdown")
const sentinel = document.createElement('div');
sentinel.style.height = '0px';
sticky.parentNode.insertBefore(sentinel, sticky);

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.intersectionRatio === 0) {
      // Sticky element has detached (is now stuck)
      console.log('Sticky element is now stuck');
      navbar.classList.add('stuck');
      navbarDropdown.classList.add('stuck');
    } else {
      // Sticky element is back in its original position
      console.log('Sticky element is back to normal');
      navbar.classList.remove('stuck');
      navbarDropdown.classList.remove('stuck');
    }
  },
  { threshold: [0, 1] }
);

observer.observe(sentinel);
