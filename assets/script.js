document.addEventListener("DOMContentLoaded", function () {
  let itemsData = JSON.parse(localStorage.getItem("itemsData")) || [
    {
      name: "Powerful Questions",
      timing: "- to explore\n - to move to action",
      goal: "to envoke thought, clarity, discovery, their learning or move them to action",
      questions: "",
      status: false,
    },
    {
      name: "Metaphor",
      timing: "",
      goal: "",
      questions: "",
      status: false,
    },
    {
      name: "Bottom lining",
      timing: "",
      goal: "",
      questions: "",
      status: false,
    },
    {
      name: "Challenging",
      timing: "",
      goal: "",
      questions: "",
      status: false,
    },
    {
      name: "Blurting(Intuition)",
      timing: "",
      goal: "",
      questions: "",
      status: false,
    },
    {
      name: "Acknowledgement",
      timing: "",
      goal: "",
      questions: "",
      status: false,
    },
    {
      name: "Articulating what's going on",
      timing: "",
      goal: "",
      questions: "",
      status: false,
    },
    {
      name: "Championing",
      timing: "",
      goal: "",
      questions: "",
      status: false,
    },
    {
      name: "Hold the Client's Agenda",
      timing: "",
      goal: "",
      questions: "",
      status: false,
    },
    {
      name: "Holding the Focus",
      timing: "",
      goal: "",
      questions: "",
      status: false,
    },
    { name: "Meta View", timing: "", goal: "", questions: "", status: false },
    { name: "Intrude", timing: "", goal: "", questions: "", status: false },
    { name: "Reframing", timing: "", goal: "", questions: "", status: false },
    {
      name: "Requesting",
      timing: "",
      goal: "abc",
      questions: "Will you do..?",
      status: false,
    },
    {
      name: "Take Charge",
      timing: "",
      goal: "",
      questions: "",
      status: false,
    },
    {
      name: "Accountability",
      timing: "",
      goal: "",
      questions: "",
      status: false,
    },
    {
      name: "Inquiry(to provoke reflection for learning)",
      timing: "",
      goal: "",
      questions: "",
      status: false,
    },
    {
      name: "Asking Permission",
      timing: "",
      goal: "",
      questions: "",
      status: false,
    },
  ];

  // Function to update the item's status in the data and Local Storage
  function updateStatus(itemId, status) {
    itemsData[itemId].status = status;
    localStorage.setItem("itemsData", JSON.stringify(itemsData));
  }
  // Function to render Markdown into HTML
  function renderMarkdown(text) {
    if (typeof marked === "function") {
      // Check if marked is available
      return marked(text);
    } else {
      console.error("The 'marked' library is not available.");
      return text; // Fallback to plain text
    }
  }
  // Get a reference to the table body
  const tableBody = document.querySelector("#itemsTable tbody");

  // Load or create initial data from Local Storage
  if (Array.isArray(itemsData) && itemsData.length > 0) {
    // The data is a non-empty array
    // You can safely work with itemsData
    console.log("Data is not an empty list:", itemsData);

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
  } else {
    console.log("Data is empty or not a list.");
  }
});
