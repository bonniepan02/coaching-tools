function renderMarkdown(text) {
  if (typeof marked === "function") {
    // Check if marked is available
    return marked(text);
  } else {
    console.error("The 'marked' library is not available.");
    return text; // Fallback to plain text
  }
}

function updatePageContent(itemsData) {
  // Function to update the item's status in the data and Local Storage
  function updateStatus(itemId, status) {
    itemsData[itemId].status = status;
    localStorage.setItem("itemsData", JSON.stringify(itemsData));
  }
  // Get a reference to the table body
  const tableBody = document.querySelector("#itemsTable tbody");
  // Iterate through the data and create table rows
  itemsData.forEach(function (item, index) {
    const row = document.createElement("tr");
    const itemNameCell = document.createElement("td");
    const timingCell = document.createElement("td");
    const goalCell = document.createElement("td");
    const questionCell = document.createElement("td");
    const statusCell = document.createElement("td");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.status;

    itemNameCell.textContent = item.name;
    timingCell.textContent = item.timing;
    goalCell.textContent = item.goal;
    questionCell.textContent = item.questions;

    timingCell.innerHTML = renderMarkdown(item.timing);
    // Add the data-render-markdown attribute
    timingCell.setAttribute("data-render-markdown", "true");
    timingCell.classList.add("markdown-cell");

    statusCell.appendChild(checkbox);

    // Add event listener to checkbox for status updates
    checkbox.addEventListener("change", function () {
      updateStatus(index, checkbox.checked);
    });

    row.appendChild(itemNameCell);
    row.appendChild(timingCell);
    row.appendChild(goalCell);
    row.appendChild(questionCell);
    row.appendChild(statusCell);

    tableBody.appendChild(row);
  });
}
async function fetchDefaultData() {
  try {
    const response = await fetch("assets/coaching-skills.json");
    const defaultData = await response.json();
    return defaultData;
  } catch (error) {
    console.error("Error fetching default data:", error);
    return [];
  }
}

(async () => {
  const defaultData = await fetchDefaultData();
  console.log("Loading page", defaultData);
  let storedData = JSON.parse(localStorage.getItem("itemsData"));
  let itemsData = [];

  if (Array.isArray(storedData) && storedData.length > 0) {
    itemsData = storedData;
    console.log("Data is not empty", itemsData);
  } else {
    console.log("Data is empty or not a list.");
    itemsData = defaultData;
    localStorage.setItem("itemsData", JSON.stringify(itemsData));
    console.log("Assigning data", itemsData);
  }
})();

document.addEventListener("DOMContentLoaded", function () {
  let storedData = JSON.parse(localStorage.getItem("itemsData"));
  let itemsData = [];

  if (Array.isArray(storedData) && storedData.length > 0) {
    itemsData = storedData;
    console.log("Data is not empty", itemsData);
  } else {
    console.log("Data is empty or not a list.");
    itemsData = defaultData;
    localStorage.setItem("itemsData", JSON.stringify(itemsData));
    console.log("Assigning data", itemsData);
  }

  updatePageContent(itemsData);
});
