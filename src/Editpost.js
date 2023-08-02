import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from './context/DataContext'

const Editpost = () =>
{
  const {posts,handleEdit,editTitle, setEditTitle, editBody, setEditBody}=useContext(DataContext)
   const {id}= useParams()
   const post = posts.find(post=>(post.id).toString()===id)
  

   useEffect(()=>{
    if(post){
        setEditTitle(post.title)
        setEditBody(post.body)
       }
   },[post, setEditTitle, setEditBody])
   

 

  return (
   <main className='NewPost'>
    {editTitle && 
    <>
       <h2>Edit post</h2>
       <form className='newPostForm' onSubmit={(e)=>e.preventDefault()}>
       
       <label htmlFor='editTitle'>Title:</label>
                <input
                    id='editTitle'
                    type="text"
                    required
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)} />

                <label htmlFor='editBody'>Post:</label>
                <textarea
                    id='editBody'
                    type="text"
                    required
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)} />
                     <button className='editbutton' type='submit' onClick={()=>handleEdit(post.id)}>Submit</button>
       </form>
     
    
    
    
    </>}
    
    
    
     </main>
  )
}

export default Editpost