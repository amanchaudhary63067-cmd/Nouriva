import {
    auth,
    db
} from "./firebase-config.js";


import {
    RecaptchaVerifier,
    signInWithPhoneNumber,
    onAuthStateChanged,
    signOut
} from
"https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";


import {
    doc,
    getDoc,
    setDoc,
    updateDoc,
    serverTimestamp
} from
"https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";



/* =========================
   ELEMENTS
========================= */

const loginPage =
    document.getElementById("loginPage");

const profilePage =
    document.getElementById("profilePage");

const dashboard =
    document.getElementById("dashboard");

const phoneStep =
    document.getElementById("phoneStep");

const otpStep =
    document.getElementById("otpStep");

const message =
    document.getElementById("authMessage");


let confirmationResult = null;
let recaptchaVerifier = null;



/* =========================
   WATER TRACKER
========================= */

let todayWater = 0;


/*
 * Returns today's date.
 * Example: 2026-09-25
 */

function getTodayDate() {

    const now = new Date();

    const year =
        now.getFullYear();

    const month =
        String(now.getMonth() + 1)
            .padStart(2, "0");

    const day =
        String(now.getDate())
            .padStart(2, "0");

    return `${year}-${month}-${day}`;
}



/* =========================
   RECAPTCHA
========================= */

function createRecaptcha() {

    if (recaptchaVerifier) {
        return recaptchaVerifier;
    }

    recaptchaVerifier =
        new RecaptchaVerifier(
            auth,
            "recaptcha-container",
            {
                size: "normal",

                callback: () => {

                    console.log(
                        "reCAPTCHA verified"
                    );

                },

                "expired-callback": () => {

                    showMessage(
                        "reCAPTCHA expired. Please verify again."
                    );

                }
            }
        );

    return recaptchaVerifier;
}



/* =========================
   SEND OTP
========================= */

document
    .getElementById("sendOtp")
    .addEventListener(
        "click",
        sendOTP
    );


async function sendOTP() {

    const phone =
        document
            .getElementById("phone")
            .value
            .trim();


    if (!/^[0-9]{10}$/.test(phone)) {

        showMessage(
            "Please enter a valid 10-digit number."
        );

        return;
    }


    const fullPhone =
        "+91" + phone;


    try {

        showMessage(
            "Sending verification code..."
        );


        const verifier =
            createRecaptcha();


        confirmationResult =
            await signInWithPhoneNumber(
                auth,
                fullPhone,
                verifier
            );


        phoneStep.classList.add(
            "hidden"
        );


        otpStep.classList.remove(
            "hidden"
        );


        showMessage(
            "OTP sent successfully."
        );

    }


    catch (error) {

        console.error(error);

        showMessage(
            getFirebaseError(error)
        );

    }

}



/* =========================
   VERIFY OTP
========================= */

document
    .getElementById("verifyOtp")
    .addEventListener(
        "click",
        verifyOTP
    );


async function verifyOTP() {

    const code =
        document
            .getElementById("otp")
            .value
            .trim();


    if (!/^[0-9]{6}$/.test(code)) {

        showMessage(
            "Enter the 6-digit OTP."
        );

        return;
    }


    if (!confirmationResult) {

        showMessage(
            "Please request a new OTP."
        );

        return;
    }


    try {

        showMessage(
            "Verifying..."
        );


        const result =
            await confirmationResult.confirm(
                code
            );


        const user =
            result.user;


        console.log(
            "Phone verified:",
            user.uid
        );


        showMessage(
            "Phone verified successfully."
        );


        await loadUserProfile(
            user.uid
        );

    }


    catch (error) {

        console.error(error);

        showMessage(
            "Incorrect or expired OTP."
        );

    }

}



/* =========================
   CHANGE NUMBER
========================= */

document
    .getElementById("changeNumber")
    .addEventListener(
        "click",
        () => {

            otpStep.classList.add(
                "hidden"
            );


            phoneStep.classList.remove(
                "hidden"
            );


            document
                .getElementById("otp")
                .value = "";


            confirmationResult = null;

        }
    );



/* =========================
   AUTH STATE
========================= */

onAuthStateChanged(
    auth,
    async (user) => {

        if (!user) {

            showLogin();

            return;
        }


        console.log(
            "Logged in:",
            user.uid
        );


        await loadUserProfile(
            user.uid
        );

    }
);



/* =========================
   LOAD PROFILE
========================= */

async function loadUserProfile(uid) {

    try {

        console.log(
            "Loading profile..."
        );


        const profileRef =
            doc(
                db,
                "users",
                uid
            );


        const profileSnap =
            await getDoc(
                profileRef
            );


        if (
            profileSnap.exists()
        ) {

            const data =
                profileSnap.data();


            console.log(
                "Existing profile found:",
                data
            );


            showDashboard(
                data
            );

        }


        else {

            console.log(
                "New user - profile required"
            );


            showProfilePage();

        }

    }


    catch (error) {

        console.error(
            "Profile loading error:",
            error
        );


        showMessage(
            "Unable to load your profile."
        );

    }

}



/* =========================
   SAVE FIRST PROFILE
========================= */

document
    .getElementById("saveProfile")
    .addEventListener(
        "click",
        saveProfile
    );


async function saveProfile() {

    const user =
        auth.currentUser;


    if (!user) {

        alert(
            "Please login first."
        );

        return;
    }


    const name =
        document
            .getElementById("userName")
            .value
            .trim();


    const age =
        Number(
            document
                .getElementById("userAge")
                .value
        );


    const height =
        Number(
            document
                .getElementById("userHeight")
                .value
        );


    const weight =
        Number(
            document
                .getElementById("userWeight")
                .value
        );


    if (
        !name ||
        !age ||
        !height ||
        !weight
    ) {

        alert(
            "Please complete all fields."
        );

        return;
    }


    try {

        await setDoc(
            doc(
                db,
                "users",
                user.uid
            ),
            {

                phone:
                    user.phoneNumber,

                name:
                    name,

                age:
                    age,

                height:
                    height,

                weight:
                    weight,

                waterToday:
                    0,

                waterDate:
                    getTodayDate(),

                updatedAt:
                    serverTimestamp(),

                createdAt:
                    serverTimestamp()

            }
        );


        showDashboard({

            name,
            age,
            height,
            weight,

            waterToday: 0,
            waterDate: getTodayDate()

        });


    }


    catch (error) {

        console.error(
            "Save profile error:",
            error
        );


        alert(
            "Could not save profile."
        );

    }

}



/* =========================
   SHOW DASHBOARD
========================= */

function showDashboard(data) {

    loginPage.classList.add(
        "hidden"
    );


    profilePage.classList.add(
        "hidden"
    );


    dashboard.classList.remove(
        "hidden"
    );



    /* =========================
       BASIC PROFILE
    ========================= */

    document
        .getElementById("dashName")
        .textContent =
            data.name || "there";


    document
        .getElementById("dashAge")
        .textContent =
            data.age || "--";


    document
        .getElementById("dashHeight")
        .textContent =
            data.height || "--";


    document
        .getElementById("dashWeight")
        .textContent =
            data.weight || "--";



    /* =========================
       BMI
    ========================= */

    if (
        data.height &&
        data.weight
    ) {

        const h =
            Number(data.height) / 100;


        const bmi =
            Number(data.weight) /
            (h * h);


        document
            .getElementById("dashBMI")
            .textContent =
                bmi.toFixed(1);


        let status;


        if (bmi < 18.5) {

            status =
                "Below usual range";

        }

        else if (bmi < 25) {

            status =
                "Within usual range";

        }

        else if (bmi < 30) {

            status =
                "Above usual range";

        }

        else {

            status =
                "Higher range";

        }


        document
            .getElementById("bmiStatus")
            .textContent =
                status;

    }



    /* =========================
       NUTRITION CALCULATIONS
    ========================= */

    const weight =
        Number(data.weight);

    const age =
        Number(data.age);

    const height =
        Number(data.height);


    if (
        weight &&
        age &&
        height
    ) {

        /*
         * General wellness estimates.
         * These are not medical prescriptions.
         */


        /*
         * Simple BMR estimate.
         * Sex/activity are not collected yet,
         * so this is only a rough estimate.
         */

        const calories =
            Math.round(
                (10 * weight) +
                (6.25 * height) -
                (5 * age) +
                5
            );


        /*
         * General protein estimate.
         */

        const protein =
            Math.round(
                weight * 0.8
            );


        /*
         * General hydration estimate.
         */

        const water =
            Math.round(
                weight * 35
            );


        const caloriesElement =
            document.getElementById(
                "dailyCalories"
            );


        const proteinElement =
            document.getElementById(
                "dailyProtein"
            );


        const waterElement =
            document.getElementById(
                "waterGoal"
            );


        if (caloriesElement) {

            caloriesElement.textContent =
                calories + " kcal";

        }


        if (proteinElement) {

            proteinElement.textContent =
                protein + " g";

        }


        if (waterElement) {

            waterElement.textContent =
                (water / 1000).toFixed(1) +
                " L";

        }



        /* =========================
           WATER TRACKER
        ========================= */

        let savedWater = 0;

        const today =
            getTodayDate();


        /*
         * If saved water belongs to today,
         * load it.
         *
         * If it is from another day,
         * start today's tracker from zero.
         */

        if (
            data.waterDate === today &&
            typeof data.waterToday === "number"
        ) {

            savedWater =
                data.waterToday;

        }


        todayWater =
            savedWater;


        const waterGoal =
            water;


        const waterGoalElement =
            document.getElementById(
                "waterTrackerGoal"
            );


        if (waterGoalElement) {

            waterGoalElement.textContent =
                (waterGoal / 1000).toFixed(1) +
                " L";

        }


        updateWaterUI(
            waterGoal
        );

    }

}



/* =========================
   WATER - ADD
========================= */

window.addWater =
    async function(amount) {

        todayWater += amount;


        updateWaterUI();


        await saveWaterData();

    };



/* =========================
   WATER - RESET
========================= */

window.resetWater =
    async function() {

        todayWater = 0;


        updateWaterUI();


        await saveWaterData();

    };



/* =========================
   WATER - UPDATE UI
========================= */

function updateWaterUI(goal = null) {

    const goalElement =
        document.getElementById(
            "waterTrackerGoal"
        );


    const intakeElement =
        document.getElementById(
            "waterIntake"
        );


    const progressElement =
        document.getElementById(
            "waterProgress"
        );


    const progressTextElement =
        document.getElementById(
            "waterProgressText"
        );


    const messageElement =
        document.getElementById(
            "waterMessage"
        );


    if (
        !goalElement ||
        !intakeElement ||
        !progressElement ||
        !progressTextElement
    ) {

        return;

    }


    if (!goal) {

        const goalText =
            goalElement.textContent;


        goal =
            parseFloat(goalText) *
            1000;

    }


    if (!goal || goal <= 0) {

        return;

    }


    const percentage =
        Math.min(
            Math.round(
                (todayWater / goal) * 100
            ),
            100
        );


    intakeElement.textContent =
        todayWater + " ml";


    progressElement.style.width =
        percentage + "%";


    progressTextElement.textContent =
        percentage +
        "% of your daily goal";


    if (
        messageElement
    ) {

        if (percentage >= 100) {

            messageElement.textContent =
                "🎉 Daily water goal completed!";

        }

        else {

            messageElement.textContent =
                "";

        }

    }

}



/* =========================
   SAVE WATER DATA
========================= */

async function saveWaterData() {

    const user =
        auth.currentUser;


    if (!user) {

        return;

    }


    try {

        await updateDoc(

            doc(
                db,
                "users",
                user.uid
            ),

            {

                waterToday:
                    todayWater,

                waterDate:
                    getTodayDate(),

                updatedAt:
                    serverTimestamp()

            }

        );


        console.log(
            "Water data saved:",
            todayWater
        );

    }


    catch (error) {

        console.error(
            "Water save error:",
            error
        );

    }

}



/* =========================
   PROFILE EDIT
========================= */

document
    .getElementById("editProfile")
    .addEventListener(
        "click",
        async () => {

            const user =
                auth.currentUser;


            if (!user) return;


            try {

                const snap =
                    await getDoc(
                        doc(
                            db,
                            "users",
                            user.uid
                        )
                    );


                if (!snap.exists()) {

                    return;

                }


                const data =
                    snap.data();


                document
                    .getElementById("editName")
                    .value =
                        data.name || "";


                document
                    .getElementById("editAge")
                    .value =
                        data.age || "";


                document
                    .getElementById("editHeight")
                    .value =
                        data.height || "";


                document
                    .getElementById("editWeight")
                    .value =
                        data.weight || "";


                document
                    .getElementById(
                        "profileModal"
                    )
                    .classList.remove(
                        "hidden"
                    );

            }


            catch (error) {

                console.error(
                    "Edit profile error:",
                    error
                );

            }

        }
    );



/* =========================
   UPDATE PROFILE
========================= */

document
    .getElementById("updateProfile")
    .addEventListener(
        "click",
        async () => {

            const user =
                auth.currentUser;


            if (!user) return;


            const name =
                document
                    .getElementById(
                        "editName"
                    )
                    .value
                    .trim();


            const age =
                Number(
                    document
                        .getElementById(
                            "editAge"
                        )
                        .value
                );


            const height =
                Number(
                    document
                        .getElementById(
                            "editHeight"
                        )
                        .value
                );


            const weight =
                Number(
                    document
                        .getElementById(
                            "editWeight"
                        )
                        .value
                );


            if (
                !name ||
                !age ||
                !height ||
                !weight
            ) {

                alert(
                    "Please complete all fields."
                );

                return;

            }


            try {

                await setDoc(

                    doc(
                        db,
                        "users",
                        user.uid
                    ),

                    {

                        name,
                        age,
                        height,
                        weight,

                        phone:
                            user.phoneNumber,

                        updatedAt:
                            serverTimestamp()

                    },

                    {
                        merge: true
                    }

                );


                document
                    .getElementById(
                        "profileModal"
                    )
                    .classList.add(
                        "hidden"
                    );


                /*
                 * Keep existing water data
                 * while updating profile.
                 */

                const currentWater =
                    todayWater;


                showDashboard({

                    name,
                    age,
                    height,
                    weight,

                    waterToday:
                        currentWater,

                    waterDate:
                        getTodayDate()

                });

            }


            catch (error) {

                console.error(
                    "Update profile error:",
                    error
                );


                alert(
                    "Could not update profile."
                );

            }

        }
    );



/* =========================
   CLOSE MODAL
========================= */

document
    .getElementById("closeModal")
    .addEventListener(
        "click",
        () => {

            document
                .getElementById(
                    "profileModal"
                )
                .classList.add(
                    "hidden"
                );

        }
    );



/* =========================
   LOGOUT
========================= */

document
    .getElementById("logout")
    .addEventListener(
        "click",
        async () => {

            await signOut(auth);

        }
    );



/* =========================
   PAGE FUNCTIONS
========================= */

function showLogin() {

    loginPage.classList.remove(
        "hidden"
    );


    profilePage.classList.add(
        "hidden"
    );


    dashboard.classList.add(
        "hidden"
    );

}


function showProfilePage() {

    loginPage.classList.add(
        "hidden"
    );


    profilePage.classList.remove(
        "hidden"
    );


    dashboard.classList.add(
        "hidden"
    );

}


function showMessage(text) {

    message.textContent =
        text;

}



/* =========================
   FIREBASE ERROR HANDLING
========================= */

function getFirebaseError(error) {

    if (
        error.code ===
        "auth/invalid-phone-number"
    ) {

        return "Invalid phone number.";

    }


    if (
        error.code ===
        "auth/too-many-requests"
    ) {

        return "Too many attempts. Please try again later.";

    }


    if (
        error.code ===
        "auth/quota-exceeded"
    ) {

        return "SMS limit reached. Please try again later.";

    }


    if (
        error.code ===
        "auth/invalid-verification-code"
    ) {

        return "Incorrect OTP.";

    }


    return (
        error.message ||
        "Something went wrong."
    );

}