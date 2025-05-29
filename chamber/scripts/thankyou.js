   document.addEventListener('DOMContentLoaded', function() {
      // Get URL parameters
      const urlParams = new URLSearchParams(window.location.search);
      console.log('URL Parameters:', Array.from(urlParams.entries()));
      
      // Display submitted data
      function displayFormData() {
        // Full Name
        document.getElementById('full-name').textContent = 
          urlParams.has('firstName') && urlParams.has('lastName')
            ? `${urlParams.get('firstName')} ${urlParams.get('lastName')}`
            : 'Not provided';
        
        // Email
        document.getElementById('email').textContent = 
          urlParams.get('email') || 'Not provided';
          
        // Phone
        document.getElementById('phone').textContent = 
          urlParams.get('phone') || 'Not provided';
          
        // Business
        document.getElementById('business').textContent = 
          urlParams.get('business') || 'Not provided';
          
        // Membership Level
        const membership = urlParams.get('membership');
        let membershipText = 'Not provided';
        
        if (membership) {
          switch(membership) {
            case 'np': membershipText = 'NP Membership'; break;
            case 'bronze': membershipText = 'Bronze Membership'; break;
            case 'silver': membershipText = 'Silver Membership'; break;
            case 'gold': membershipText = 'Gold Membership'; break;
            default: membershipText = membership;
          }
        }
        document.getElementById('membership').textContent = membershipText;
        
        // Timestamp
        const timestamp = urlParams.get('timestamp');
        document.getElementById('timestamp').textContent = 
          timestamp ? new Date(timestamp).toLocaleString() : 'Not available';
      }

      // Initialize page
      displayFormData();
      
      // Set current year and last modified date
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
    });