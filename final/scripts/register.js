 // In your registration.js file
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        // Close mobile menu when a link is clicked
        document.querySelector('.nav-links').classList.remove('active');
        document.querySelector('.hamburger').classList.remove('active');
    });
});
        class RegistrationForm {
            constructor() {
                this.currentStep = 1;
                this.totalSteps = 4;
                this.formData = {};
                this.hamburger = document.getElementById('hamburger');
                this.navLinks = document.querySelector('.nav-links');
                
                this.init();
            }
            
            init() {
                this.setupEventListeners();
                this.updateProgressBar();
                this.setupMobileMenu();
            }
            
            setupEventListeners() {
                // Navigation between steps
                document.querySelectorAll('.next-step').forEach(btn => {
                    btn.addEventListener('click', () => this.nextStep());
                });
                
                document.querySelectorAll('.prev-step').forEach(btn => {
                    btn.addEventListener('click', () => this.prevStep());
                });
                
                // Edit summary items
                document.querySelectorAll('.summary-edit').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const stepToGo = parseInt(e.target.dataset.step);
                        this.goToStep(stepToGo);
                    });
                });
                
                // Form submission
                document.getElementById('submitForm').addEventListener('click', () => this.submitForm());
                
                // Show/hide organization field based on registration type
                document.querySelectorAll('input[name="registrationType"]').forEach(radio => {
                    radio.addEventListener('change', (e) => {
                        const orgField = document.getElementById('organizationField');
                        if (e.target.value === 'partner') {
                            orgField.style.display = 'block';
                            document.getElementById('organizationName').required = true;
                        } else {
                            orgField.style.display = 'none';
                            document.getElementById('organizationName').required = false;
                        }
                    });
                });
                
                // Real-time validation
                document.querySelectorAll('.form-control').forEach(input => {
                    input.addEventListener('blur', () => this.validateField(input));
                });
            }
            
            setupMobileMenu() {
                this.hamburger?.addEventListener('click', () => {
                    this.navLinks.classList.toggle('active');
                    this.hamburger.classList.toggle('active');
                });
            }
            
            nextStep() {
                if (!this.validateStep(this.currentStep)) return;
                
                this.saveStepData(this.currentStep);
                this.currentStep++;
                this.updateFormDisplay();
                this.updateProgressBar();
            }
            
            prevStep() {
                this.currentStep--;
                this.updateFormDisplay();
                this.updateProgressBar();
            }
            
            goToStep(step) {
                if (step < 1 || step > this.totalSteps) return;
                
                this.currentStep = step;
                this.updateFormDisplay();
                this.updateProgressBar();
            }
            
            updateFormDisplay() {
                // Hide all steps
                document.querySelectorAll('.form-step').forEach(step => {
                    step.classList.remove('active');
                });
                
                // Show current step
                document.querySelector(`.form-step[data-step="${this.currentStep}"]`).classList.add('active');
                
                // Update progress steps
                document.querySelectorAll('.progress-step').forEach(step => {
                    const stepNum = parseInt(step.dataset.step);
                    
                    step.classList.remove('active', 'completed');
                    
                    if (stepNum < this.currentStep) {
                        step.classList.add('completed');
                    } else if (stepNum === this.currentStep) {
                        step.classList.add('active');
                    }
                });
                
                // Scroll to top of form
                document.querySelector('.form-body').scrollTo(0, 0);
            }
            
            updateProgressBar() {
                const progress = ((this.currentStep - 1) / (this.totalSteps - 1)) * 100;
                document.getElementById('progressBar').style.width = `${progress}%`;
            }
            
            validateStep(step) {
                let isValid = true;
                
                // Validate required fields in current step
                const stepEl = document.querySelector(`.form-step[data-step="${step}"]`);
                const requiredInputs = stepEl.querySelectorAll('.required');
                
                requiredInputs.forEach(input => {
                    if (input.tagName === 'LABEL') {
                        // Handle checkbox/radio groups
                        const inputId = input.getAttribute('for');
                        if (inputId) {
                            const inputEl = document.getElementById(inputId);
                            if (inputEl && inputEl.required) {
                                if (inputEl.type === 'checkbox' || inputEl.type === 'radio') {
                                    const groupName = inputEl.name;
                                    const checked = stepEl.querySelector(`input[name="${groupName}"]:checked`);
                                    if (!checked) {
                                        isValid = false;
                                        this.showError(input, 'This field is required');
                                    }
                                }
                            }
                        }
                    } else {
                        // Handle regular inputs
                        if (input.required && !input.value.trim()) {
                            isValid = false;
                            this.showError(input, 'This field is required');
                        }
                    }
                });
                
                // Special validation for password match
                if (step === 2) {
                    const password = document.getElementById('password').value;
                    const confirmPassword = document.getElementById('confirmPassword').value;
                    
                    if (password.length < 8) {
                        isValid = false;
                        this.showError(document.getElementById('password'), 'Password must be at least 8 characters');
                    }
                    
                    if (password !== confirmPassword) {
                        isValid = false;
                        this.showError(document.getElementById('confirmPassword'), 'Passwords do not match');
                    }
                }
                
                // Special validation for terms agreement
                if (step === 4 && !document.getElementById('termsAgree').checked) {
                    isValid = false;
                    this.showError(document.getElementById('termsAgree'), 'You must agree to the terms');
                }
                
                return isValid;
            }
            
            validateField(input) {
                if (!input.required) return true;
                
                let isValid = true;
                let errorMessage = 'This field is required';
                
                if (input.id === 'email' && !this.validateEmail(input.value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid email address';
                } else if (input.id === 'password' && input.value.length < 8) {
                    isValid = false;
                    errorMessage = 'Password must be at least 8 characters';
                } else if (input.id === 'confirmPassword') {
                    const password = document.getElementById('password').value;
                    if (input.value !== password) {
                        isValid = false;
                        errorMessage = 'Passwords do not match';
                    }
                } else if (input.value.trim() === '') {
                    isValid = false;
                }
                
                if (!isValid) {
                    this.showError(input, errorMessage);
                } else {
                    this.clearError(input);
                }
                
                return isValid;
            }
            
            showError(input, message) {
                const formGroup = input.closest('.form-group');
                if (!formGroup) return;
                
                formGroup.classList.add('error');
                const errorEl = formGroup.querySelector('.error-message');
                if (errorEl) {
                    errorEl.textContent = message;
                    errorEl.style.display = 'block';
                }
                
                input.classList.add('error');
            }
            
            clearError(input) {
                const formGroup = input.closest('.form-group');
                if (!formGroup) return;
                
                formGroup.classList.remove('error');
                const errorEl = formGroup.querySelector('.error-message');
                if (errorEl) {
                    errorEl.style.display = 'none';
                }
                
                input.classList.remove('error');
            }
            
            validateEmail(email) {
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return re.test(email);
            }
            
            saveStepData(step) {
                const stepEl = document.querySelector(`.form-step[data-step="${step}"]`);
                
                // Save all input values
                const inputs = stepEl.querySelectorAll('input, select, textarea');
                inputs.forEach(input => {
                    if (input.type === 'checkbox' || input.type === 'radio') {
                        if (input.checked) {
                            if (!this.formData[input.name]) {
                                this.formData[input.name] = [];
                            }
                            this.formData[input.name].push(input.value);
                        }
                    } else {
                        this.formData[input.id] = input.value;
                    }
                });
                
                // Update summary if we're on the review step
                if (this.currentStep === this.totalSteps - 1) {
                    this.updateSummary();
                }
            }
            
            updateSummary() {
                // Personal Information Summary
                let personalHtml = `
                    <p><strong>Name:</strong> ${this.formData['firstName']} ${this.formData['lastName']}</p>
                    <p><strong>Email:</strong> ${this.formData['email']}</p>
                `;
                
                if (this.formData['phone']) {
                    personalHtml += `<p><strong>Phone:</strong> ${this.formData['phone']}</p>`;
                }
                
                if (this.formData['dob']) {
                    personalHtml += `<p><strong>Date of Birth:</strong> ${new Date(this.formData['dob']).toLocaleDateString()}</p>`;
                }
                
                if (this.formData['gender']) {
                    personalHtml += `<p><strong>Gender:</strong> ${this.formData['gender']}</p>`;
                }
                
                document.getElementById('personalSummary').innerHTML = personalHtml;
                
                // Account Details Summary
                let accountHtml = `
                    <p><strong>Username:</strong> ${this.formData['username']}</p>
                    <p><strong>Registration Type:</strong> ${this.formData['registrationType']}</p>
                `;
                
                if (this.formData['registrationType'] === 'partner' && this.formData['organizationName']) {
                    accountHtml += `<p><strong>Organization:</strong> ${this.formData['organizationName']}</p>`;
                }
                
                if (this.formData['referralSource']) {
                    accountHtml += `<p><strong>How you heard about us:</strong> ${this.formData['referralSource']}</p>`;
                }
                
                document.getElementById('accountSummary').innerHTML = accountHtml;
                
                // Interests Summary
                let interestsHtml = '';
                
                if (this.formData['programInterests'] && this.formData['programInterests'].length > 0) {
                    interestsHtml += `<p><strong>Program Interests:</strong> ${this.formData['programInterests'].join(', ')}</p>`;
                }
                
                if (this.formData['availability']) {
                    interestsHtml += `<p><strong>Availability:</strong> ${this.formData['availability'][0]}</p>`;
                }
                
                if (this.formData['commitment']) {
                    interestsHtml += `<p><strong>Commitment Duration:</strong> ${this.formData['commitment']}</p>`;
                }
                
                if (this.formData['skills']) {
                    interestsHtml += `<p><strong>Skills:</strong> ${this.formData['skills']}</p>`;
                }
                
                document.getElementById('interestsSummary').innerHTML = interestsHtml;
            }
            
            submitForm() {
                if (!this.validateStep(this.currentStep)) return;
                
                // Show loading state
                const submitBtn = document.getElementById('submitForm');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Processing...';
                submitBtn.disabled = true;
                
                // In a real application, you would send the data to a server here
                setTimeout(() => {
                    console.log('Form submitted:', this.formData);
                    
                    // Hide form and show success message
                    document.querySelector('.form-step.active').style.display = 'none';
                    document.querySelector('.success-message').style.display = 'block';
                    
                    // Scroll to top of form
                    document.querySelector('.form-body').scrollTo(0, 0);
                    
                    // Reset button (though it's hidden now)
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 1500);
            }
        }
        
        // Initialize the form when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            new RegistrationForm();
        });