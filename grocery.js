/* =========================
   NOURIVA GROCERY LIST
========================= */

let groceries = JSON.parse(
    localStorage.getItem("nourivaGroceries")
) || [

    {
        name: "Milk",
        completed: false
    },

    {
        name: "Eggs / Paneer",
        completed: false
    },

    {
        name: "Dal",
        completed: false
    },

    {
        name: "Rice",
        completed: false
    },

    {
        name: "Whole Wheat Atta",
        completed: false
    },

    {
        name: "Seasonal Fruits",
        completed: false
    },

    {
        name: "Vegetables",
        completed: false
    },

    {
        name: "Curd / Yogurt",
        completed: false
    },

    {
        name: "Nuts",
        completed: false
    },

    {
        name: "Roasted Chana",
        completed: false
    }

];


/* DISPLAY */

function displayGroceries() {

    const list =
        document.getElementById("groceryList");

    list.innerHTML = "";


    groceries.forEach((item, index) => {

        const div =
            document.createElement("div");

        div.className =
            "grocery-item " +
            (item.completed ? "completed" : "");


        div.innerHTML = `

            <button
                class="grocery-check"
                onclick="toggleGrocery(${index})"
            >
                ${item.completed ? "✓" : ""}
            </button>

            <span class="item-name">
                ${item.name}
            </span>

            <button
                class="delete-item"
                onclick="deleteGrocery(${index})"
            >
                ×
            </button>

        `;


        list.appendChild(div);

    });


    updateCount();

}


/* ADD */

function addGrocery() {

    const input =
        document.getElementById("groceryInput");

    const name =
        input.value.trim();


    if (!name) {
        return;
    }


    groceries.push({
        name: name,
        completed: false
    });


    saveGroceries();

    displayGroceries();

    input.value = "";

}


/* ENTER KEY */

document
    .getElementById("groceryInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            addGrocery();
        }

    });


/* CHECK */

function toggleGrocery(index) {

    groceries[index].completed =
        !groceries[index].completed;

    saveGroceries();

    displayGroceries();

}


/* DELETE */

function deleteGrocery(index) {

    groceries.splice(index, 1);

    saveGroceries();

    displayGroceries();

}


/* CLEAR COMPLETED */

function clearCompleted() {

    groceries =
        groceries.filter(
            item => !item.completed
        );

    saveGroceries();

    displayGroceries();

}


/* COUNT */

function updateCount() {

    const remaining =
        groceries.filter(
            item => !item.completed
        ).length;


    document.getElementById(
        "groceryCount"
    ).textContent =
        `${remaining} items remaining`;

}


/* SAVE */

function saveGroceries() {

    localStorage.setItem(
        "nourivaGroceries",
        JSON.stringify(groceries)
    );

}


/* START */

displayGroceries();