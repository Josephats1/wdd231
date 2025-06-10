// Simulated API fetch from local JSON
export async function fetchImpactData() {
    try {
        const response = await fetch('data/impact.json');
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching impact data:', error);
        return [];
    }
}

export async function fetchStories() {
    try {
        const response = await fetch('data/stories.json');
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching stories:', error);
        return [];
    }
}