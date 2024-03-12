import './App.css'
import Blogs from './component/Blogs/Blogs'
import Booksmarks from './component/Booksmarks/Booksmarks'
import Header from './component/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Blogs></Blogs>
        <Booksmarks></Booksmarks>
      </div>

    </>
  )
}

export default App
