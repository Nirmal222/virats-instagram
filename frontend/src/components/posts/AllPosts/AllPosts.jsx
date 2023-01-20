import React from 'react'
import "../Posts.css"
import SinglePost from '../SinglePost/SinglePost'
const AllPosts = ({posts, loading}) => {
  return (
    <div id='allPosts-Container'>
        {posts?.map((post,index)=>{
            return <SinglePost post={post} key={index} />
        })}
    </div>
  )
}

export default AllPosts