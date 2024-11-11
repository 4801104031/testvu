document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      });
  });

  // Navbar toggle for mobile
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarMenu = document.getElementById('ittel-main-menu');
  if (navbarToggler && navbarMenu) {
      navbarToggler.addEventListener('click', function () {
          navbarMenu.classList.toggle('show');
      });
  }

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
      window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
              navbar.classList.add('scrolled');
          } else {
              navbar.classList.remove('scrolled');
          }
      });
  }

  // Fade-in effect for feature items
  const fadeElems = document.querySelectorAll('.fade-in');
  const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, { threshold: 0.1 });

  fadeElems.forEach(elem => fadeInObserver.observe(elem));

  // Typewriter effect
  const typewriter = document.querySelector('.typewrite');
  if (typewriter) {
      const words = JSON.parse(typewriter.getAttribute('data-type'));
      let wordIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      function type() {
          const currentWord = words[wordIndex];
          const speed = isDeleting ? 30 : 100;

          if (!isDeleting && charIndex < currentWord.length) {
              typewriter.textContent += currentWord.charAt(charIndex);
              charIndex++;
          } else if (isDeleting && charIndex > 0) {
              typewriter.textContent = currentWord.substring(0, charIndex - 1);
              charIndex--;
          } else {
              isDeleting = !isDeleting;
              if (!isDeleting) {
                  wordIndex = (wordIndex + 1) % words.length;
              }
          }

          setTimeout(type, speed);
      }

      type();
  }

  // Form validation
  const registerForm = document.querySelector('form');
  if (registerForm) {
      registerForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          if (name && email) {
              alert('Đăng ký thành công!');
              registerForm.reset();
          } else {
              alert('Vui lòng điền đầy đủ thông tin!');
          }
      });
  }

  // Image error handling
  const images = document.querySelectorAll('.feature-item img');
  images.forEach(img => {
      img.addEventListener('error', function() {
          console.log('Image failed to load:', img.src);
          img.src = 'assets/images/placeholder.jpg';
      });
  });

  // Feature items animation
  const featureItems = document.querySelectorAll('.feature-item');
  featureItems.forEach((item, index) => {
      setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
      }, index * 200);
  });
});

console.log('Main JavaScript file loaded successfully.');