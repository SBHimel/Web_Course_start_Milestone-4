// const section = document.getElementsByTagName('section');
const sections = document.querySelectorAll('section')
// console.log(section);
// for(const section of sections){
//     console.log(section);
//     section.style.backgroundColor = 'lightblue';
//     section.style.border = '3px solid green';
//     section.style.marginBottom = '5px';
//     section.style.borderRadius = '15px';
//     section.style.padding = '10px';
// }

// dynami class-------------------
for(const section of sections){
    section.classList.add('section-card');
}