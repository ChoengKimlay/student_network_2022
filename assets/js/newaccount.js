// Function to generate options for the day select menu
function generateDayOptions() {
    const daySelect = document.getElementById("day");

    // Generate options for days (1 to 31)
    for (let day = 1; day <= 31; day++) {
        const option = document.createElement("option");
        option.value = day;
        option.textContent = day;
        daySelect.appendChild(option);
    }
}

// Function to generate options for the month select menu
function generateMonthOptions() {
    const monthSelect = document.getElementById("month");

    // Array of month names
    const months = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];

    // Generate options for months
    for (let i = 0; i < months.length; i++) {
        const option = document.createElement("option");
        option.value = i + 1; // Months are 1-indexed
        option.textContent = months[i];
        monthSelect.appendChild(option);
    }
}

// Function to generate options for the year select menu
function generateYearOptions() {
    const yearSelect = document.getElementById("year");

    // Generate options for years (1900 to current year)
    const currentYear = new Date().getFullYear();
    for (let year = 1900; year <= currentYear; year++) {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }
}

// Call the functions to generate options
generateDayOptions();
generateMonthOptions();
generateYearOptions();
