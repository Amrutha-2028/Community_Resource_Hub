console.log("JS LOADED");
const monthYear = document.getElementById("month-year");
const calendarGrid = document.getElementById("calendar-grid");
let currentDate = new Date();
const events = [
    // HOLIDAYS (block repeating events)
    { year: 2025, month: 11, day: 24, title: "Christmas Eve", time: "All Day", location: "With the ones you love!", category: "holiday", details: "Prepare your presents!", block: true },
    { year: 2025, month: 11, day: 25, title: "Christmas", time: "All Day", location: "With the ones you love!", category: "holiday", details: "Enjoy with family!", block: true },
    { year: 2025, month: 11, day: 31, title: "New Year's Eve", time: "All Day", location: "With the ones you love!", category: "holiday", details: "Say goodbye to 2025!", block: true },
    { year: 2026, month: 0, day: 1, title: "New Year's Day", time: "All Day", location: "With the ones you love!", category: "holiday", details: "Welcome 2026!", block: true },

    // WEEKLY EVENTS
    { repeat: "weekly", weekday: 3, time: "10:00 AM - 11:00 AM", location: "Blossoms Library", title: "Story Time", image: "https://www.rockspringslibrary.com/sites/www.rockspringslibrary.com/files/images/events/1.31.18.jpg", category: "read", details: "A fun weekly story time for toddlers with singing and dancing" },
    { repeat: "weekly", weekday: 3, time: "11:00 AM - 4:00 PM", location: "Blossoms Park", title: "Food Drive", image: "https://foodshare.com/wp-content/uploads/2024/01/food-drives-3.jpg", category: "food-drive", details: "Pack food trays for ones in need all day" },
    { repeat: "weekly", weekday: 1, time: "2:00 PM - 4:00 PM", location: "Blossoms City Hall", title: "Community Meeting", image: "https://www.cityofgreen.org/ImageRepository/Document?documentID=366", category: "meeting", details: "Planning meeting at 5PM for the upcoming festivals and events" },
    { repeat: "weekly", weekday: 6, time: "2:00 AM - 4:00 PM", location: "Blossoms City Hall", title: "Environmental Board Meeting", image: "https://www.cityofgreen.org/ImageRepository/Document?documentID=366", category: "meeting", details: "City hall at 3PM to discuss cleanups and making the community a better place" },

    // MONTHLY EVENTS
    { repeat: "monthly", day: 2, time: "11:00 AM - 4:00 PM", location: "Blossoms Park", title: "Cleanup at Blossoms", image: "https://www.dixonpilot.com/wp-content/uploads/2021/09/BExDE5S8ccd4NJailCsxED4r6F8sRIA51632313995.jpg", category: "cleanup", details: "Cleanup at 3PM" },
    { repeat: "monthly", day: 26, time: "11:00 AM - 4:00 PM", location: "Blossoms Park", title: "Cleanup at Blossoms", image: "https://www.dixonpilot.com/wp-content/uploads/2021/09/BExDE5S8ccd4NJailCsxED4r6F8sRIA51632313995.jpg", category: "cleanup", details: "Cleanup at 3PM" },

    // ANNUAL EVENTS
    { repeat: "yearly", month: 11, day: 28, time: "11:00 AM - 5:00 PM", location: "Blossoms Park", title: "Winter Wonderland", image: "https://www.japan-guide.com/g18/5311_01.jpg", category: "holiday", details: "Have a great time at Blossoms Park from 10AM to 5PM by doing fun activities and awesome food vendors!", block: true },
    { repeat: "yearly", month: 9, day: 31, time: " 4:00 PM - 6:00 PM", location: "Blossoms Park", title: "Halloween", image: "https://i.guim.co.uk/img/media/7e9a77ccf74ce14278bc8354fc243141adea813d/0_119_5600_3360/master/5600.jpg?width=620&dpr=1&s=none&crop=none", category: "holiday", details: "Trick or treat!", block: true },
    { repeat: "yearly", month: 0, day: 13, time: " 10:00 AM - 12:00 PM", location: "Blossoms Park", title: "Hot Cocoa Social", image: "https://www.littlespicejar.com/wp-content/uploads/2016/12/DIY-Hot-Chocolate-Bar-The-Best-Hot-Chocolate-7.jpg", category: "holiday", details: "Meet new people at Blossoms Park as we have hot cocoa stand filled with goodies and toppings! From 10AM to 12PM.", block: true },
    { repeat: "yearly", month: 0, day: 21, time: " 4:00 PM - 6:00 PM", location: "Meadow Park", title: "Winter Coat Drive", image: "https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/1491/2018/11/01151812/Winter-Coat-Drive.jpg", category: "holiday", details: "Bring warmth to others by donating winter gear for ones in need. Lasts all day at Blossoms Park", block: true },
    { repeat: "yearly", month: 1, day: 14, time: " 4:00 PM - 6:00 PM", location: "Daisy Park", title: "Valentine's Day", image: "https://chicagoridgeparks.com/wp-content/uploads/2018/11/Valentines-Day-Card-Making-Seniors-1024x573.jpg", category: "holiday", details: "Bring your friends and family to Blossoms Park to show your love to each other! From heart shaped cookies to card, make great memories! Starts at 10PM and ends at 5PM.", block: true },
    { repeat: "yearly", month: 2, day: 24, time: " 10:00 AM - 12:00 PM", location: "Blossoms Park", title: "Spring Gardening", image: "https://studio.pinotspalette.com/federal-way/images/fed-springgarden.jpg", category: "holiday", details: "Trade plants and seeds with others at Blossoms Park! Lasts from 2PM to 5PM.", block: true },
    { repeat: "yearly", month: 3, day: 22, time: " 4:00 PM - 6:00 PM", location: "Blossoms Park", title: "Earth Day", image: "https://365thingsinhouston.com/wp-content/uploads/2024/04/earth-day-events-in-greater-houston-2024-evelyns-park-1024x599.jpg", category: "holiday", details: "Celebrate our cherished Earth by making art out of recycles materials and cleaning up our community! Lasts from 2PM to 5PM.", block: true },
    { repeat: "yearly", month: 4, day: 11, time: " 4:00 PM - 6:00 PM", location: "Daisy Park", title: "Picnic in the Park", image: "https://img1.10bestmedia.com/Images/Photos/416367/GettyImages-966220644_54_990x660.jpg?auto=webp&width=828&quality=75", category: "holiday", details: "Bring a dish of your choice to our potluck picnic! Bring your family and a blanket to chit chat and make new friends! From 11AM to 2 PM. ", block: true },
    { repeat: "yearly", month: 5, day: 2, time: "10:00 AM - 4:00 PM", location: "Meadow Park", title: "Summer Kickoff", image: "https://compass.broomfield.org/sites/default/files/styles/large/public/2023-05/SLA%20Kickoff%20bubbles.jpg", category: "holiday", details: "Kick off this sumemr with water activiies ranging from balloons fights to water gun fights! Enjoy fresh fruit and drinks from 10AM to 3PM,", block: true },
    { repeat: "yearly", month: 6, day: 4, time: "10:00 AM - 4:00 PM", location: "Blossoms Park", title: "4th of July", image: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-860w,f_auto,q_auto:best/rockcms/2023-07/230704-july-4-mb-2036-cfa5e2.jpg", category: "holiday", details: "Celebrate Independence Day at Blossoms Park with 4th of July activities and a parade! From 10AM to 3PM.", block: true },
    { repeat: "yearly", month: 7, day: 2, time: " 4:00 PM - 6:00 PM", location: "Daisy Park", title: "Back to School Supply Drive", image: "https://schoolonwheels.org/wp-content/uploads/2022/04/busbanner.jpg", category: "holiday", details: "Donate your school supplies to those in need all day long!", block: true },
    { repeat: "yearly", month: 9, day: 23, time: " 4:00 PM - 6:00 PM", location: "Meadow Park", title: "Pumpkin Carving", image: "https://www.parentmap.com/sites/default/files/styles/1180x660_scaled_cropped/public/images/event/pumpkins-1.jpg?itok=XZA04l0C", category: "holiday", details: "Bring your best pumpkin or use one from ours to compete in a pumpkin carving challenge! From 3PM to 5PM", block: true },
    { repeat: "yearly", month: 8, day: 25, time: "10:00 AM - 4:00 PM", location: "Blossoms Park", title: "Fall Fair", image: "https://media.istockphoto.com/id/1431335872/photo/pumpkins-on-straw-bales-against-the-background-of-people-at-an-agricultural-fair.jpg?s=612x612&w=0&k=20&c=KQHadwvOgXkKAPV3TRAjPtHylcNs9ywZNilnB2X_FBE=", category: "holiday", details: "Enjoy a pumpkin smelled day from food stalls to activities to music at Blossoms ParK! Lasts the whole day.", block: true },
    { repeat: "yearly", month: 10, day: 25, time: "10:00 AM - 12:00 PM", location: "Blossoms Park", title: "Thanksgiving Food Drive", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxqHitB_ycZVsgLiRoU5v9sFVAyOHJzUiUwQ&s", category: "holiday", details: "Donate food to ones in need and help out by packing food trays. Lasts whole day.", block: true }
];
function getEventsForDay(year, month, day, weekday) {
    // One-time events
    const oneTime = events.filter(ev =>
        ev.year === year && ev.month === month && ev.day === day
    );

    if (oneTime.some(ev => ev.block)) {
        return oneTime;
    }

    // Yearly repeating events
    const yearly = events.filter(ev =>
        ev.repeat === "yearly" && ev.month === month && ev.day === day
    );

    if (yearly.some(ev => ev.block)) {
        return yearly;
    }

    // Monthly repeating events
    const monthly = events.filter(ev =>
        ev.repeat === "monthly" && ev.day === day
    );

    // Weekly repeating events
    const weekly = events.filter(ev =>
        ev.repeat === "weekly" && ev.weekday === weekday
    );

    return [...oneTime, ...yearly, ...monthly, ...weekly];
}
function createCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Set month title
    monthYear.textContent = currentDate.toLocaleString("default", {
        month: "long",
        year: "numeric"
    });

    // Clear old calendar
    calendarGrid.innerHTML = "";

    // First weekday of the month
    const firstDay = new Date(year, month, 1).getDay();

    // Number of days in the month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Add empty boxes for alignment
    for (let i = 0; i < firstDay; i++) {
        calendarGrid.innerHTML += `<div class="empty day"></div>`;
    }

    // Build each day
    for (let day = 1; day <= daysInMonth; day++) {
        const weekday = new Date(year, month, day).getDay();

        // Get events for this day
        const todaysEvents = getEventsForDay(year, month, day, weekday);

        // Convert events to HTML
        const eventsHTML = todaysEvents.map(ev => `
            <div class="event"
                data-category="${ev.category}"
                data-title="${ev.title}"
                data-details="${ev.details}"
                data-time="${ev.time || ''}"
                data-image="${ev.image || ''}"
                data-location="${ev.location || ''}">
                ${ev.title}
            </div>
        `).join("");

        // Highlight today
        const isToday =
            day === new Date().getDate() &&
            month === new Date().getMonth() &&
            year === new Date().getFullYear();

        // Add day box
        calendarGrid.innerHTML += `
            <div class="day ${isToday ? "today" : ""}">
                <div class="date">${day}</div>
                <div class="events">${eventsHTML}</div>
            </div>
        `;
    }
}

//buttons to change the months
document.getElementById("previous-month").onclick = () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    createCalendar();
};

document.getElementById("next-month").onclick = () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    createCalendar();
};

createCalendar();

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("event")) {

        const title = e.target.dataset.title;
        const details = e.target.dataset.details;
        const time = e.target.dataset.time || "Not specified";
        const location = e.target.dataset.location || "Not specified";
        const image = e.target.dataset.image || "";

        document.getElementById("modal-title").textContent = title;
        document.getElementById("modal-details").textContent = details;
        document.getElementById("modal-time").textContent = time;
        document.getElementById("modal-location").textContent = location;

        const modalImage = document.getElementById("modal-image");
        if (image) {
            modalImage.src = image;
            modalImage.style.display = "block";
        } else {
            modalImage.style.display = "none";
        }

        document.getElementById("event-modal").style.display = "flex";
    }
});

window.onload = function () {

    // Close modal when clicking X
    document.getElementById("close-modal").onclick = function () {
        document.getElementById("event-modal").style.display = "none";
    };

    // Close modal when clicking outside the box
    window.onclick = function (e) {
        if (e.target.id === "event-modal") {
            document.getElementById("event-modal").style.display = "none";
        }
    };
};

console.log("Close modal element:", document.getElementById("close-modal"));
