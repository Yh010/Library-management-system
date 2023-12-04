import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function BookList() {
    const [books, setBooks] = useState([])

    const getBooks = async () => {
        try {
            /* FETCH */
            // const response = await fetch('http://localhost:3000/pets')
            // const data = await response.json()
            // if (response.status === 200) setPets(data)

            /* AXIOS */
            const response = await axios.get('http://localhost:3000/pets')
            if (response.status === 200) setBooks(response.data)
            
        } catch (error) {
            console.error('error', error)
        }
    }
  
    useEffect(() => { getBooks() }, [])

    return (
        <>
            <h2>Book List</h2>

            {books?.map((book) => {
                return (
                    <div key={book?.id}>
                        <p>{book?.name} - {book?.type}</p>

                        <Link to={`/${book?.id}`}>
                            <button>Book detail</button>
                        </Link>
                    </div>
                )
            })}
        </>
    )
}

export default BookList