document.addEventListener('DOMContentLoaded', () => {
    // Menu toggle for mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('show');
        });
    }

    // Dark mode toggle
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }

    // Schedule form handling
    const scheduleForm = document.getElementById('schedule-form');
    if (scheduleForm) {
        scheduleForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('schedule-email').value;
            sendSchedule(email);
        });
    }

    // Function to send schedule
    function sendSchedule(email) {
        const schedule = `
Yoga Studio Class Schedule:
- Monday: Vinyasa Flow, 6:00 PM - 7:00 PM
- Wednesday: Hatha Yoga, 7:00 PM - 8:00 PM
- Friday: Restorative Yoga, 5:30 PM - 6:30 PM
- Sunday: Yin Yoga, 10:00 AM - 11:00 AM
        `;

        // Generate .ics file for calendar
        const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Yoga Studio//Class Schedule//EN
BEGIN:VEVENT
SUMMARY:Vinyasa Flow
DTSTART:20250519T180000
DTEND:20250519T190000
RRULE:FREQ=WEEKLY;BYDAY=MO
LOCATION:Yoga Outdoor Studio, 123 Serenity Lane, Gaborone, Botswana
DESCRIPTION:Vinyasa Flow Yoga Class
END:VEVENT
BEGIN:VEVENT
SUMMARY:Hatha Yoga
DTSTART:20250521T190000
DTEND:20250521T200000
RRULE:FREQ=WEEKLY;BYDAY=WE
LOCATION:Yoga Outdoor Studio, 123 Serenity Lane, Gaborone, Botswana
DESCRIPTION:Hatha Yoga Class
END:VEVENT
BEGIN:VEVENT
SUMMARY:Restorative Yoga
DTSTART:20250523T173000
DTEND:20250523T183000
RRULE:FREQ=WEEKLY;BYDAY=FR
LOCATION:Yoga Outdoor Studio, 123 Serenity Lane, Gaborone, Botswana
DESCRIPTION:Restorative Yoga Class
END:VEVENT
BEGIN:VEVENT