// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 800,
    easing: 'ease-in-out-quad',
    once: true
  });

  // Parallax Scene
  const scene = document.querySelector('.parallax-scene');
  if (scene) {
    new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true
    });
  }

  // Magnetic Buttons
  document.querySelectorAll('.magnetic').forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const strength = parseFloat(button.dataset.magneticStrength) || 0.5;
      
      const deltaX = (x - centerX) * strength;
      const deltaY = (y - centerY) * strength;
      
      button.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = '';
    });
  });

  // Typewriter Effect
  const testimonials = [
    { text: "I found my chosen brother in Brazil.", author: "Alex, Canada" },
    { text: "After years of loneliness, I now have a spiritual mother.", author: "Sam, Australia" }
  ];

  let currentTestimonial = 0;
  const typewriterElement = document.getElementById('typewriter-text');
  const authorElement = document.querySelector('.testimonial-author');

  function typeWriter() {
    if (!typewriterElement) return;
    
    const text = testimonials[currentTestimonial].text;
    let i = 0;
    typewriterElement.innerHTML = '';
    
    function typing() {
      if (i < text.length) {
        typewriterElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
      } else {
        authorElement.textContent = testimonials[currentTestimonial].author;
        setTimeout(nextTestimonial, 3000);
      }
    }
    
    typing();
  }

  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    typeWriter();
  }

  typeWriter();

  // Play confetti on CTA click
  document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
      const confetti = document.getElementById('confetti');
      confetti.play();
      setTimeout(() => confetti.stop(), 2000);
    });
  });
});