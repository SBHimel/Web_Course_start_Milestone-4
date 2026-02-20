// const section = document.getElementsByTagName('section');
const sections = document.querySelectorAll('section')
// console.log(sections);
for(const section of sections){
    // console.log(section);
    section.style.backgroundColor = 'lightblue';
    section.style.border = '3px solid green';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.padding = '10px';
}

// dynamic class-------------------
// for(const section of sections){
//     section.classList.add('section-card');
// }


// document.getElementById('players-container').childNodes[1].childNodes[1].parentNode.parentNode.parentNode


//------------createElement in HTML---------------
/* createElement → নতুন HTML element তৈরি করার জন্য use হয়।
এটা শুধু element create করে, page এ show করতে appendChild use করতে হয়। */

// step:1  creat element and set innerText or innerHTML

const newChild = document.createElement('li');
newChild.innerText = 'New footballer HIMEL';

//step: 2  find tha parent where you will add the child
const playersList = document.getElementById('player-list');

//step:3 append the child to the parent
playersList.appendChild(newChild);




//------------main thke section theke ul thke li creat
// 1. parent node
const mainContainer = document.getElementById('main-container');

// 2. crate child node
const placesSection = document.createElement('section');

//creat h1
const h1 = document.createElement('h1');
h1.innerText = 'Places I want to visit';
placesSection.appendChild(h1);

//creat ul e li set kora
const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'bandorbon';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Sundorbon';
ul.appendChild(li2);


placesSection.appendChild(ul);
//3. append placesSection to the mainContainer
mainContainer.appendChild(placesSection)



//--------------easier to create HTML

const booksSection = document.createElement('section');
booksSection.innerHTML = `
<h1>Books I need to read </h1>
<ul>
    <li>Physics</li>
    <li>Chemistry</li>
    <li>Math</li>
    <li>Biology</li>
</ul>

`
mainContainer.appendChild(booksSection)