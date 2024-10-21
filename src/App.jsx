
  import './App.css'
import Blogs from './component/blogs/Blogs'
import Bookmarks from './component/bookmarks/Bookmarks'
import Header from './component/headers/Header'

  function App() {


    return (
      <>
    
  <Header></Header>
   <div className='flex w-11/12 mx-auto'>
   <Blogs></Blogs>
   <Bookmarks></Bookmarks>
   </div>

      </>
    )
  }

  export default App
