// ======================================
// দুটি array → এখানে thriving এবং struggling plant store হবে
// ======================================
let thrivingList = [];
let strugglingList = [];

// বর্তমানে কোন filter active আছে তা store করবে
// possible value:
// 'all-filter-btn'
// 'thriving-filter-btn'
// 'struggling-filter-btn'
let currentStatus = 'all'


// ======================================
// Count display elements
// ======================================
let total = document.getElementById("total");
let strugglingCount = document.getElementById("strugglingCount");
let thrivingCount = document.getElementById('thrivingCount');


// ======================================
// Filter buttons
// ======================================
const allFilterBtn = document.getElementById('all-filter-btn');
const thrivingFilterBtn = document.getElementById('thriving-filter-btn');
const strugglingFilterBtn = document.getElementById('struggling-filter-btn');


// ======================================
// All cards main section
// এখানেই original HTML card গুলো আছে
// ======================================
const allCardSection = document.getElementById('allCards');


// ======================================
// Main container → event delegation এর জন্য
// ======================================
const mainContainer = document.querySelector('main');


// ======================================
// Filtered section → thriving বা struggling render হবে এখানে
// ======================================
const filterSection = document.getElementById('filtered-section');



console.log(mainContainer);


// ======================================
// Count update function
// এই function UI তে count update করে
// ======================================
function calculateCount() {

    // total card count (HTML এর original card)
    total.innerText = allCardSection.children.length

    // thriving list length
    thrivingCount.innerText = thrivingList.length

    // struggling list length
    strugglingCount.innerText = strugglingList.length
}

// প্রথম load এ count দেখানোর জন্য call করা হয়েছে
calculateCount()



// ======================================
// Filter button click হলে এই function run হয়
// button style change + section show/hide + render
// ======================================
function toggleStyle(id) {

    // সব button কে gray করে দেওয়া হচ্ছে
    allFilterBtn.classList.remove('bg-black', 'text-white')
    thrivingFilterBtn.classList.remove('bg-black', 'text-white')
    strugglingFilterBtn.classList.remove('bg-black', 'text-white')

    allFilterBtn.classList.add('bg-gray-300', 'text-black')
    thrivingFilterBtn.classList.add('bg-gray-300', 'text-black')
    strugglingFilterBtn.classList.add('bg-gray-300', 'text-black')


    // কোন button click হয়েছে তা store করা হচ্ছে
    const selected = document.getElementById(id)

    // currentStatus update করা হচ্ছে
    currentStatus = id


    // selected button কে black করা হচ্ছে
    selected.classList.remove('bg-gray-300', 'text-black')
    selected.classList.add('bg-black', 'text-white')


    // ======================================
    // কোন filter active তার উপর ভিত্তি করে render হচ্ছে
    // ======================================
    if (id == 'thriving-filter-btn') {

        // original card hide
        allCardSection.classList.add('hidden');

        // filtered section show
        filterSection.classList.remove('hidden');

        // thrivingList থেকে card render
        renderThriving()

    } else if (id == 'all-filter-btn') {

        // original card show
        allCardSection.classList.remove('hidden');

        // filtered section hide
        filterSection.classList.add('hidden')

    } else if (id == 'struggling-filter-btn') {

        allCardSection.classList.add('hidden');

        filterSection.classList.remove('hidden');

        // strugglingList থেকে card render
        renderStruggling()
    }
}



// ======================================
// Event Delegation
// main container এর ভিতরের সব button click এখানে handle হবে
// ======================================
mainContainer.addEventListener('click', function (event) {

    // ======================================
    // Thrive button click
    // ======================================
    if (event.target.classList.contains('thriving-btn')) {

        // button → parent → parent = full card
        const parentNode = event.target.parentNode.parentNode;


        // card থেকে data নেওয়া হচ্ছে
        const plantName = parentNode.querySelector('.plantName').innerText
        const light = parentNode.querySelector('.light').innerText
        const water = parentNode.querySelector('.water').innerText
        const status = parentNode.querySelector('.status').innerText
        const notes = parentNode.querySelector('.notes').innerText


        // UI তে status update
        parentNode.querySelector('.status').innerText = 'Thrive'


        // object তৈরি
        const cardInfo = {
            plantName,
            light,
            water,
            status: 'Thrive',
            notes
        }


        // check already exists কিনা
        const plantExist = thrivingList.find(
            item => item.plantName == cardInfo.plantName
        )


        // না থাকলে thrivingList এ add
        if (!plantExist) {
            thrivingList.push(cardInfo)
        }
        strugglingList = strugglingList.filter(item => item.plantName != cardInfo.plantName)


        // count update
        calculateCount()

        if (currentStatus == "thriving-filter-btn") {
            renderThriving()
        }
        else if (currentStatus == "struggling-filter-btn") {
            renderStruggling()
        }
    }



    // ======================================
    // Struggle button click
    // ======================================
    else if (event.target.classList.contains('struggling-btn')) {

        const parentNode = event.target.parentNode.parentNode;


        // card থেকে data নেওয়া হচ্ছে
        const plantName = parentNode.querySelector('.plantName').innerText
        const light = parentNode.querySelector('.light').innerText
        const water = parentNode.querySelector('.water').innerText
        const status = parentNode.querySelector('.status').innerText
        const notes = parentNode.querySelector('.notes').innerText


        // UI status update
        parentNode.querySelector('.status').innerText = 'Struggle'


        // object তৈরি
        const cardInfo = {
            plantName,
            light,
            water,
            status: 'Struggle',
            notes
        }


        // strugglingList এ already আছে কিনা check
        const plantExist = strugglingList.find(
            item => item.plantName == cardInfo.plantName
        )


        // না থাকলে add
        if (!plantExist) {
            strugglingList.push(cardInfo)
        }


        // thrivingList থেকে remove করা হচ্ছে
        thrivingList = thrivingList.filter(
            item => item.plantName != cardInfo.plantName
        )


        // যদি struggling filter active থাকে → render
        if (currentStatus == "struggling-filter-btn") {
            renderStruggling();
        }

        // যদি thriving filter active থাকে → re-render
        if (currentStatus == "thriving-filter-btn") {
            renderThriving();
        }


        // count update
        calculateCount()
    }
    else if(event.target.classList.contains('btn-delete')) {

    // clicked card
    const parentNode = event.target.closest('.card');

    // plant name
    const plantName = parentNode.querySelector('.plantName').innerText;

    // thrivingList থেকে remove
    thrivingList = thrivingList.filter(item => item.plantName != plantName);

    // strugglingList থেকে remove
    strugglingList = strugglingList.filter(item => item.plantName != plantName);

    // original allCards section থেকে remove
    parentNode.remove();

    // filtered section থেকে remove / re-render
    if (currentStatus == "thriving-filter-btn") {
        renderThriving();
    } else if (currentStatus == "struggling-filter-btn") {
        renderStruggling();
    }

    // count update
    calculateCount();
}
})



// ======================================
// thrivingList থেকে UI card তৈরি
// ======================================
function renderThriving() {

    // আগে empty করা হচ্ছে
    filterSection.innerHTML = ''


    // thrivingList এর প্রতিটি item loop
    for (let thrive of thrivingList) {

        let div = document.createElement('div');

        div.className = 'card flex justify-between border p-8'

        // dynamic HTML তৈরি
        div.innerHTML = `
        <div class="space-y-6">

            <div>
                <p class="plantName text-4xl">${thrive.plantName}</p>
                <p class="latinName">Latin Name</p>
            </div>

            <div class="flex gap-2">
                <p class="light bg-gray-200 px-5">Bright Ibdicate</p>
                <p class="water bg-gray-200 px-5">weekly</p>
            </div>

            <p class="status">${thrive.status}</p>

            <p class="notes">New leaf unfurling by the east window</p>

            <div class="flex gap-5">
                <button class="thriving-btn bg-green-200 px-4 py-2">Thrive</button>
                <button class="struggling-btn bg-red-200 px-4 py-2">Struggle</button>
            </div>

        </div>

        <div>
            <button class="btn-delete bg-red-200 text-red-600 px-4 py-2">
                Delete
            </button>
        </div>
        `

        // section এ add করা হচ্ছে
        filterSection.appendChild(div)
    }
}



// ======================================
// strugglingList থেকে UI card তৈরি
// ======================================
function renderStruggling() {

    filterSection.innerHTML = ''


    for (let struggle of strugglingList) {

        let div = document.createElement('div');

        div.className = 'card flex justify-between border p-8'

        div.innerHTML = `
        <div class="space-y-6">

            <div>
                <p class="plantName text-4xl">${struggle.plantName}</p>
                <p class="latinName">Latin Name</p>
            </div>

            <div class="flex gap-2">
                <p class="light bg-gray-200 px-5">Bright Ibdicate</p>
                <p class="water bg-gray-200 px-5">weekly</p>
            </div>

            <p class="status">${struggle.status}</p>

            <p class="notes">New leaf unfurling by the east window</p>

            <div class="flex gap-5">
                <button class="thriving-btn bg-green-200 px-4 py-2">Thrive</button>
                <button class="struggling-btn bg-red-200 px-4 py-2">Struggle</button>
            </div>

        </div>

        <div>
            <button class="btn-delete bg-red-200 text-red-600 px-4 py-2">
                Delete
            </button>
        </div>
        `

        filterSection.appendChild(div)
    }
}