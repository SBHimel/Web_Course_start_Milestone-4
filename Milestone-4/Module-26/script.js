// ===========================
// JOB DATA ARRAY
// ===========================
// Here we are storing all job information inside an array of objects

let jobs = [
    {
        id: 1,
        companyName: "TechNova Solutions",
        position: "Frontend Developer",
        location: "Dhaka, Bangladesh",
        type: "Full Time",
        salary: "40,000 BDT",
        description: "Build responsive web applications using modern JavaScript and Tailwind CSS.",
        status: "not_applied"   // default status
    },

    // same structure for other jobs
    {
        id: 2,
        companyName: "Creative Apps Ltd",
        position: "Junior Web Developer",
        location: "Remote",
        type: "Part Time",
        salary: "25,000 BDT",
        description: "Work on company websites and improve UI design.",
        status: "not_applied"
    },

    {
        id: 3,
        companyName: "DataCore",
        position: "React Developer",
        location: "Chattogram",
        type: "Full Time",
        salary: "50,000 BDT",
        description: "Develop scalable frontend systems and integrate APIs.",
        status: "not_applied"
    },

    {
        id: 4,
        companyName: "InnoTech",
        position: "UI Designer",
        location: "Sylhet",
        type: "Contract",
        salary: "30,000 BDT",
        description: "Design clean and user-friendly interfaces.",
        status: "not_applied"
    },

    {
        id: 5,
        companyName: "SoftHub",
        position: "Backend Developer",
        location: "Dhaka",
        type: "Full Time",
        salary: "60,000 BDT",
        description: "Build REST APIs and manage server-side applications.",
        status: "not_applied"
    },

    {
        id: 6,
        companyName: "CodeLab",
        position: "Intern Developer",
        location: "Remote",
        type: "Internship",
        salary: "15,000 BDT",
        description: "Assist senior developers in building web apps.",
        status: "not_applied"
    },

    {
        id: 7,
        companyName: "NextGen IT",
        position: "JavaScript Developer",
        location: "Khulna",
        type: "Full Time",
        salary: "45,000 BDT",
        description: "Develop interactive web features.",
        status: "not_applied"
    },

    {
        id: 8,
        companyName: "Bright Solutions",
        position: "Full Stack Developer",
        location: "Rajshahi",
        type: "Full Time",
        salary: "70,000 BDT",
        description: "Handle both frontend and backend development.",
        status: "not_applied"
    }
];


// ===========================
// GLOBAL VARIABLES
// ===========================

// this will store current selected tab
let currentTab = "all";

// getting elements from DOM
const jobsContainer = document.getElementById("jobsContainer");
const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const tabJobCount = document.getElementById("tabJobCount");


// ===========================
// UPDATE DASHBOARD FUNCTION
// ===========================
// this function updates the numbers in dashboard

function updateDashboard() {

    // total jobs
    totalCount.innerText = jobs.length;

    // filter interview jobs
    let interviewJobs = jobs.filter(job => job.status === "interview");

    // filter rejected jobs
    let rejectedJobs = jobs.filter(job => job.status === "rejected");

    interviewCount.innerText = interviewJobs.length;
    rejectedCount.innerText = rejectedJobs.length;
}


// ===========================
// RENDER JOBS FUNCTION
// ===========================
// this function shows jobs in UI depending on tab

function renderJobs() {

    // clear previous cards
    jobsContainer.innerHTML = "";

    let filteredJobs;

    // check which tab is selected
    if (currentTab === "all") {
        filteredJobs = jobs;
    } else {
        filteredJobs = jobs.filter(job => job.status === currentTab);
    }

    // update tab job count
    tabJobCount.innerText = filteredJobs.length + " jobs";

    // if no job found
    if (filteredJobs.length === 0) {
        jobsContainer.innerHTML = `
      <div class="text-center py-10 bg-base-100 rounded shadow">
        <div class="text-5xl mb-3">📃</div>
        <h3 class="text-lg font-semibold">No jobs available</h3>
        <p class="text-sm text-gray-500">
          Click back to All tab to see job opportunities
        </p>
      </div>
    `;
        return;
    }

    // loop through filtered jobs
    filteredJobs.forEach(job => {

        let badgeText = "Not Applied";
        let badgeClass = "badge";

        // check status for badge
        if (job.status === "interview") {
            badgeText = "Interview";
            badgeClass = "badge badge-success";
        }
        else if (job.status === "rejected") {
            badgeText = "Rejected";
            badgeClass = "badge badge-error";
        }

        // create new card div
        let card = document.createElement("div");
        card.className = "card bg-base-100 shadow";

        // insert job data inside card
        card.innerHTML = `
      <div class="card-body">

        <div class="flex justify-between items-center">
          <h3 class="font-bold">${job.companyName}</h3>
          <button onclick="deleteJob(${job.id})"
            class="text-sm text-gray-400">✖</button>
        </div>

        <p class="font-semibold">${job.position}</p>
        <p class="text-sm text-gray-500">
          ${job.location} • ${job.type} • ${job.salary}
        </p>

        <div class="my-2">
          <span class="${badgeClass}">${badgeText}</span>
        </div>

        <p class="text-sm">${job.description}</p>

        <div class="mt-4 space-x-2">
          <button onclick="setInterview(${job.id})"
            class="btn btn-sm btn-success">Interview</button>

          <button onclick="setRejected(${job.id})"
            class="btn btn-sm btn-error">Rejected</button>
        </div>

      </div>
    `;

        jobsContainer.appendChild(card);
    });
}


// ===========================
// STATUS CHANGE FUNCTIONS
// ===========================

function setInterview(id) {

    let job = jobs.find(j => j.id === id);

    // toggle system
    if (job.status === "interview") {
        job.status = "not_applied";
    } else {
        job.status = "interview";
    }

    updateDashboard();
    renderJobs();
}

function setRejected(id) {

    let job = jobs.find(j => j.id === id);

    if (job.status === "rejected") {
        job.status = "not_applied";
    } else {
        job.status = "rejected";
    }

    updateDashboard();
    renderJobs();
}


// ===========================
// DELETE FUNCTION
// ===========================

function deleteJob(id) {
    jobs = jobs.filter(job => job.id !== id);
    updateDashboard();
    renderJobs();
}


// ===========================
// TAB BUTTON EVENT LISTENER
// ===========================

document.querySelectorAll(".tab-btn").forEach(button => {

    button.addEventListener("click", function () {

        // remove active style from all
        document.querySelectorAll(".tab-btn").forEach(btn => {
            btn.classList.remove("btn-primary");
        });

        // add active style to clicked button
        this.classList.add("btn-primary");

        // update current tab
        currentTab = this.dataset.tab;

        renderJobs();
    });

});


// first load
updateDashboard();
renderJobs();