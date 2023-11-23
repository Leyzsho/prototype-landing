export default function setSmoothScrollForAnchorLinks() {
  document.querySelectorAll('a[data-anchor-link]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const href = event.currentTarget.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const topOffset = 0;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  });
}
