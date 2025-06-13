export async function fetchTeamData() {
  try {
    const response = await fetch('https://your-api.com/team-members');
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching team data:', error);
    return []; // Return empty array as fallback
  }
}