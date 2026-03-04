// # ৩. মৌলিক Syntax

fetch("https://jsonplaceholder.typicode.com/users")
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
	});


// 🌊 1️⃣ ভাবো Fetch কী?
// fetch() = “আমি server থেকে কিছু data চাই”
// Browser → server → data আসবে
//  */


//   Load data 
// -----------(then version)-----======
const loadDataa = () =>{
  fetch("https://randomuser.me/api/")   // server কে data চাও promise of response
  .then(response => response.json())  // JSON string → JS object
  .then(data => console.log(data));   // console এ দেখাও
}
//   Load data 2
/* ==========Async/Await Version======== */
  const loadData = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    console.log(data);
  }
  
  // Load Post button
  const loadPosts = () =>{
    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
    .then(res => res.json())
    .then(json => {
      console.log(json);
      displayPost(json);
    });
  }

  // nicer kaj ta json data ke ui hisebe dekhanur jonno
  const displayPost = (posts)=>{
    posts.forEach((post)=>{
      console.log(post);
    });
  }