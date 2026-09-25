/* =========================
   NOURIVA FOOD & WELLNESS
========================= */


/* =========================
   GUIDE DATA
========================= */

const guides = {

    /* =========================
       HEALTHY EATING
    ========================= */

    healthy: {

        icon: "🥗",

        label: "HEALTHY EATING",

        title: "Build a Balanced Diet",

        description:
            "A simple approach to everyday eating: include a variety of foods, stay hydrated, and build meals around nutritious ingredients.",

        cards: [

            {
                title: "🍚 Build Your Main Meals",

                items: [
                    "Include a carbohydrate source such as rice, roti, oats or potatoes.",
                    "Add a protein source such as dal, beans, chana, paneer, curd or eggs if you eat them.",
                    "Include vegetables regularly.",
                    "Add fruit as part of your day.",
                    "Use nuts and seeds in reasonable portions."
                ]
            },


            {
                title: "🥛 Protein Sources",

                items: [
                    "Dal and lentils",
                    "Rajma and chickpeas",
                    "Milk and curd",
                    "Paneer",
                    "Eggs, if included in your diet",
                    "Nuts and seeds",
                    "Soy and other plant protein foods"
                ]
            },


            {
                title: "🍎 Easy Snack Ideas",

                items: [
                    "Fruit with curd",
                    "Roasted chana",
                    "Nuts and seeds",
                    "Milk with oats",
                    "Peanut butter with whole-grain bread",
                    "Homemade vegetable or fruit snack"
                ]
            },


            {
                title: "💧 Hydration",

                items: [
                    "Drink water regularly throughout the day.",
                    "Increase fluids when you are sweating more.",
                    "Water is usually the simplest everyday drink.",
                    "Your hydration needs can vary with activity and weather."
                ]
            }

        ]

    },


    /* =========================
       WEIGHT GAIN
    ========================= */

    gain: {

        icon: "📈",

        label: "HEALTHY WEIGHT GAIN",

        title: "How to Gain Weight",

        description:
            "Healthy weight gain usually works better when you gradually increase nutritious food intake rather than relying mainly on junk food or sugary drinks.",

        cards: [

            {
                title: "🍽️ Eat More Energy-Dense Foods",

                items: [
                    "Add an extra meal or nutritious snack if needed.",
                    "Use foods such as nuts, seeds, peanut butter and dairy products.",
                    "Add healthy calorie sources to meals instead of simply increasing junk food.",
                    "Rice, roti, oats and potatoes can provide useful energy."
                ]
            },


            {
                title: "🥛 Add Protein",

                items: [
                    "Include a protein source with your main meals.",
                    "Dal, beans, chickpeas and rajma are useful plant options.",
                    "Milk, curd and paneer can provide protein.",
                    "Eggs can be included if they fit your diet.",
                    "Spread protein intake across the day."
                ]
            },


            {
                title: "🥜 Healthy High-Energy Snacks",

                items: [
                    "Banana with peanut butter",
                    "Milk and oats",
                    "Curd with fruit and nuts",
                    "Roasted chana with nuts",
                    "Peanut butter sandwich",
                    "Homemade smoothie with milk, fruit and oats"
                ]
            },


            {
                title: "🏋️ Strength Exercise",

                items: [
                    "Strength training can help support muscle development.",
                    "Start with simple exercises appropriate for your fitness level.",
                    "Progress gradually instead of suddenly increasing exercise intensity.",
                    "Give your body enough recovery time."
                ]
            },


            {
                title: "😴 Sleep & Recovery",

                items: [
                    "Maintain a regular sleep schedule.",
                    "Give your body time to recover after exercise.",
                    "Avoid replacing meals with excessive caffeine or energy drinks."
                ]
            },


            {
                title: "⚠️ Important",

                items: [
                    "Rapid or unexplained weight loss should not simply be treated by eating more.",
                    "If you have persistent digestive symptoms, poor appetite or unexplained weight changes, consider speaking with a healthcare professional.",
                    "Weight goals should be gradual and realistic."
                ]
            }

        ]

    },


    /* =========================
       WEIGHT LOSS
    ========================= */

    loss: {

        icon: "📉",

        label: "HEALTHY WEIGHT MANAGEMENT",

        title: "How to Lose Weight",

        description:
            "Sustainable weight loss generally comes from consistent eating, regular activity, adequate sleep and a manageable calorie deficit rather than crash diets.",

        cards: [

            {
                title: "🥗 Build Filling Meals",

                items: [
                    "Include vegetables and fruits regularly.",
                    "Include a protein source with meals.",
                    "Choose filling carbohydrate sources such as whole grains, rice, roti or oats according to your needs.",
                    "Pay attention to portion sizes."
                ]
            },


            {
                title: "🥚 Protein & Fiber",

                items: [
                    "Dal, beans, chickpeas and rajma provide protein and fiber.",
                    "Curd, paneer and eggs can be useful protein options.",
                    "Vegetables and fruits can add fiber and volume to meals.",
                    "A balanced meal can make it easier to stay satisfied."
                ]
            },


            {
                title: "🚫 Limit Rather Than Completely Ban",

                items: [
                    "Sugary drinks",
                    "Frequent deep-fried foods",
                    "Large portions of highly processed snacks",
                    "Excessive sweets",
                    "Frequent high-calorie beverages"
                ]
            },


            {
                title: "🚶 Activity",

                items: [
                    "Regular walking is a simple way to increase daily activity.",
                    "Cycling, running or other cardio can be added according to fitness level.",
                    "Strength training can help maintain muscle.",
                    "Increase activity gradually."
                ]
            },


            {
                title: "😴 Sleep",

                items: [
                    "Maintain a regular sleep schedule.",
                    "Poor sleep can make healthy routines harder to maintain.",
                    "Aim for adequate sleep rather than relying on extreme dieting."
                ]
            },


            {
                title: "⚠️ Avoid Crash Diets",

                items: [
                    "Do not rely on starvation or extremely restrictive diets.",
                    "Avoid unverified weight-loss pills or dangerous methods.",
                    "Very rapid weight changes can be a reason to seek professional advice."
                ]
            }

        ]

    },


    /* =========================
       FEELING UNWELL
    ========================= */

    unwell: {

        icon: "🤒",

        label: "GENERAL SUPPORT",

        title: "Food When You Are Feeling Unwell",

        description:
            "When you are unwell, choosing foods and fluids that you can comfortably tolerate may help you maintain hydration and energy. The right choice depends on your symptoms.",

        cards: [

            {
                title: "🤒 Fever / Feeling Unwell",

                items: [
                    "Drink fluids regularly.",
                    "Choose easy-to-tolerate foods such as khichdi, rice, dal, soup or toast if comfortable.",
                    "Fruit can provide fluids and nutrients.",
                    "Eat smaller meals if your appetite is reduced."
                ]
            },


            {
                title: "🤧 Cold / Sore Throat",

                items: [
                    "Warm fluids may feel soothing for some people.",
                    "Choose soft foods that are comfortable to swallow.",
                    "Soup, dal, khichdi and other easy-to-eat foods can be options.",
                    "Keep drinking fluids."
                ]
            },


            {
                title: "🤢 Nausea / Vomiting",

                items: [
                    "Take small amounts of fluid frequently if tolerated.",
                    "Choose simple foods when you are ready to eat.",
                    "Avoid very heavy or greasy meals if they make symptoms worse.",
                    "If vomiting continues, dehydration can become a concern."
                ]
            },


            {
                title: "💩 Diarrhea",

                items: [
                    "Focus on replacing lost fluids.",
                    "Take fluids in small, frequent amounts if needed.",
                    "Choose foods that you can tolerate.",
                    "Avoid foods or drinks that clearly make symptoms worse."
                ]
            },


            {
                title: "💧 Hydration",

                items: [
                    "Drink water regularly.",
                    "During significant fluid loss, oral rehydration solutions may be appropriate.",
                    "Seek medical advice if dehydration is severe or symptoms continue."
                ]
            },


            {
                title: "🚨 Get Medical Help",

                items: [
                    "Difficulty breathing",
                    "Severe dehydration or inability to keep fluids down",
                    "Confusion or fainting",
                    "Severe or rapidly worsening symptoms",
                    "Persistent vomiting or diarrhea",
                    "Any emergency symptom that concerns you"
                ]
            }

        ]

    }

};



/* =========================
   SHOW GUIDE
========================= */

window.showGuide = function(type) {

    const guide =
        guides[type];


    if (!guide) {

        return;

    }


    const content =
        document.getElementById(
            "guideContent"
        );


    const icon =
        document.getElementById(
            "guideIcon"
        );


    const label =
        document.getElementById(
            "guideLabel"
        );


    const title =
        document.getElementById(
            "guideTitle"
        );


    const description =
        document.getElementById(
            "guideDescription"
        );


    const cards =
        document.getElementById(
            "guideCards"
        );


    icon.textContent =
        guide.icon;


    label.textContent =
        guide.label;


    title.textContent =
        guide.title;


    description.textContent =
        guide.description;


    cards.innerHTML = "";


    guide.cards.forEach(
        (card) => {

            const cardElement =
                document.createElement(
                    "div"
                );


            cardElement.className =
                "info-card";


            const heading =
                document.createElement(
                    "h3"
                );


            heading.textContent =
                card.title;


            const list =
                document.createElement(
                    "ul"
                );


            card.items.forEach(
                (item) => {

                    const li =
                        document.createElement(
                            "li"
                        );


                    li.textContent =
                        item;


                    list.appendChild(
                        li
                    );

                }
            );


            cardElement.appendChild(
                heading
            );


            cardElement.appendChild(
                list
            );


            cards.appendChild(
                cardElement
            );

        }
    );


    content.classList.remove(
        "hidden"
    );


    content.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

};



/* =========================
   CLOSE GUIDE
========================= */

window.closeGuide = function() {

    const content =
        document.getElementById(
            "guideContent"
        );


    content.classList.add(
        "hidden"
    );


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};