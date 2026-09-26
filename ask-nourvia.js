/* =========================
   NOURIVA ASK
========================= */

const questionInput =
    document.getElementById("questionInput");

const answerSection =
    document.getElementById("answerSection");

const answerContent =
    document.getElementById("answerContent");

const loading =
    document.getElementById("loading");

const askButton =
    document.getElementById("askButton");

const sourceArea =
    document.getElementById("sourceArea");


/* USE SUGGESTED QUESTION */

function useQuestion(question) {

    questionInput.value = question;

    questionInput.focus();

}


/* ASK QUESTION */

async function askQuestion() {

    const question =
        questionInput.value.trim();


    if (!question) {

        alert(
            "Please enter your question."
        );

        return;
    }


    /* SHOW ANSWER BOX */

    answerSection.classList.remove(
        "hidden"
    );


    /* SHOW LOADING */

    loading.style.display = "block";

    loading.textContent =
        "Searching...";


    answerContent.textContent = "";

    sourceArea.innerHTML = "";


    askButton.disabled = true;

    askButton.textContent =
        "Searching...";


    /*
       TEMPORARY ANSWER

       Backend/API will be connected
       in the next step.
    */

    setTimeout(() => {

        loading.style.display = "none";

        answerContent.textContent =
            "Your question was received:\n\n" +
            question +
            "\n\n" +
            "The web search and AI answer system " +
            "will be connected here. The answer will " +
            "appear inside this same Nouriva page " +
            "without opening another tab.";


        sourceArea.innerHTML = `
            <strong>Sources</strong>
            <p>
                Web search connection will be added
                in the next step.
            </p>
        `;


        askButton.disabled = false;

        askButton.textContent =
            "🔍 Ask Nouriva";


    }, 800);

}


/* CTRL + ENTER */

questionInput.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter" &&
            event.ctrlKey
        ) {

            askQuestion();

        }

    }
);/* =========================
   NOURIVA ASK
========================= */

const questionInput =
    document.getElementById("questionInput");

const answerSection =
    document.getElementById("answerSection");

const answerContent =
    document.getElementById("answerContent");

const loading =
    document.getElementById("loading");

const askButton =
    document.getElementById("askButton");

const sourceArea =
    document.getElementById("sourceArea");


/* USE SUGGESTED QUESTION */

function useQuestion(question) {

    questionInput.value = question;

    questionInput.focus();

}


/* ASK QUESTION */

async function askQuestion() {

    const question =
        questionInput.value.trim();


    if (!question) {

        alert(
            "Please enter your question."
        );

        return;
    }


    /* SHOW ANSWER BOX */

    answerSection.classList.remove(
        "hidden"
    );


    /* SHOW LOADING */

    loading.style.display = "block";

    loading.textContent =
        "Searching...";


    answerContent.textContent = "";

    sourceArea.innerHTML = "";


    askButton.disabled = true;

    askButton.textContent =
        "Searching...";


    /*
       TEMPORARY ANSWER

       Backend/API will be connected
       in the next step.
    */

    setTimeout(() => {

        loading.style.display = "none";

        answerContent.textContent =
            "Your question was received:\n\n" +
            question +
            "\n\n" +
            "The web search and AI answer system " +
            "will be connected here. The answer will " +
            "appear inside this same Nouriva page " +
            "without opening another tab.";


        sourceArea.innerHTML = `
            <strong>Sources</strong>
            <p>
                Web search connection will be added
                in the next step.
            </p>
        `;


        askButton.disabled = false;

        askButton.textContent =
            "🔍 Ask Nouriva";


    }, 800);

}


/* CTRL + ENTER */

questionInput.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter" &&
            event.ctrlKey
        ) {

            askQuestion();

        }

    }
);