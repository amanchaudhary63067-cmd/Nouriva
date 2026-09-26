/* =========================
   NOURIVA 7-DAY MEAL PLANNER
========================= */

const mealPlans = [

    /* MONDAY */

    [
        {
            time: "7:30 AM",
            type: "Breakfast",
            icon: "🍳",
            name: "Balanced Breakfast",
            food: "Eggs or paneer, whole-grain toast and one fruit"
        },
        {
            time: "10:30 AM",
            type: "Snack",
            icon: "🍎",
            name: "Fruit & Nuts",
            food: "One seasonal fruit with a small handful of nuts"
        },
        {
            time: "1:00 PM",
            type: "Lunch",
            icon: "🍛",
            name: "Dal & Rice Meal",
            food: "Dal, rice or roti, vegetables and curd"
        },
        {
            time: "5:00 PM",
            type: "Snack",
            icon: "🥣",
            name: "Evening Snack",
            food: "Yogurt or roasted chana with fruit"
        },
        {
            time: "7:30 PM",
            type: "Dinner",
            icon: "🥗",
            name: "Light Dinner",
            food: "Roti, vegetables and a protein source such as dal or paneer"
        }
    ],


    /* TUESDAY */

    [
        {
            time: "7:30 AM",
            type: "Breakfast",
            icon: "🥣",
            name: "Oats Breakfast",
            food: "Oats with milk or yogurt, fruit and nuts"
        },
        {
            time: "10:30 AM",
            type: "Snack",
            icon: "🍌",
            name: "Banana Snack",
            food: "Banana with a small serving of nuts"
        },
        {
            time: "1:00 PM",
            type: "Lunch",
            icon: "🍱",
            name: "Roti & Dal",
            food: "Roti, dal, mixed vegetables and curd"
        },
        {
            time: "5:00 PM",
            type: "Snack",
            icon: "🥜",
            name: "Roasted Snack",
            food: "Roasted chana or makhana"
        },
        {
            time: "7:30 PM",
            type: "Dinner",
            icon: "🍲",
            name: "Vegetable Meal",
            food: "Vegetable curry, roti and a protein source"
        }
    ],


    /* WEDNESDAY */

    [
        {
            time: "7:30 AM",
            type: "Breakfast",
            icon: "🥞",
            name: "Healthy Breakfast",
            food: "Vegetable poha or upma with curd"
        },
        {
            time: "10:30 AM",
            type: "Snack",
            icon: "🍊",
            name: "Fruit",
            food: "One seasonal fruit"
        },
        {
            time: "1:00 PM",
            type: "Lunch",
            icon: "🍛",
            name: "Balanced Lunch",
            food: "Rice or roti, dal, vegetables and curd"
        },
        {
            time: "5:00 PM",
            type: "Snack",
            icon: "🥛",
            name: "Yogurt Snack",
            food: "Plain yogurt with fruit"
        },
        {
            time: "7:30 PM",
            type: "Dinner",
            icon: "🥗",
            name: "Vegetable Dinner",
            food: "Roti, vegetables and dal or paneer"
        }
    ],


    /* THURSDAY */

    [
        {
            time: "7:30 AM",
            type: "Breakfast",
            icon: "🍞",
            name: "Toast & Protein",
            food: "Whole-grain toast with eggs or paneer and fruit"
        },
        {
            time: "10:30 AM",
            type: "Snack",
            icon: "🍎",
            name: "Fruit Snack",
            food: "Seasonal fruit and a few nuts"
        },
        {
            time: "1:00 PM",
            type: "Lunch",
            icon: "🍚",
            name: "Rice & Dal",
            food: "Rice, dal, vegetables and curd"
        },
        {
            time: "5:00 PM",
            type: "Snack",
            icon: "🌰",
            name: "Nut Snack",
            food: "Small serving of nuts or roasted chana"
        },
        {
            time: "7:30 PM",
            type: "Dinner",
            icon: "🍲",
            name: "Simple Dinner",
            food: "Roti, vegetable curry and protein source"
        }
    ],


    /* FRIDAY */

    [
        {
            time: "7:30 AM",
            type: "Breakfast",
            icon: "🥣",
            name: "Oats & Fruit",
            food: "Oats with milk or yogurt, fruit and nuts"
        },
        {
            time: "10:30 AM",
            type: "Snack",
            icon: "🍌",
            name: "Fruit Snack",
            food: "Banana or another seasonal fruit"
        },
        {
            time: "1:00 PM",
            type: "Lunch",
            icon: "🍛",
            name: "Dal Roti Meal",
            food: "Roti, dal, vegetables and curd"
        },
        {
            time: "5:00 PM",
            type: "Snack",
            icon: "🥛",
            name: "Yogurt",
            food: "Plain yogurt with fruit"
        },
        {
            time: "7:30 PM",
            type: "Dinner",
            icon: "🥗",
            name: "Balanced Dinner",
            food: "Roti, vegetables and dal or paneer"
        }
    ],


    /* SATURDAY */

    [
        {
            time: "8:00 AM",
            type: "Breakfast",
            icon: "🍳",
            name: "Weekend Breakfast",
            food: "Vegetable omelette or paneer with whole-grain toast"
        },
        {
            time: "11:00 AM",
            type: "Snack",
            icon: "🍉",
            name: "Fruit",
            food: "Seasonal fruit"
        },
        {
            time: "1:30 PM",
            type: "Lunch",
            icon: "🍱",
            name: "Home-style Lunch",
            food: "Roti or rice, dal, vegetables and curd"
        },
        {
            time: "5:00 PM",
            type: "Snack",
            icon: "🥜",
            name: "Healthy Snack",
            food: "Roasted chana, makhana or nuts"
        },
        {
            time: "7:30 PM",
            type: "Dinner",
            icon: "🍲",
            name: "Light Dinner",
            food: "Vegetable meal with a protein source"
        }
    ],


    /* SUNDAY */

    [
        {
            time: "8:00 AM",
            type: "Breakfast",
            icon: "🥞",
            name: "Relaxed Breakfast",
            food: "Poha, upma or another balanced homemade breakfast"
        },
        {
            time: "11:00 AM",
            type: "Snack",
            icon: "🍎",
            name: "Fruit",
            food: "Seasonal fruit with a few nuts"
        },
        {
            time: "1:30 PM",
            type: "Lunch",
            icon: "🍛",
            name: "Family Lunch",
            food: "Enjoy a balanced homemade meal with vegetables and protein"
        },
        {
            time: "5:00 PM",
            type: "Snack",
            icon: "🥛",
            name: "Evening Snack",
            food: "Yogurt, fruit or roasted chana"
        },
        {
            time: "7:30 PM",
            type: "Dinner",
            icon: "🥗",
            name: "Simple Dinner",
            food: "Light homemade dinner with vegetables and protein"
        }
    ]

];


const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];


let currentDay = 0;


/* SHOW DAY */

function showDay(dayIndex) {

    currentDay = dayIndex;

    document.querySelectorAll(".day-btn")
        .forEach((button, index) => {

            button.classList.toggle(
                "active",
                index === dayIndex
            );

        });


    document.getElementById(
        "dayTitle"
    ).textContent = days[dayIndex];


    displayMeals();

}


/* DISPLAY MEALS */

function displayMeals() {

    const mealList =
        document.getElementById("mealList");

    mealList.innerHTML = "";


    mealPlans[currentDay].forEach(
        (meal, mealIndex) => {

            const key =
                `meal-${currentDay}-${mealIndex}`;

            const completed =
                localStorage.getItem(key) === "true";


            const card =
                document.createElement("div");


            card.className =
                "meal-card " +
                (completed ? "completed" : "");


            card.innerHTML = `

                <div class="meal-icon">
                    ${meal.icon}
                </div>

                <div class="meal-info">

                    <div class="meal-time">
                        ${meal.time} · ${meal.type}
                    </div>

                    <h3>
                        ${meal.name}
                    </h3>

                    <p>
                        ${meal.food}
                    </p>

                </div>

                <button
                    class="meal-check"
                    onclick="toggleMeal(${mealIndex})"
                >
                    ${completed ? "✓" : ""}
                </button>

            `;


            mealList.appendChild(card);

        }
    );

}


/* COMPLETE MEAL */

function toggleMeal(mealIndex) {

    const key =
        `meal-${currentDay}-${mealIndex}`;

    const current =
        localStorage.getItem(key) === "true";


    localStorage.setItem(
        key,
        String(!current)
    );


    displayMeals();

}


/* START */

displayMeals();