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



const container = document.getElementById("issuesContainer");

function loadIssues() {

    document.getElementById("loading").classList.remove("hidden");

    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")

        .then(res => res.json())

        .then(data => {

            showIssues(data.data);

            document.getElementById("loading").classList.add("hidden");

        });

}


function showIssues(issues) {

    container.innerHTML = "";

    issues.forEach(issue => {

        let borderColor = issue.status === "open" ? "border-green-500" : "border-purple-500";

        let card = document.createElement("div");

        card.className = `bg-white p-4 rounded shadow border-t-4 ${borderColor}`;

        card.innerHTML = `

<h3 class="font-bold">${issue.title}</h3>

<p class="text-sm text-gray-500">${issue.description}</p>

<p class="text-xs mt-2">Author: ${issue.author}</p>

<p class="text-xs">Priority: ${issue.priority}</p>

`;

        card.onclick = () => openModal(issue);

        container.appendChild(card);

    });

}






function openModal(issue) {

    document.getElementById("modalTitle").innerText = issue.title;

    document.getElementById("modalDesc").innerText = issue.description;

    document.getElementById("modalAuthor").innerText = "Author: " + issue.author;

    document.getElementById("modalPriority").innerText = "Priority: " + issue.priority;

    document.getElementById("issueModal").showModal();

}


function closeModal() {

    document.getElementById("issueModal").close();

}




function searchIssue() {

    let text = document.getElementById("searchInput").value;

    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`)

        .then(res => res.json())

        .then(data => {

            showIssues(data.data);

        });

}

loadIssues();