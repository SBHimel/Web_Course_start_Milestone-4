
const today = new Date();
console.log(today);
const date = new Date ("2062-10-19");
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear());

const specificDate = new Date(2006, 0, 26);
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate.toLocaleString("en-GB"));

// unix epoc
