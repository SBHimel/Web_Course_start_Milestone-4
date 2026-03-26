export default function Post({ post }) {
    console.log("Post component received:", post);
    return (
        <div className="card">
            <h4>{post.title}</h4>     {/* title দেখাবে */}
            <p>{post.body}</p>        {/* body দেখাবে */}
        </div>
    )
}