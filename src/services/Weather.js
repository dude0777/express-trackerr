export async function getWeather(lat, lng) {
    try {
        const apiUrl = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}
