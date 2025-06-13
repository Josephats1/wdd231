import { fetchTeamData, searchTeam } from './team-service.js';

class TeamApp {
    constructor() {
        this.init();
        this.setupEventListeners();
    }

    async init() {
        this.renderTeam(await fetchTeamData());
    }

    setupEventListeners() {
        // Loading state events
        document.addEventListener('teamLoading', (e) => {
            document.getElementById('loading').style.display = 
                e.detail ? 'block' : 'none';
        });

        // Error event
        document.addEventListener('teamError', (e) => {
            const errorEl = document.getElementById('error');
            errorEl.textContent = e.detail;
            errorEl.style.display = 'block';
            setTimeout(() => errorEl.style.display = 'none', 5000);
        });

        // Search functionality
        document.getElementById('search').addEventListener('input', async (e) => {
            this.renderTeam(await searchTeam(e.target.value));
        });
    }

    async renderTeam(teamMembers) {
        const container = document.getElementById('team-container');
        
        // Debounce render for better performance
        if (this.renderTimeout) clearTimeout(this.renderTimeout);
        
        this.renderTimeout = setTimeout(() => {
            container.innerHTML = teamMembers.map(member => `
                <div class="team-card" data-id="${member.id}">
                    <div class="emoji">${member.emoji}</div>
                    <h3>${member.name}</h3>
                    <p class="position">${member.position}</p>
                    <p class="bio">${member.bio}</p>
                </div>
            `).join('');
        }, 100);
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => new TeamApp());