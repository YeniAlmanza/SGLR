// === Before and After Image Slider ===
document.querySelectorAll('.image-slider').forEach(slider => {
    const before = slider.querySelector('.before');
    const handle = slider.querySelector('.slider-handle');
  
    let isDragging = false;
  
    const updateSlider = (clientX) => {
      const rect = slider.getBoundingClientRect();
      let x = clientX - rect.left;
      x = Math.max(0, Math.min(x, rect.width));
      const percent = (x / rect.width) * 100;
      before.style.width = percent + '%';
      handle.style.left = percent + '%';
    };
  
    const startDrag = (e) => {
      isDragging = true;
      handle.classList.add('dragging');
      const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
      updateSlider(clientX);
      e.preventDefault();
    };
  
    const drag = (e) => {
      if (!isDragging) return;
      const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
      updateSlider(clientX);
      e.preventDefault();
    };
  
    const stopDrag = (e) => {
      if (!isDragging) return;
      isDragging = false;
      handle.classList.remove('dragging');
      e.preventDefault();
    };
  
    handle.addEventListener('mousedown', startDrag);
    slider.addEventListener('mousedown', startDrag);
    handle.addEventListener('touchstart', startDrag);
    slider.addEventListener('touchstart', startDrag);
  
    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag, { passive: false });
  
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchend', stopDrag);
  });
  
  // === Scroll Reveal Effect ===
  const sections = document.querySelectorAll('.fade-in-section');
  
  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.9;
  
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;
  
      if (
        sectionTop < triggerBottom &&
        sectionBottom > 0 &&
        !section.classList.contains('visible')
      ) {
        section.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
  
  // === Carousel Scroll Functionality ===
  function scrollCarousel(section, direction) {
    const track = document.getElementById(`carousel-${section}`);
    const card = track ? track.querySelector('.service-card') : null;
    if (!card) return;
  
    const cardStyle = window.getComputedStyle(card);
    const cardWidth =
      card.offsetWidth +
      parseFloat(cardStyle.marginRight || 0) +
      parseFloat(cardStyle.marginLeft || 0);
  
    let cardsPerScroll;
    if (window.innerWidth <= 600) {
      cardsPerScroll = 1; // mobile
    } else if (window.innerWidth <= 900) {
      cardsPerScroll = 2; // tablet/small laptop
    } else {
      cardsPerScroll = 4; // desktop
    }
  
    const scrollAmount = cardWidth * cardsPerScroll;
  
    track.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth',
    });
  }
  // === Hamburger Menu Toggle ===
    document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
  
    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
  
      // Close menu when a nav link is clicked
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
          }
        });
      });
    }
  });