// Local fallback data
const localTeamData = [
    {
        id: 0,
        name: "Fallback Team Member",
        position: "Position",
        bio: "Data couldn't be loaded",
        emoji: "❓"
    }
];

/**
 * Fetches team data from JSON file with fallback
 * @returns {Promise<Array>} Team member data
 */
export async function fetchTeamData() {
    try {
        const response = await fetch('../data/team-data.json');
        if (!response.ok) throw new Error("HTTP error");
        return await response.json();
    } catch (error) {
        console.error("Using fallback team data:", error);
        return localTeamData; // Return local fallback
    }
}

/**
 * Filters team by position
 * @param {string} position 
 * @returns {Promise<Array>} Filtered team
 */
export async function getTeamByPosition(position) {
    const team = await fetchTeamData();
    return team.filter(member => 
        member.position.toLowerCase().includes(position.toLowerCase())
    );
}