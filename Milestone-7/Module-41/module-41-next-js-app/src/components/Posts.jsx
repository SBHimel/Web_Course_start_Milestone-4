'use client'
import { use } from "react";

const Posts = ({postsPromis}) => {
    const posts = use(postsPromis);
    console.log('posts in psts component', posts);
    return (
        <div>
            <h2 className="text-4xl">Posts: {posts.length}</h2>
        </div>
    );
};

export default Posts;