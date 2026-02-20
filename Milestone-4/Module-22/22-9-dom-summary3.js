console.log('first file')
//----------tagName diye access kora
const allSection = document.getElementsByTagName('section')
console.log(allSection);

//------------idName diye access kora
const firstTitle = document.getElementById('first-title');
console.log(firstTitle.innerText);
firstTitle.innerText = 'Prothom prothom valo laga'

//------------className diye access kora

const section = document.getElementsByClassName('section-item');
console.log(section);

// ----------------quary selector

