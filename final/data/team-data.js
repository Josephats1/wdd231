// team-service.js
export async function fetchTeamData() {
    try {
        const response = await fetch('./data/team-data.json');
        if (!response.ok) throw new Error("Failed to load team data");
        return await response.json();
    } catch (error) {
        console.error("Error loading team data:", error);
        return []; // Return empty array as fallback
    }
}