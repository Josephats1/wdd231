document.addEventListener('DOMContentLoaded', function() {
  // Set form timestamp
  document.getElementById('timestamp').value = new Date().toISOString();
  
  // Set footer dates
  document.getElementById('copyright-year').textContent = new Date().getFullYear();
  document.getElementById('last-modified').textContent = document.lastModified;
  
  // Mobile nav toggle
  document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('mobile-nav').classList.toggle('show');
  });
  
  // Dark mode toggle
  document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });

  // Modal functionality
  const learnMoreButtons = document.querySelectorAll('.learn-more');
  const closeButtons = document.querySelectorAll('.close');

  learnMoreButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const modalId = this.getAttribute('href').substring(1);
      document.getElementById(modalId).style.display = 'block';
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      this.closest('.modal').style.display = 'none';
    });
  });

  // Form validation
  const titleInput = document.getElementById('title');
  if (titleInput) {
    titleInput.addEventListener('input', function() {
      const pattern = /^[a-zA-Z\- ]{7,}$/;
      if (this.value && !pattern.test(this.value)) {
        this.setCustomValidity('Please use only letters, hyphens, and spaces (minimum 7 characters)');
      } else {
        this.setCustomValidity('');
      }
    });
  }
});