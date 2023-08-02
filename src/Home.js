import React, { useContext } from 'react'
import Feed from './Feed'
import DataContext from './context/DataContext'

const Home = () => {

const {searchResults}=useContext(DataContext)

  return (
    <main className='Home'>
      
     {searchResults.length ?
     (<Feed searchResults={searchResults}/>):
     (<p style={{marginTop:"2em"}}>No Posts to display</p>)
     }
    </main>
   
  )
}

export default Home