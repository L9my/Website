document.addEventListener('DOMContentLoaded', function() {
  
// NAVBAR EFFECT
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

// NAVBAR DROPDOWN MENU

const dropdownContent = document.getElementById('dropdown-content');
const dropdownOpenButton = document.getElementById('dropdown-open-button');
const dropdownCloseButton = document.getElementById('dropdown-close-button');

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

dropdownOpenButton.addEventListener('click', () => {
  dropdownContent.classList.add('dropdown-active');
  console.log("Dropdown Active");
  const scrollbarWidth = getScrollbarWidth();
  dropdownContent.style.paddingRight = `${scrollbarWidth}px`;
  document.body.style.overflow = 'hidden';
});
dropdownCloseButton.addEventListener('click', () => {
  dropdownContent.classList.remove('dropdown-active');
  console.log("Dropdown Not Active");
  document.body.style.overflow = 'auto';
  dropdownContent.style.paddingRight = 'auto';
});

});