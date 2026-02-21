// jobs data

let jobs = [

    {
        id: 1,
        company: "Google",
        position: "Frontend Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$2000",
        description: "Build UI",
        status: "all"
    },

    {
        id: 2,
        company: "Microsoft",
        position: "Backend Developer",
        location: "USA",
        type: "Full-time",
        salary: "$3000",
        description: "Build API",
        status: "all"
    },

    {
        id: 3,
        company: "Facebook",
        position: "UI Designer",
        location: "Remote",
        type: "Part-time",
        salary: "$1500",
        description: "Design UI",
        status: "all"
    },

    {
        id: 4,
        company: "Amazon",
        position: "Full Stack",
        location: "Canada",
        type: "Full-time",
        salary: "$2500",
        description: "Full stack work",
        status: "all"
    },

    {
        id: 5,
        company: "Netflix",
        position: "React Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$2800",
        description: "React apps",
        status: "all"
    },

    {
        id: 6,
        company: "Tesla",
        position: "JS Developer",
        location: "USA",
        type: "Full-time",
        salary: "$2600",
        description: "JS work",
        status: "all"
    },

    {
        id: 7,
        company: "Apple",
        position: "Frontend Dev",
        location: "UK",
        type: "Full-time",
        salary: "$2400",
        description: "Frontend work",
        status: "all"
    },

    {
        id: 8,
        company: "Spotify",
        position: "Web Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$2200",
        description: "Web apps",
        status: "all"
    }

];


let currentTab = "all";


// render cards

function renderJobs() {

    const container = document.getElementById("cardsContainer");

    container.innerHTML = "";

    let filteredJobs;

    if (currentTab === "all") {

        filteredJobs = jobs;

    } else {

        filteredJobs = jobs.filter(job => job.status === currentTab);

    }


    if (filteredJobs.length === 0) {

        document.getElementById("emptyMessage").classList.remove("hidden");

        container.classList.add("hidden");

    } else {

        document.getElementById("emptyMessage").classList.add("hidden");

        container.classList.remove("hidden");

    }


    filteredJobs.forEach(job => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `

<h3>${job.company}</h3>

<p>${job.position}</p>

<p>${job.location}</p>

<p>${job.type}</p>

<p>${job.salary}</p>

<p>${job.description}</p>

<p>Status: ${job.status}</p>

<button onclick="setInterview(${job.id})">
Interview
</button>

<button onclick="setRejected(${job.id})">
Rejected
</button>

<button onclick="deleteJob(${job.id})">
Delete
</button>

`;

        container.appendChild(card);

    });

    updateCounts();

}


// set interview

function setInterview(id) {

    const job = jobs.find(j => j.id === id);

    job.status = "interview";

    renderJobs();

}


// set rejected

function setRejected(id) {

    const job = jobs.find(j => j.id === id);

    job.status = "rejected";

    renderJobs();

}


// delete job

function deleteJob(id) {

    jobs = jobs.filter(job => job.id !== id);

    renderJobs();

}


// show tab

function showTab(tab) {

    currentTab = tab;

    renderJobs();

}


// update counts

function updateCounts() {

    const all = jobs.length;

    const interview = jobs.filter(j => j.status === "interview").length;

    const rejected = jobs.filter(j => j.status === "rejected").length;

    document.getElementById("allCount").innerText = all;

    document.getElementById("interviewCount").innerText = interview;

    document.getElementById("rejectedCount").innerText = rejected;

    document.getElementById("sectionCount").innerText = all + " Jobs";

}


// first load

renderJobs();