import { fetchPrograms } from './data-fetch.js';

document.addEventListener('DOMContentLoaded', () => {
    // Load programs
    fetchPrograms()
        .then(programs => {
            const programContainer = document.getElementById('programList');
            programContainer.innerHTML = programs.map(program => `
                <div class="card">
                    <h3>${program.name}</h3>
                    <p>${program.description}</p>
                    <p><strong>Beneficiaries:</strong> ${program.beneficiaries}</p>
                    <p><strong>Location:</strong> ${program.location}</p>
                </div>
            `).join('');
        })
        .catch(error => console.error('Error loading programs:', error));

    // Handle form submission
    const donationForm = document.getElementById('donationForm');
    donationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(donationForm);
        const queryString = new URLSearchParams(formData).toString();
        window.location.href = `form-action.html?${queryString}`;
    });

    // Load saved preferences
    const savedAmount = localStorage.getItem('donationAmount');
    if (savedAmount) {
        document.getElementById('amount').value = savedAmount;
    }

    // Save preferences on change
    document.getElementById('amount').addEventListener('change', (e) => {
        localStorage.setItem('donationAmount', e.target.value);
    });
});