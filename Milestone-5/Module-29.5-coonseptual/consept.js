


// API call করতে গিয়ে যদি সমস্যা হয়, তাহলে .catch() সেই error ধরবে।
const modalImage = document.getElementById("modalImage");
const modalCategory = document.getElementById("modalCategory");
const modalDescription = document.getElementById("modalDescription");
const modalPrice = document.getElementById("modalPrice");
const modalTitle = document.getElementById("modalTitle");



const treeDetailsModal = document.getElementById("tree-details-modal")

const allTreesbtn = document.getElementById("allTreesbtn");

const loadingSpinner = document.getElementById("loadingSpinner");

const treesContainer = document.getElementById("treesContainer");

const categoriesContainer = document.getElementById("categoriesContainer");

/* =========loading show hide korte function diclear kora and tar por jekhane jekhane dorkar sekhane funtioin call korlei hbe */

function showLoading() {
    loadingSpinner.classList.remove("hidden");
    treesContainer.innerHTML = "";
};
function hideLoading() {
    loadingSpinner.classList.add("hidden");
};


// Categories load + innerHTML version
async function loadCategories() {
    const res = await fetch("https://openapi.programming-hero.com/api/categories");
    const data = await res.json();

    // আগের button remove
    categoriesContainer.innerHTML = "";

    // সব button একসাথে innerHTML দিয়ে add করা
    data.categories.forEach(category => {
        categoriesContainer.innerHTML += `
            <button class="btn btn-outline w-full" onclick="selectCategory(${category.id}, this)">
                ${category.category_name}
            </button>
        `;
    });
}



// Category select + active button + fetch plants
async function selectCategory(categoryId, btn) {
    console.log(categoryId, btn);

    // loading spinner দেখানো
    showLoading();

    // সব button reset
    const allButtons = document.querySelectorAll("#categoriesContainer button, #allTreesbtn");
    allButtons.forEach(button => {
        button.classList.remove("btn-primary");
        button.classList.add("btn-outline");
    });

    // clicked button active
    btn.classList.add("btn-primary");
    btn.classList.remove("btn-outline");

    // API call for selected category
    const res = await fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`);
    const data = await res.json();
    console.log(data);

    // Display plants for this category
    displayTrees(data.plants);

    // hide loading spinner
    hideLoading();
};



// allTressbtn e click korle sob gula trees dekhate hobe

allTreesbtn.addEventListener("click", ()=>{

    // Update active button style
    const allButtons = document.querySelectorAll("#categoriesContainer button, #allTreesbtn");

    // console.log(allButtons);
    allButtons.forEach(btn => {
        btn.classList.remove("btn-primary");
        btn.classList.add("btn-outline");
    });

    allTreesbtn.classList.add("btn-primary");
    allTreesbtn.classList.remove("btn-outline");

    loadTrees();
})




/* ============ Tress and load display step 2 er kaj =========== */
/* 
{
    "id": 30,
    "image": "https://i.ibb.co.com/0jLycYdv/Water-Hyacinth-min.jpg",
    "name": "Water Hyacinth",
    "description": "A floating plant with violet flowers that provide shade to aquatic creatures. Known for rapid growth in ponds.",
    "category": "Aquatic Plant",
    "price": 250
}
 */
async function loadTrees() {
    showLoading();
    const res = await fetch
        ("https://openapi.programming-hero.com/api/plants");
    const data = await res.json();
    hideLoading();
    displayTrees(data.plants);
};

function displayTrees(trees) {
    console.log(trees);
    trees.forEach((tree) => {
        console.log(tree);
        const card = document.createElement("div")
        card.className = "card bg-white shadow-sm";
        card.innerHTML = `
        <figure>
           <img onclick="openTreeModal(${tree.id})" src="${tree.image}"
           alt="${tree.name}" 
           title = "${tree.name}"
           class="h-48 w-full object-cover hover:cursor-pointer"
           />
          </figure>
          <div class="card-body">
           <h2 class="card-title cursor-pointer hover:text-green-500" onclick="openTreeModal(${tree.id})">${tree.name}</h2>
           <p class="line-clamp-2">A card component has a figure, a body part, and inside body there
           are title and actions
           parts</p>
          <div class="badge badge-success">Success</div>
          <div class="card-actions flex      justify-between items-center">
           <h2 class="font-bold text-xl  text-[#1F2937]">${tree.price}</h2>
           <button class="btn btn-primary">Buy Now</button>
          </div
          </div>
         `;
        treesContainer.appendChild(card);

    })
}
// ===== modal ===

async function openTreeModal(treeId){
    console.log(treeId,"treeId");
    const res =await fetch(`https://openapi.programming-hero.com/api/plant/${treeId}`);
    const data =await res.json();
    const plantDetails = data.plants;
    console.log(plantDetails, "data")
    treeDetailsModal.showModal();
    modalTitle.textContent = plantDetails.name;
    modalImage.src = plantDetails.image;
    modalCategory.textContent = plantDetails.category;
    modalDescription.textContent = plantDetails.description;
    modalPrice.textContent = plantDetails.price;
}


loadCategories();
loadTrees();