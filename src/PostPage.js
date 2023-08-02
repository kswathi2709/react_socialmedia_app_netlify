import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from './context/DataContext'

const PostPage = () => {

  const {posts, handleDelete}=useContext(DataContext)
   const {id} = useParams()
   const post= posts.find(post=>(post.id).toString() === id)


  return (
    <main className='PostPage'>
       <article className='post'>
   
      {post && 
          <> 
          <h2>{post.title}</h2>

          <p className='postData'>
          {post.datetime}</p>

          <p className='postBody'>
            {post.body}
          </p>

          <Link to={`/edit/${post.id}`}>
          <button className='editpost'> Edit Post </button> 
          </Link>
           <button className='deletepost' onClick={()=>
            handleDelete(post.id)}>Delete Post</button>
          </>}
          {!post && 
          <>
            <h2>Post Not Found</h2>
            <p> Well, that's disappointing!</p>
            <p>Visit our webpage</p>
          
          </>}



         
       </article>




    </main>
  )
}

export default PostPage