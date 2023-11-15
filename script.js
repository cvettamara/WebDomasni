// Basic example for smooth scrolling
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navigation a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetUrl = this.getAttribute('href');
        window.location.href = targetUrl;
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const categoryImages = document.querySelectorAll('.category img');
  
    categoryImages.forEach(image => {
      image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
      });
  
      image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
      });
    });
  });