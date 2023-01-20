import React from 'react'
import "../Posts.css"
const SinglePost = ({post}) => {
  return (
    <div>
        <img src={`${post.url}`} alt="Post" id='post'/>
    </div>
  )
}

export default SinglePost