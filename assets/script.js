document.addEventListener("DOMContentLoaded", function () {
    let itemsData = JSON.parse(localStorage.getItem("itemsData")) || [
        { name: "Powerful Questions", questions: "", status: false },
        { name: "Metaphor", questions: "", status: false , status: false },
        { name: "Bottom lining", questions: "", status: false , status: false },
        { name: "Challenging", questions: "" , status: false },
        { name: "Blurting(Intuition)", questions: "" , status: false },
        { name: "Acknowledgement", questions: "" , status: false },
        { name: "Articulating what's going on", questions: "" , status: false },
        { name: "Championing", questions: "" , status: false },
        { name: "Hold the Client's Agenda", questions: "" , status: false },
        { name: "Holding the Focus", questions: "" , status: false },
        { name: "Meta View", questions: "" , status: false },
        { name: "Intrude", questions: "" , status: false },
        { name: "Reframing", questions: "" , status: false },
        { name: "Requesting", questions: "Will you..?" , status: false },
        { name: "Take Charge", questions: "" , status: false },
        { name: "Accountability", questions: "" , status: false },
        { name: "Inquiry(to provoke reflection for learning)", questions: "" , status: false },
        { name: "Asking Permission", questions: "" , status: false },
    ];

    // Get a reference to the table body
    const tableBody = document.querySelector("#itemsTable tbody");

    // Function to update the item's status in the data and Local Storage
    function updateStatus(itemId, status) {
        itemsData[itemId].status = status;
        localStorage.setItem("itemsData", JSON.stringify(itemsData));
    }

    // Load or create initial data from Local Storage
    const storedData = localStorage.getItem("itemsData");
    if (!storedData) {
        localStorage.setItem("itemsData", JSON.stringify(itemsData));
    }

    // Iterate through the data and create table rows
    itemsData.forEach(function (item) {
        const row = document.createElement("tr");
        const itemNameCell = document.createElement("td");
        const questionCell = document.createElement("td");
        const statusCell = document.createElement("td");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = item.status;

        itemNameCell.textContent = item.name;
        questionCell.textContent = item.questions;
        statusCell.appendChild(checkbox);

        // Add event listener to checkbox for status updates
        checkbox.addEventListener("change", function () {
            updateStatus(index, checkbox.checked);
        });

        row.appendChild(itemNameCell);
        row.appendChild(questionCell);
        row.appendChild(statusCell);

        tableBody.appendChild(row);
    });
});
