document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');

  if (burger && navLinks) {
    burger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }
});
