document.addEventListener('DOMContentLoaded', function() {
  // Set timestamp
  document.getElementById('timestamp').value = new Date().toISOString();
  
  // Set copyright year and last modified
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
  const modals = document.querySelectorAll('.modal');
  const learnMoreButtons = document.querySelectorAll('.learn-more');
  const closeButtons = document.querySelectorAll('.close');

  // Set ARIA attributes for accessibility
  learnMoreButtons.forEach(button => {
    button.setAttribute('aria-haspopup', 'dialog');
    button.setAttribute('aria-expanded', 'false');
  });

  // Handle Learn More button clicks
  learnMoreButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const modalId = this.getAttribute('href').substring(1);
      const modal = document.getElementById(modalId);
      
      // Show the modal
      modal.style.display = 'block';
      this.setAttribute('aria-expanded', 'true');
      
      // Focus on the modal's heading for accessibility
      modal.querySelector('h2').setAttribute('tabindex', '-1');
      modal.querySelector('h2').focus();
      
      // Prevent background scrolling
      document.body.style.overflow = 'hidden';
    });
  });

  // Handle Close button clicks
  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const modal = this.closest('.modal');
      modal.style.display = 'none';
      
      // Return focus to the Learn More button
      const opener = document.querySelector(`[href="#${modal.id}"]`);
      opener.setAttribute('aria-expanded', 'false');
      opener.focus();
      
      // Restore background scrolling
      document.body.style.overflow = '';
    });
  });

  // Close modal when clicking outside content
  window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
      document.body.style.overflow = '';
      
      // Update ARIA attributes
      const opener = document.querySelector(`[href="#${e.target.id}"]`);
      if (opener) opener.setAttribute('aria-expanded', 'false');
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal').forEach(modal => {
        if (modal.style.display === 'block') {
          modal.style.display = 'none';
          document.body.style.overflow = '';
          
          // Update ARIA attributes
          const opener = document.querySelector(`[href="#${modal.id}"]`);
          if (opener) opener.setAttribute('aria-expanded', 'false');
        }
      });
    }
  });

  // Form validation for business title
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