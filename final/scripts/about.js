// Team Data
        const teamData = [
              {
                id: 1,
                name: "N. Josephine",
                position: "Director of Programs",
                bio: "Josephine oversees all program implementation with expertise in education and community development across three continents.",
                emoji: "👩‍⚕️"
            },
            {
                id: 2,
                name: "Baluku Josephats",
                position: "Founder & CEO",
                bio: "With over 20 years of experience in international development, Baluku founded Hope Foundation to create sustainable solutions to global challenges.",
                emoji: "👨‍💼"
            },
          
            {
                id: 3,
                name: "Amina Diallo",
                position: "Healthcare Coordinator",
                bio: "Amina leads our medical initiatives in West Africa, bringing 15 years of public health experience to the team.",
                emoji: "👩‍⚕️"
            },
            {
                id: 4,
                name: "David Rodriguez",
                position: "Education Specialist",
                bio: "David develops our school curricula and teacher training programs with a focus on digital literacy.",
                emoji: "👨‍🏫"
            },
            {
                id: 5,
                name: "Priya Patel",
                position: "Finance Director",
                bio: "Priya ensures financial transparency and accountability across all our operations worldwide.",
                emoji: "👩‍💻"
            },
            {
                id: 6,
                name: "James Okon",
                position: "Field Operations",
                bio: "James manages our on-the-ground teams in East Africa, coordinating logistics and community partnerships.",
                emoji: "👨‍🔧"
            }
        ];

        // Main App Class
        class AboutPage {
            constructor() {
                this.teamGrid = document.getElementById('teamGrid');
                this.registerBtn = document.getElementById('registerBtn');
                this.ctaRegisterBtn = document.getElementById('ctaRegisterBtn');
                this.registrationModal = document.getElementById('registrationModal');
                this.timelineItems = document.querySelectorAll('.timeline-item');
                
                this.init();
            }

            init() {
                this.renderTeam();
                this.setupEventListeners();
                this.animateTimeline();
                this.setupMobileMenu();
            }

            renderTeam() {
                this.teamGrid.innerHTML = '';
                
                teamData.forEach(member => {
                    const teamCard = document.createElement('div');
                    teamCard.className = 'team-card';
                    
                    teamCard.innerHTML = `
                        <div class="team-image">
                            ${member.emoji}
                        </div>
                        <div class="team-content">
                            <h3 class="team-name">${member.name}</h3>
                            <span class="team-position">${member.position}</span>
                            <p class="team-bio">${member.bio}</p>
                           
                            <div class="social-links">
                          <a href="#" class="social-link">
                         <i class="fab fa-linkedin"></i>
                             </a>
                        <a href="#" class="social-link">
                      <i class="fas fa-envelope"></i>
                         </a>
                        </div>

                        </div>
                    `;
                    
                    this.teamGrid.appendChild(teamCard);
                });
            }

            setupEventListeners() {
                // Registration buttons
                [this.registerBtn, this.ctaRegisterBtn].forEach(btn => {
                    btn?.addEventListener('click', (e) => {
                        e.preventDefault();
                        this.showModal(this.registrationModal);
                    });
                });
                
                // Modal close button
                document.querySelector('.modal .close')?.addEventListener('click', () => {
                    this.hideModal(this.registrationModal);
                });
                
                // Close modal when clicking outside
                window.addEventListener('click', (e) => {
                    if (e.target.classList.contains('modal')) {
                        this.hideModal(e.target);
                    }
                });
                
                // Form submission
                document.getElementById('registrationForm')?.addEventListener('submit', (e) => {
                    this.handleFormSubmission(e);
                });
            }

            animateTimeline() {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                        }
                    });
                }, { threshold: 0.1 });
                
                this.timelineItems.forEach(item => observer.observe(item));
            }

            setupMobileMenu() {
                const hamburger = document.getElementById('hamburger');
                const navLinks = document.querySelector('.nav-links');
                
                hamburger?.addEventListener('click', () => {
                    navLinks.classList.toggle('active');
                    
                    // Animate hamburger icon
                    hamburger.classList.toggle('active');
                });
            }

            showModal(modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }

            hideModal(modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }

            handleFormSubmission(e) {
                e.preventDefault();
                const form = e.target;
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                
                // Show loading state
                submitBtn.textContent = 'Processing...';
                submitBtn.disabled = true;
                
                // Simulate form submission
                setTimeout(() => {
                    // In a real app, you would send the form data to a server here
                    const formData = new FormData(form);
                    const formValues = {};
                    formData.forEach((value, key) => {
                        formValues[key] = value;
                    });
                    
                    console.log('Form submitted:', formValues);
                    
                    // Show success message
                    this.showToast('Thank you for registering! We will contact you soon.');
                    
                    // Reset form and close modal
                    form.reset();
                    this.hideModal(this.registrationModal);
                    
                    // Restore button
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 1500);
            }

            showToast(message, type = 'success') {
                const toast = document.createElement('div');
                toast.textContent = message;
                toast.style.position = 'fixed';
                toast.style.bottom = '20px';
                toast.style.right = '20px';
                toast.style.padding = '15px';
                toast.style.backgroundColor = type === 'success' ? '#4CAF50' : '#f44336';
                toast.style.color = 'white';
                toast.style.borderRadius = '5px';
                toast.style.zIndex = '10000';
                document.body.appendChild(toast);

                setTimeout(() => {
                    toast.remove();
                }, 3000);
            }
        }

        // Initialize the page when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            new AboutPage();
        });

        // Fallback for older browsers
        if (typeof IntersectionObserver === 'undefined') {
            console.log('IntersectionObserver not supported - using fallback');
            
            document.querySelectorAll('.timeline-item').forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 300);
            });
        }