function generateCalendar() {
    const month = document.getElementById('month').value;
    const calendarDiv = document.getElementById('calendar');
    calendarDiv.innerHTML = '';

    const daysInMonth = new Date(2023, month, 0).getDate();
    let table = '<table border="1"><tr>';

    for (let day = 1; day <= daysInMonth; day++) {
        table += `<td>${day}</td>`;
        if (day % 7 === 0) {
            table += '</tr><tr>';
        }
    }

    table += '</tr></table>';
    calendarDiv.innerHTML = table;
}