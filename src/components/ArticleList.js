import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    const revisedPost = posts.map((post)=>{
        //console.log(post)
        return (
            <Article key={post.id} article={post} />
        )
    })
    
    return (
        <main>
            {revisedPost}
        </main>
    )
}

export default ArticleList;