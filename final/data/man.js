// For JSON file approach
import teamData from './team-data.json' assert { type: 'json' };

// For JS module approach
// import { teamData } from './team-data.js';

// For API approach
// import { fetchTeamData } from './api-service.js';
// const teamData = await fetchTeamData();

function renderTeam(containerId = 'team-container') {
  const container = document.getElementById(containerId);
  
  if (!teamData.length) {
    container.innerHTML = '<p>No team data available</p>';
    return;
  }

  container.innerHTML = teamData.map(member => `
    <div class="team-card">
      <div class="card-header">
        <div class="emoji">${member.emoji}</div>
        <h3>${member.name}</h3>
        <div class="position">${member.position}</div>
      </div>
      <div class="card-body">
        <p>${member.bio}</p>
      </div>
    </div>
  `).join('');
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', renderTeam);