   // Set timestamp when page loads
    document.addEventListener('DOMContentLoaded', function() {
      const now = new Date();
      document.getElementById('timestamp').value = now.toISOString();
      
      // Set copyright year
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
      const modals = {
        np: document.getElementById('npModal'),
        bronze: document.getElementById('bronzeModal'),
        silver: document.getElementById('silverModal'),
        gold: document.getElementById('goldModal')
      };
      
      const buttons = {
        np: document.getElementById('npLearnMore'),
        bronze: document.getElementById('bronzeLearnMore'),
        silver: document.getElementById('silverLearnMore'),
        gold: document.getElementById('goldLearnMore')
      };
      
      // Open modal when learn more is clicked
      Object.keys(buttons).forEach(key => {
        buttons[key].addEventListener('click', function(e) {
          e.preventDefault();
          modals[key].style.display = 'block';
        });
      });
      
      // Close modal when X is clicked
      document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
          this.closest('.modal').style.display = 'none';
        });
      });
      
      // Close modal when clicking outside content
      window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
          e.target.style.display = 'none';
        }
      });
      
      // Form validation for business title pattern
      const titleInput = document.getElementById('title');
      titleInput.addEventListener('input', function() {
        const pattern = /^[a-zA-Z\- ]{7,}$/;
        if (this.value && !pattern.test(this.value)) {
          this.setCustomValidity('Please use only letters, hyphens, and spaces (minimum 7 characters)');
        } else {
          this.setCustomValidity('');
        }
      });
    });