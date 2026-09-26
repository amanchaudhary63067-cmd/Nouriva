/* =========================
   NOURIVA DAILY ROUTINE
========================= */


/* DEFAULT ROUTINE */

let routine = JSON.parse(
    localStorage.getItem("nourivaRoutine")
) || [

    {
        time: "06:00",
        name: "Wake Up",
        description: "Start your day",
        icon: "🌅",
        completed: false
    },

    {
        time: "06:10",
        name: "Drink Water",
        description: "Start with a glass of water",
        icon: "💧",
        completed: false
    },

    {
        time: "06:30",
        name: "Morning Exercise",
        description: "Stretching, walking or yoga",
        icon: "🧘",
        completed: false
    },

    {
        time: "07:30",
        name: "Breakfast",
        description: "Have a balanced breakfast",
        icon: "🍳",
        completed: false
    },

    {
        time: "09:00",
        name: "Study / Work",
        description: "Focus on your important tasks",
        icon: "📚",
        completed: false
    },

    {
        time: "11:00",
        name: "Healthy Snack",
        description: "Fruit, nuts or yogurt",
        icon: "🍎",
        completed: false
    },

    {
        time: "13:00",
        name: "Lunch",
        description: "Eat a balanced meal",
        icon: "🍛",
        completed: false
    },

    {
        time: "16:30",
        name: "Short Walk",
        description: "Take a small movement break",
        icon: "🚶",
        completed: false
    },

    {
        time: "19:30",
        name: "Dinner",
        description: "Have a balanced dinner",
        icon: "🥗",
        completed: false
    },

    {
        time: "21:30",
        name: "Relax & Reduce Screen Time",
        description: "Prepare yourself for sleep",
        icon: "🌙",
        completed: false
    },

    {
        time: "22:30",
        name: "Sleep",
        description: "Get enough night-time rest",
        icon: "😴",
        completed: false
    }

];


/* DISPLAY ROUTINE */

function displayRoutine() {

    const list = document.getElementById("routineList");

    list.innerHTML = "";

    routine.forEach((item, index) => {

        const div = document.createElement("div");

        div.className =
            "routine-item " +
            (item.completed ? "completed" : "");

        div.innerHTML = `

            <div class="routine-time">
                ${formatTime(item.time)}
            </div>

            <div class="routine-icon">
                ${item.icon || "⏰"}
            </div>

            <div class="routine-info">

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ${item.description || ""}
                </p>

            </div>

            <button
                class="complete-btn"
                onclick="completeActivity(${index})"
            >
                ${item.completed ? "✓" : ""}
            </button>

        `;

        list.appendChild(div);

    });

    updateProgress();

}


/* TIME FORMAT */

function formatTime(time) {

    const [hour, minute] = time.split(":");

    let h = parseInt(hour);

    const ampm = h >= 12 ? "PM" : "AM";

    h = h % 12;

    if (h === 0) {
        h = 12;
    }

    return `${h}:${minute} ${ampm}`;

}


/* COMPLETE ACTIVITY */

function completeActivity(index) {

    routine[index].completed =
        !routine[index].completed;

    saveRoutine();

    displayRoutine();

}


/* PROGRESS */

function updateProgress() {

    const total = routine.length;

    const completed =
        routine.filter(item => item.completed).length;

    const percentage =
        total === 0
            ? 0
            : Math.round((completed / total) * 100);

    document.getElementById(
        "progressText"
    ).textContent = percentage + "%";

    document.getElementById(
        "progressNumber"
    ).textContent = percentage + "%";

    document.getElementById(
        "progressFill"
    ).style.width = percentage + "%";

}


/* ADD ACTIVITY */

function addActivity() {

    const time =
        document.getElementById(
            "activityTime"
        ).value;

    const name =
        document.getElementById(
            "activityName"
        ).value.trim();


    if (!time || !name) {

        alert(
            "Please select a time and enter an activity."
        );

        return;

    }


    routine.push({

        time: time,

        name: name,

        description: "Custom activity",

        icon: "⏰",

        completed: false

    });


    routine.sort(
        (a, b) =>
            a.time.localeCompare(b.time)
    );


    saveRoutine();

    displayRoutine();


    document.getElementById(
        "activityTime"
    ).value = "";

    document.getElementById(
        "activityName"
    ).value = "";

}


/* RESET */

function resetRoutine() {

    routine.forEach(item => {

        item.completed = false;

    });

    saveRoutine();

    displayRoutine();

}


/* SAVE */

function saveRoutine() {

    localStorage.setItem(
        "nourivaRoutine",
        JSON.stringify(routine)
    );

}


/* START */

displayRoutine();0
/* =========================
   SLEEP SCHEDULE
========================= */

const bedTimeInput =
    document.getElementById("bedTime");

const wakeTimeInput =
    document.getElementById("wakeTime");


function calculateSleep() {

    const bedTime = bedTimeInput.value;
    const wakeTime = wakeTimeInput.value;

    if (!bedTime || !wakeTime) {
        return;
    }

    let bed = timeToMinutes(bedTime);
    let wake = timeToMinutes(wakeTime);

    /*
       If wake-up time is next day
    */

    if (wake <= bed) {
        wake += 24 * 60;
    }

    const totalMinutes = wake - bed;

    const hours =
        Math.floor(totalMinutes / 60);

    const minutes =
        totalMinutes % 60;

    document.getElementById(
        "sleepDuration"
    ).textContent =
        `${hours}h ${minutes}m`;


    /*
       8 hour sleep goal
    */

    const goal = 8 * 60;

    let progress =
        (totalMinutes / goal) * 100;

    progress =
        Math.min(progress, 100);


    document.getElementById(
        "sleepProgressFill"
    ).style.width =
        progress + "%";


    const message =
        document.getElementById(
            "sleepMessage"
        );


    if (totalMinutes < 6 * 60) {

        message.textContent =
            "Try to get more sleep tonight 🌙";

    } else if (totalMinutes < 8 * 60) {

        message.textContent =
            "A little more sleep may help you reach your goal.";

    } else {

        message.textContent =
            "Good sleep schedule 🌿";

    }

}


function timeToMinutes(time) {

    const parts = time.split(":");

    return (
        parseInt(parts[0]) * 60 +
        parseInt(parts[1])
    );

}


function saveSleepSchedule() {

    localStorage.setItem(
        "nourivaBedTime",
        bedTimeInput.value
    );

    localStorage.setItem(
        "nourivaWakeTime",
        wakeTimeInput.value
    );

    calculateSleep();

    alert(
        "Sleep schedule saved successfully."
    );

}


/* LOAD SAVED SCHEDULE */

const savedBed =
    localStorage.getItem(
        "nourivaBedTime"
    );

const savedWake =
    localStorage.getItem(
        "nourivaWakeTime"
    );


if (savedBed) {
    bedTimeInput.value = savedBed;
}

if (savedWake) {
    wakeTimeInput.value = savedWake;
}


bedTimeInput.addEventListener(
    "change",
    calculateSleep
);

wakeTimeInput.addEventListener(
    "change",
    calculateSleep
);


calculateSleep();