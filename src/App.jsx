
  import { useState } from 'react'
import './App.css'
import Blogs from './component/blogs/Blogs'
import Bookmarks from './component/bookmarks/Bookmarks'
import Header from './component/headers/Header'

  function App() {
    const [bookmarks,setbookmarks] = useState([])

    const handleMark = blog => {
     const newBookmarks = [...bookmarks , blog];
     setbookmarks(newBookmarks)
    }


    return (
      <>
    
  <Header></Header>
   <div className='flex w-11/12 mx-auto'>
   <Blogs handleMark={handleMark}></Blogs>
   <Bookmarks bookmarks={bookmarks}></Bookmarks>
   </div>

      </>
    )
  }

  export default App
