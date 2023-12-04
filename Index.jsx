import { Suspense, lazy, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './Index.css'

const BookList = lazy(() => import ('./pages/BookList'))
const BookDetail = lazy(() => import ('./pages/BookDetail'))
const EditBook = lazy(() => import ('./pages/EditBook'))
const AddBook = lazy(() => import ('./pages/AddBook'))

function Index() {

  const [bookToEdit, setBookToEdit] = useState(null)

  return (
    <div className="Index">
      <Router>
        <h1>Library</h1>

        <Link to='/add'>
          <button>Add new book</button>
      </Link>

        <Routes>
          <Route path='/' element={<Suspense fallback={<></>}><BookList /></Suspense>}/>

          <Route path='/:petId' element={<Suspense fallback={<></>}><BookDetail setBookToEdit={setBookToEdit} /></Suspense>}/>

          <Route path='/:petId/edit' element={<Suspense fallback={<></>}><EditBook bookToEdit={bookToEdit} /></Suspense>}/>

          <Route path='/add' element={<Suspense fallback={<></>}><AddBook /></Suspense>}/>
        </Routes>

      </Router>
    </div>
  )
}

export default Index