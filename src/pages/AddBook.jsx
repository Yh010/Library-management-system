import React, { useState } from 'react'
import axios from 'axios'

function AddBook() {

    const [bookName, setBookName] = useState()
    const [bookType, setBookType] = useState()
    const [bookAge, setBookPages] = useState()
   

    const addBook = async () => {
        try {
            const bookData = {
                name: bookName,
                type: bookType,
                pages: bookAge,
               
            }

            /* FETCH */
            // const response = await fetch('http://localhost:3000/pets/', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(bookData)
            // })

            // if (response.status === 200) {
            //     const data = await response.json()
            //     window.location.href = `/${data.id}`
            // }

            /* AXIOS */
            const response = await axios.post(
                'http://localhost:3000/pets/',
                bookData,
                { headers: { 'Content-Type': 'application/json' } }
            )
                
            if (response.status === 200) window.location.href = `/${response.data.id}`

        } catch (error) {
            console.error('error', error)
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', aligniItems: 'center' }}>
            <h2>Add Book</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Book name</label>
                <input type='text' value={bookName} onChange={e => setBookName(e.target.value)} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Book type</label>
                <input type='text' value={bookType} onChange={e => setBookType(e.target.value)} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Book pages</label>
                <input type='text' value={bookAge} onChange={e => setBookPages(e.target.value)} />
            </div>

            <button
                style={{ marginTop: 30 }}
                onClick={() => addBook()}
            >
                Add book
            </button>
        </div>
    )
}

export default AddBook