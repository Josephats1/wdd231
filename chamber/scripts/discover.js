  // NAVIGATION - Mobile Toggle
function toggleMobileNav() {
  document.getElementById("mobileNav").classList.toggle("show");
}

// THEME TOGGLE - Dark/Light Mode
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  
  // Initialize theme from localStorage
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    updateThemeIcon(true);
  }
  
  // Toggle theme on button click
  themeToggle.addEventListener('click', function() {
    const isDarkMode = !document.body.classList.contains('dark-mode');
    document.body.classList.toggle('dark-mode');
    
    // Update icon and save preference
    updateThemeIcon(isDarkMode);
    localStorage.setItem('darkMode', isDarkMode);
  });
  
  // Function to update the theme icon
  function updateThemeIcon(isDarkMode) {
    const icon = themeToggle.querySelector("i");
    if (isDarkMode) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  }
});
//WAY FINDER
const links = document.querySelectorAll('.desktop-nav a, .mobile-nav a');
  const currentPath = window.location.pathname;

  links.forEach(link => {
    if (link.getAttribute('href') === currentPath.split('/').pop()) {
      link.classList.add('active');
    }
  });
     // Visit tracking system
    document.addEventListener('DOMContentLoaded', function() {
      // Visit message functionality
      const visitMessage = document.getElementById('visitMessage');
      const lastVisitKey = 'masaka_chamber_last_visit';
      const lastVisitValue = localStorage.getItem(lastVisitKey);
      const now = new Date();
      
      if (!lastVisitValue) {
        // First visit
        visitMessage.textContent = 'Welcome! Let us know if you have any questions.';
      } else {
        const lastVisit = new Date(parseInt(lastVisitValue));
        const timeDiff = now - lastVisit;
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        
        if (daysDiff < 1) {
          visitMessage.textContent = 'Back so soon! Awesome!';
        } else {
          const dayText = daysDiff === 1 ? 'day' : 'days';
          visitMessage.textContent = `You last visited ${daysDiff} ${dayText} ago.`;
        }
      }
      
      // Store current visit time
      localStorage.setItem(lastVisitKey, now.getTime().toString());
      
      // Christmas countdown functionality
      const daysUntilChristmasElement = document.getElementById('daysUntilChristmas');
      const msPerDay = 86400000; // milliseconds per day
      const today = new Date();
      let christmasDate = new Date(today.getFullYear(), 11, 25); // December 25 (month is 0-indexed)
      
      // If Christmas has passed this year, use next year's date
      if (today.getMonth() === 11 && today.getDate() > 25) {
        christmasDate.setFullYear(christmasDate.getFullYear() + 1);
      }
      
      // Calculate days remaining
      const daysLeft = Math.ceil((christmasDate.getTime() - today.getTime()) / msPerDay);
      daysUntilChristmasElement.textContent = daysLeft;
      
      console.log('System initialized:', {
        lastVisit: localStorage.getItem(lastVisitKey),
        daysUntilChristmas: daysLeft
      });
    });
    const businesses = [
      {
        "id": 1,
        "name": "Masaka Farm Supplies",
        "address": "12 Kampala Road, Masaka",
        "description": "Your one-stop shop for quality farming equipment, seeds, and fertilizers. Serving Masaka's agricultural community since 2010.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBIqxCSdnSVd5u2A0P9pMLcXTkk3lNr6iksg&s",
        "category": "agriculture",
        "buttonText": "Shop Now",
        "buttonIcon": "shopping-cart"
      },
      {
        "id": 2,
        "name": "Lakeview Resort",
        "address": "Shore of Lake Nabugabo, Masaka",
        "description": "Luxury accommodation with stunning lake views. Perfect for weddings, conferences, and weekend getaways.",
        "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        "category": "hospitality",
        "buttonText": "Book Stay",
        "buttonIcon": "bed"
      },
      {
        "id": 3,
        "name": "Masaka Market Vendors",
        "address": "Main Market, City Square",
        "description": "Vibrant local market offering fresh produce, clothing, and household goods. The heart of Masaka's retail economy.",
        "image": "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        "category": "retail",
        "buttonText": "Visit Market",
        "buttonIcon": "store"
      },
      {
        "id": 4,
        "name": "St. Henry's College",
        "address": "25 Bishop's Road, Masaka",
        "description": "Premiere secondary education institution with excellent academic and sports programs. Alumni include national leaders.",
        "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        "category": "education",
        "buttonText": "Enquire",
        "buttonIcon": "graduation-cap"
      },
      {
        "id": 5,
        "name": "Masaka Regional Hospital",
        "address": "5 Health Center Drive",
        "description": "Full-service medical facility serving greater Masaka region. Specialties include maternity and pediatric care.",
        "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        "category": "health",
        "buttonText": "Contact",
        "buttonIcon": "hospital"
      },
      {
        "id": 6,
        "name": "Tech Solutions Uganda",
        "address": "14 Innovation Hub, Masaka",
        "description": "IT services, computer repairs, and software development. Helping local businesses go digital.",
        "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        "category": "technology",
        "buttonText": "Get Quote",
        "buttonIcon": "laptop-code"
      },
      {
        "id": 7,
        "name": "Kooki Organic Coffee",
        "address": "8 Farm Lane, Kooki",
        "description": "Specialty coffee growers producing premium organic coffee beans for export and local markets.",
        "image": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        "category": "agriculture",
        "buttonText": "Buy Coffee",
        "buttonIcon": "coffee"
      },
      {
        "id": 8,
        "name": "Nalongo Boutique",
        "address": "33 Independence Street",
        "description": "Fashion boutique offering modern and traditional Ugandan clothing. Custom tailoring available.",
        "image": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
        "category": "retail",
        "buttonText": "View Collection",
        "buttonIcon": "tshirt"
      }
    ];

    const container = document.getElementById('gallery-container');
    
    businesses.forEach((business, index) => {
      const card = document.createElement('article');
      card.className = `card ${business.category}`;
      
      // Create image with explicit width and height attributes
      const img = new Image();
      img.src = business.image;
      img.alt = business.name;
      img.width = 600;
      img.height = 400;
      img.loading = 'lazy';
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'cover';
      
      const figure = document.createElement('figure');
      figure.appendChild(img);
      
      card.innerHTML = `
        <h2>${business.name}</h2>
        <span class="business-type">${business.category.charAt(0).toUpperCase() + business.category.slice(1)}</span>
        <address><i class="fas fa-map-marker-alt"></i> ${business.address}</address>
        <p>${business.description}</p>
        <button><i class="fas fa-${business.buttonIcon}"></i> ${business.buttonText}</button>
      `;
      
      // Insert figure at the correct position
      if (window.matchMedia('(max-width: 640px)').matches) {
        card.insertBefore(figure, card.children[2]); // After business type
      } else {
        card.insertBefore(figure, card.firstChild);
      }
      
      container.appendChild(card);
      
      // Add neomorphism to every 3rd card (index 2, 5, etc.)
      if ((index + 1) % 3 === 0) {
        card.classList.add('neo-card');
      }
    });

     // Update dates automatically, FOOTER SECTION
    document.addEventListener('DOMContentLoaded', function() {
      // Set copyright year
      const currentYear = new Date().getFullYear();
      document.getElementById('copyright-year').textContent = currentYear;
      document.getElementById('current-year').textContent = currentYear;
      
      // Set last modified date
      document.getElementById('last-modified').textContent = document.lastModified;
    });
