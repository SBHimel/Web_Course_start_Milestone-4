import Posts from "@/components/Posts";
import { Suspense, use } from "react";


const PostsPage = () => {

    const postsPromis  = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
    

    return (
        <div>
            <Suspense fallback ={ <h2 className="text-3xl">Loading posts...</h2> }>
                <Posts postsPromis = {postsPromis}></Posts>
               
            </Suspense>
        </div>
    );
};

export default PostsPage;