const loadPosts2 = () =>{
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        // console.log(data);
        displayPosts(data);
    });
};
/* 
{
    "userId": 10,
    "id": 99,
    "title": "temporibus sit alias delectus eligendi possimus magni",
    "body": "quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia"
}
 */
const displayPosts = (posts)=>{
    // 1. get the container and empty the container
    const postsContainer = document.getElementById("post-container");
    postsContainer.innerHTML = "";
    posts.forEach((post) => {
        // 2. create element

        const postCard = document.createElement("div");
        postCard.innerHTML = `
        <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}
            </p>
        </div>`;

        // 3. add to the container
        postsContainer.append(postCard);
    });
}