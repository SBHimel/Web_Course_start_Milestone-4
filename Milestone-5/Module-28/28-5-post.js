const loadPosts2 = () =>{
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        // console.log(data);
        displayPosts(data);
    });
}
// nicer kaj ta json data ke ui hisebe dekhanur jonno
// ===============array of object make koreche
const displayPosts = (posts)=>{
    // 1. get the container
    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = ""
    // console.log(postContainer);
    
    posts.forEach(post =>{
        console.log(post.title);
        // 2. create HTMl element
        const li = document.createElement("li");
        li.innerText = post.title;
        console.log(li);

        // 3 . add li into container
        postContainer.appendChild(li)
    })

}
// for(let i=0; i<posts.length; i++){
    //     console.log(posts[i]);
    // }

    //ei same kaj ta for of dile

    // for(let post of posts){
    //     console.log(post);
    // }

    //ei same kaj ta forEach diye