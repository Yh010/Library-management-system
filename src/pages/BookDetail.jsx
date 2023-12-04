import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

function BookDetail({ setBookToEdit }) {

    const [book, setBook] = useState([])

    const { bookId } = useParams()

    const getBook = async () => {
        try {
            /* FETCH */
            // const response = await fetch(`http://localhost:3000/books/${bookId}`)
            // const data = await response.json()
            // if (response.status === 200) {
            //     setBook(data)
            //     setBookToEdit(data)
            // }

            /* AXIOS */
            const response = await axios.get(`http://localhost:3000/books/${bookId}`)
            if (response.status === 200) {
                setBook(response.data)
                setBookToEdit(response.data)
            }
            
        } catch (error) {
            console.error('error', error)
        }
    }
  
    useEffect(() => { getBook() }, [])

    const deleteBook = async () => {
        try {
            /* FETCH */
            // const response = await fetch(`http://localhost:3000/books/${bookId}`, {
            //     method: 'DELETE'
            // })
            
            /* AXIOS */
            const response = await axios.delete(`http://localhost:3000/pets/${bookId}`)

            if (response.status === 200) window.location.href = '/'
        } catch (error) {
            console.error('error', error)
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', aligniItems: 'center' }}>
            <h2>Book Detail</h2>

            {book && (
                <>
                    <p>Book name: {book.name}</p>
                    <p>Book type: {book.type}</p>
                    <p>Book age: {book.pages}</p>
                    

                    <div style={{ display: 'flex', justifyContent: 'center', aligniItems: 'center' }}>
                        
                        <Link to={`/${book?.id}/edit`}>
                            <button style={{ marginRight: 10 }}>Edit book</button>
                        </Link>

                        <button
                            style={{ marginLeft: 10 }}
                            onClick={() => deleteBook()}
                        >
                            Delete book
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default BookDetail