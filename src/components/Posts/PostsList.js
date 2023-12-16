import React from 'react'
import PostSummary from './PostSummary'
const PostList=( {posts,auth} ) => {
    return(
        <div className="post-list section">
           {posts && posts.map(post=>{
               return (
                  <PostSummary post={post} auth={auth} key={post.id}/>
               )
           })}
        </div>
        

        
        
    );
}
export default PostList;