// Business hours in Canada (Eastern Time)
const BUSINESS_HOURS = {
    timezone: 'America/Toronto',
    start: '9:00',
    end: '17:00',
    days: 'Monday - Friday'
};

function updateBusinessHours() {
    const hoursElement = document.querySelector('.business-hours');
    if (!hoursElement) return;

    // Parse business hours
    const [startHour, startMinute] = BUSINESS_HOURS.start.split(':').map(Number);
    const [endHour, endMinute] = BUSINESS_HOURS.end.split(':').map(Number);

    // Create Toronto date object
    const torontoFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Toronto',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    });

    // Create today's date
    const now = new Date();
    
    // Set up Toronto business hours
    const torontoStart = new Date(torontoFormatter.format(now));
    torontoStart.setHours(startHour, startMinute, 0);
    
    const torontoEnd = new Date(torontoFormatter.format(now));
    torontoEnd.setHours(endHour, endMinute, 0);

    // Convert to user's local timezone
    const userStart = new Date(torontoStart.toLocaleString('en-US', { timeZone: 'America/Toronto' }));
    const userEnd = new Date(torontoEnd.toLocaleString('en-US', { timeZone: 'America/Toronto' }));

    // Format times for display
    const formatOptions = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    };

    const displayStart = userStart.toLocaleTimeString('en-US', formatOptions);
    const displayEnd = userEnd.toLocaleTimeString('en-US', formatOptions);

    console.log('Toronto time:', torontoFormatter.format(torontoStart), '-', torontoFormatter.format(torontoEnd));
    console.log('Your local time:', displayStart, '-', displayEnd);

    // Create the display text
    const timeDisplay = `${BUSINESS_HOURS.days}: ${displayStart} - ${displayEnd}`;
    
    // Get user's timezone
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const torontoTime = `${BUSINESS_HOURS.start} - ${BUSINESS_HOURS.end} (Toronto time)`;
    const tzInfo = `
        <div>Your timezone: ${userTimezone}</div>
        <div>${torontoTime}</div>
    `;

    // Update the display
    hoursElement.innerHTML = `
        <p class="hours">${timeDisplay}</p>
        <p class="timezone-info">${tzInfo}</p>
    `;

    // Add a class if currently within business hours
    const currentTime = new Date();
    const isBusinessHours = currentTime >= userStart && currentTime <= userEnd;
    hoursElement.classList.toggle('open-now', isBusinessHours);
}

// Update on page load
document.addEventListener('DOMContentLoaded', updateBusinessHours);
