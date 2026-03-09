function login() {

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "admin123") {
        window.location.href = "index.html";
    }
    else {
        alert("Wrong username or password");
    }

}

// ========= html er element ke daka ===========
const modal = document.getElementById("issuesModal");

const issuesContainer = document.getElementById("issuesContainer");




/* ============= Search API section ============ */

let currentStatus = "all"; // default

async function searchIssues() {
    const searchText = document
    .getElementById("searchInput")
    .value;

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}`);
    const data = await res.json();

    let result = data.data;

    if(currentStatus !== "all"){
        result = result.filter(issue => issue.status === currentStatus);
    }

    displayIssues(result);
    UpdateCounting(result);

    
}



// <!--========== Load spenning ============ -->

const loadingSpinner = document.getElementById("loadingSpinner");

function showLoading() {
    loadingSpinner.classList.remove("hidden");
    issuesContainer.innerHTML = "";
}

function hideLoading() {
    loadingSpinner.classList.add("hidden");
}


// <!-- counting kora hobe h1 e -->

function UpdateCounting(issues){
    const issueCount = document.getElementById("issueCount");
    issueCount.innerHTML = `${issues.length} Issues`;
}


/*  All open closed button selection */

function setActive(btn) {

    const buttons = document.querySelectorAll(".tab-btn");

    buttons.forEach(function (button) {
        button.classList.remove("btn-primary", "text-white");
        button.classList.add("text-black");
    });

    btn.classList.remove("text-black");
    btn.classList.add("btn-primary", "text-white");
}



// ==================  button e data dukanu  ===================


//  open close button e filtering korte hbe jate click korle zoto gular status open/closed ache ta dekhay 

let allIssues = []; // সব issues save রাখার জন্য

function filterIssues(status, btn) {

    currentStatus = status; //JS সব সময় জানে কোন status currently active। eta serch er jonno darkar 

    setActive(btn); // button styling
    showLoading(); // spinner show

    setTimeout(() => {
        let filteredIssues;

        if (status === "all") {
            filteredIssues = allIssues;
        } else {
            filteredIssues = allIssues.filter(issue => issue.status === status);
        }

        displayIssues(filteredIssues);      // cards update
        UpdateCounting(filteredIssues);     // count update
        hideLoading();                       // spinner hide
    }, 200); // 200ms delay
}
// filterIssues()


//   <!--  ======= all card gula ===== -->

/* {
    "id": 1,
    "title": "Fix navigation menu on mobile devices",
    "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
    "status": "open",
    "labels": [
        "bug",
        "help wanted"
    ],
    "priority": "high",
    "author": "john_doe",
    "assignee": "jane_smith",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
} */

async function loadIssues() {

    showLoading(); //loading spinner er jonno

    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();
    // console.log(data);

    allIssues = data.data; // সব issue save করলাম karon open close button e filtering korte hbe jate click korle zoto gular status open/closed ache ta dekhay 

    displayIssues(data.data); // এখানে display function call

    hideLoading();  //loading spinning er jonno
}

function displayIssues(issues) {
    const issuesContainer = document.getElementById("issuesContainer");
    issuesContainer.innerHTML = "";

    issues.forEach(issue => {
        const div = document.createElement("div");

        // ekhane lebel[0] and label [1] er jonno  bug an help wanted lekha thakle ek design e dekhabe ar na hole arek design e dekhabe
        let label0Design = '';
        let label1Design = '';

        if (issue.labels[0] === "bug") {
            label0Design = `<div class="badge badge-error badge-outline bg-[#FECACA] text-[#EF4444]"><i class="fa-solid fa-bug"></i>${issue.labels[0]}</div>`;
        } else {
            label0Design = `<div class=" items-center text-center badge badge-error badge-outline bg-[#BBF7D0] text-[#00A96E]"><i class="fa-solid fa-circle-dollar-to-slot"></i>${issue.labels[0]}</div>`;
        }

        // label-1 variable তো বানানোই হবে, কিন্তু যদি labels[1] না থাকে তাহলে variable খালি থাকবে (""), তাই page এ কিছু দেখাবে না।

        if (issue.labels[1]) {
            if (issue.labels[1] === "help wanted") {
                label1Design = `<div class="badge badge-warning badge-outline bg-[#FDE68A] text-[#D97706]">
        <i class="fa-regular fa-life-ring"></i>${issue.labels[1]}</div>`;
            } else {
                label1Design = `<div class="badge badge-warning badge-outline bg-[#BBF7D0] text-[#00A96E]">
        <i class="fa-solid fa-circle-dollar-to-slot"></i>${issue.labels[1]}</div>`;
            }
        }

        // open closed status er card gular border top e color set kora

        let borderColor = "";
        let closedIcon = "";

        if (issue.status === "open") {
            borderColor = "border-t-4 border-green-500";
            closedIcon = `<img src="B13-A5-Github-Issue-Tracker/assets/Open-Status.png">`;
        }
        else {
            borderColor = "border-t-4 border-purple-500";
            closedIcon = `<img src="B13-A5-Github-Issue-Tracker/assets/Closed- Status .png" alt="">`;
        }

        // High medium low colore change
        let ability = "";

        if (issue.priority === "medium") {
            ability = `<div class="badge badge-outline text-[#6c6c06] font-semibold bg-[#f6f69e]">
        ${issue.priority}
    </div>`;
        }

        else if (issue.priority === "low") {
            ability = `<div class="badge badge-outline text-[#363636] font-semibold bg-[#d7d7c4]">
        ${issue.priority}
    </div>`;
        }

        else {
            ability = `<div class="badge badge-outline text-[#EF4444] font-semibold bg-[#FECACA]">
        ${issue.priority}
    </div>`;
        }



        div.innerHTML = `
        <div onclick="loadModal(${issue.id})"  class="card bg-base-100 shadow-md border h-80  ${borderColor}">
            <div class="card-body">
                <div class="flex justify-between items-start">
                    <div>
                        ${closedIcon}
                    </div>

                    <div>
                        ${ability}
                    </div>
                </div>

                <h2 class="card-title text-lg font-bold">
                    ${issue.title}
                </h2>

                <p class="text-gray-500 text-sm">
                    ${issue.description}
                </p>
                

                <div class="flex gap-2  items-center">
                    ${label0Design}
                    ${label1Design}
                </div>

                <div class="border-t pt-3 mt-3 text-sm text-gray-500">
                    <p>#${issue.id} by ${issue.author}</p>
                    <p>${issue.created_at}</p>
                </div>
            </div>
        </div>
        `;

        issuesContainer.appendChild(div);
    });
}

loadIssues();





// <!-- =========== Modal =============== -->

async function loadModal(modalId) {

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${modalId}`);
    const data = await res.json();

    const issue = data.data;

    displayModal(issue);

}


function displayModal(issue) {

    const modal = document.getElementById("issuesModal");

    modal.innerHTML = `
        <div class="modal-box max-w-2xl">

            <h2 class="text-2xl font-bold">${issue.title}</h2>

            <div class="text-sm text-gray-500 mt-2 flex gap-2">
                <span class="badge badge-success badge-sm">${issue.status}</span>
                <span>Opened by ${issue.author}</span>
                <span>•</span>
                <span>${issue.created_at}</span>
            </div>

            <div class="flex gap-2 mt-4">
                ${issue.labels.map(label =>
        `<span class="badge bg-red-100 text-red-600">${label}</span>`
    ).join("")}
            </div>

            <p class="mt-4 text-gray-600">
                ${issue.description}
            </p>

            <div class="bg-gray-100 p-4 rounded-lg mt-5 flex justify-between">

                <div>
                    <p class="text-sm text-gray-500">Assignee:</p>
                    <p class="font-semibold">${issue.assignee}</p>
                </div>

                <div class="pr-24">
                    <p class="text-sm text-gray-500">Priority:</p>
                    <span class="badge badge-error">${issue.priority}</span>
                </div>

            </div>

            <div class="modal-action">
                <form method="dialog">
                    <button class="btn btn-primary">Close</button>
                </form>
            </div>

        </div>
    `;

    modal.showModal();
}
// loadModal();



