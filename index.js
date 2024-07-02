document.addEventListener('DOMContentLoaded', () => {
    const updateTimeAndDay = () => {
        const now = new Date();

        // Get UTC time components
        const hours = now.getUTCHours().toString().padStart(2, '0');
        const minutes = now.getUTCMinutes().toString().padStart(2, '0');
        const seconds = now.getUTCSeconds().toString().padStart(2, '0');
        const currentTimeUTC = `${hours}:${minutes}:${seconds}`;

        // Get UTC day of the week
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDay = daysOfWeek[now.getUTCDay()];

        // Debugging output
        console.log(`UTC Time: ${currentTimeUTC}`);
        console.log(`UTC Day: ${currentDay}`);
        
        // Update the HTML content
        document.getElementById('currentTimeUTC').textContent = currentTimeUTC;
        document.getElementById('currentDay').textContent = currentDay;
    };

    updateTimeAndDay(); // Initial call to display time and day immediately
    setInterval(updateTimeAndDay, 1000); // Update every second
});
