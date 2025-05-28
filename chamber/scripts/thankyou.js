    // Parse URL parameters
    function getQueryParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    }

    // Format timestamp
    function formatTimestamp(timestamp) {
      if (!timestamp) return 'N/A';
      const date = new Date(timestamp);
      return date.toLocaleString();
    }

    // Format membership level
    function formatMembership(level) {
      const levels = {
        'np': 'NP Membership (Non-Profit)',
        'bronze': 'Bronze Membership',
        'silver': 'Silver Membership',
        'gold': 'Gold Membership'
      };
      return levels[level] || level;
    }

    // Display form data
    document.addEventListener('DOMContentLoaded', function() {
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

      // Get form data from URL
      const firstName = getQueryParam('firstName') || '';
      const lastName = getQueryParam('lastName') || '';
      const email = getQueryParam('email') || '';
      const phone = getQueryParam('phone') || '';
      const business = getQueryParam('business') || '';
      const membership = getQueryParam('membership') || '';
      const timestamp = getQueryParam('timestamp') || '';

      // Display the data
      document.getElementById('full-name').textContent = `${firstName} ${lastName}`;
      document.getElementById('email').textContent = email;
      document.getElementById('phone').textContent = phone;
      document.getElementById('business').textContent = business;
      document.getElementById('membership').textContent = formatMembership(membership);
      document.getElementById('timestamp').textContent = formatTimestamp(timestamp);
    });