document.addEventListener("DOMContentLoaded", function () {
    const itemsData = [
        { name: "Powerful Questions", questions: "" },
        { name: "Metaphor", questions: "" },
        { name: "Bottom lining", questions: "" },
        { name: "Challenging", questions: "" },
        { name: "Blurting(Intuition)", questions: "" },
        { name: "Acknowledgement", questions: "" },
        { name: "Articulating what's going on", questions: "" },
        { name: "Championing", questions: "" },
        { name: "Hold the Client's Agenda", questions: "" },
        { name: "Holding the Focus", questions: "" },
        { name: "Meta View", questions: "" },
        { name: "Intrude", questions: "" },
        { name: "Reframing", questions: "" },
        { name: "Requesting", questions: "Will you..?" },
        { name: "Take Charge", questions: "" },
        { name: "Accountability", questions: "" },
        { name: "Inquiry(to provoke reflection for learning)", questions: "" },
        { name: "Asking Permission", questions: "" },
    ];

    // Get a reference to the table body
    const tableBody = document.querySelector("#itemsTable tbody");

    // Iterate through the data and create table rows
    itemsData.forEach(function (item) {
        const row = document.createElement("tr");
        const itemNameCell = document.createElement("td");
        const questionCell = document.createElement("td");
        const statusCell = document.createElement("td");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = false;

        itemNameCell.textContent = item.name;
        questionCell.textContent = item.questions;
        statusCell.appendChild(checkbox);

        row.appendChild(itemNameCell);
        row.appendChild(questionCell);
        row.appendChild(statusCell);

        tableBody.appendChild(row);
    });
});
