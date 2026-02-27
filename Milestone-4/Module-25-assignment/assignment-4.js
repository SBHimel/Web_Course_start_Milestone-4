
// <!--empty:  kichu na thakle eta dekhabe -->
const emptyState = document.getElementById("emptyState");

// console.log("Empty state element:", emptyState);


const interviewList = [];
const rejectedList = [];

let currentTab = "all";

const jobsContainer = document.getElementById("jobsContainer");
const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const jobCount = document.getElementById("jobCount");


// ----------------  Count function -----------

function updateCounts() {

    const total = document.querySelectorAll(".job-card").length;
    // console.log("Total jobs:", total);

    // interview count from array
    const interview = interviewList.length;
    // console.log( interview);

    // rejected count from array
    const rejected = rejectedList.length;
    // console.log( rejected);

    totalCount.innerText = total;
    interviewCount.innerText = interview;
    rejectedCount.innerText = rejected;

    if (currentTab === "all") {
        jobCount.innerText = total + " jobs";
    }
    else if (currentTab === "interview") {
        jobCount.innerText = interview + " of " + total + " jobs";
    }
    else if (currentTab === "rejected") {
        jobCount.innerText = rejected + " of " + total + " jobs";
        console.log(rejected, total);
    }

    // <!--empty:  kichu na thakle eta dekhabe -->
    // visible job count based on current tab
    let visibleCount = 0;

    if (currentTab === "all") {
        visibleCount = total;
    }
    else if (currentTab === "interview") {
        visibleCount = interview;
    }
    else if (currentTab === "rejected") {
        visibleCount = rejected;
    }


    // <!--empty:  kichu na thakle eta dekhabe -->

    // show / hide empty 
    if (visibleCount === 0) {
        emptyState.classList.remove("hidden");
        // console.log("Empty");
    }
    else {
        emptyState.classList.add("hidden");
        // console.log("Empty state hidden");
    }
}

//-------------- Filter ----------------

document.querySelectorAll(".tab-btn").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".tab-btn").forEach(btn => {
            btn.classList.remove("bg-black", "text-white");
            btn.classList.add("bg-gray-300", "text-black");
        });
        this.classList.remove("bg-gray-300", "text-black");
        this.classList.add("bg-black", "text-white");
        currentTab = this.dataset.tab;

        filterJobs();
        updateCounts();
    });
});


function filterJobs() {

    const allCards = document.querySelectorAll(".job-card");

    allCards.forEach(card => {

        if (currentTab === "all") {
            card.classList.remove("hidden");
        }
        else if (currentTab === "interview") {
            if (card.classList.contains("interview")) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        }
        else if (currentTab === "rejected") {
            if (card.classList.contains("rejected")) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        }
    });
}


// ------------- event-------------
// ------------- event-------------
// ------------- event-------------

jobsContainer.addEventListener("click", function (e) {

    const card = e.target.closest(".job-card");

    if (!card) return;

    // --------Interview----------

    // -----------------Interview----------
if (e.target.classList.contains("interview-btn")) {

    if (card.classList.contains("interview")) {
        // remove interview --> Not Applied
        card.classList.remove("interview");
        const index = interviewList.indexOf(card);
        if (index !== -1) interviewList.splice(index, 1);

        card.querySelector(".status").innerHTML =
            `<button class="btn btn-sm rounded-full font-semibold text-white bg-gray-500 shadow-md hover:bg-blue-600 transition-colors duration-300 text-[10px] whitespace-nowrap">
                NOT APPLIED
            </button>`;
    } else {
        // remove rejected if any
        const rejectedIndex = rejectedList.indexOf(card);
        if (rejectedIndex !== -1) rejectedList.splice(rejectedIndex, 1);

        card.classList.add("interview");
        card.classList.remove("rejected");

        if (!interviewList.includes(card)) interviewList.push(card);

        // ✅ Show INTERVIEW button
        card.querySelector(".status").innerHTML =
            `<button class="btn btn-sm rounded-full font-semibold text-white bg-green-500 shadow-md hover:bg-green-600 transition-colors duration-300 text-[10px] whitespace-nowrap">
                INTERVIEW
            </button>`;
    }
}
    // -----------------Rejected--------


    // -----------------Rejected--------
if (e.target.classList.contains("rejected-btn")) {

    if (card.classList.contains("rejected")) {
        card.classList.remove("rejected");
        const index = rejectedList.indexOf(card);
        if (index !== -1) rejectedList.splice(index, 1);

        card.querySelector(".status").innerHTML =
            `<button class="btn btn-sm rounded-full font-semibold text-white bg-gray-500 shadow-md hover:bg-blue-600 transition-colors duration-300 text-[10px] whitespace-nowrap">
                NOT APPLIED
            </button>`;
    } else {
        // remove interview if any
        const interviewIndex = interviewList.indexOf(card);
        if (interviewIndex !== -1) interviewList.splice(interviewIndex, 1);

        card.classList.add("rejected");
        card.classList.remove("interview");

        if (!rejectedList.includes(card)) rejectedList.push(card);

        // show Rejected button

        card.querySelector(".status").innerHTML =
            `<button class="btn btn-sm rounded-full font-semibold text-white bg-red-500 shadow-md hover:bg-red-600 transition-colors duration-300 text-[10px] whitespace-nowrap">
                REJECTED
            </button>`;
    }
}

    // ----------------Delete--------- 
    // ----------------Delete--------- 

    // ----------------Delete---------

const deleteBtn = e.target.closest(".delete-btn");

if (deleteBtn) {

    const interviewIndex = interviewList.indexOf(card);
    if (interviewIndex !== -1) {
        interviewList.splice(interviewIndex, 1);
    }

    const rejectedIndex = rejectedList.indexOf(card);
    if (rejectedIndex !== -1) {
        rejectedList.splice(rejectedIndex, 1);
    }

    card.remove();
}

    filterJobs();
    updateCounts();
});


updateCounts();