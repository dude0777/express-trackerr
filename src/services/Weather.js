export async function getweather() {
    try {
        const response = await fetch("https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&callback=mycallback");
        const text = await response.text();
        const jsonString = text.replace(/^mycallback\(/, '').replace(/\);$/, '');
        const data = JSON.parse(jsonString);
        return data;
    } catch (error) {
        throw error;
    }
}
