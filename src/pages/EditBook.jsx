import React, { useState } from 'react'
import axios from 'axios'

function EditBook({ bookToEdit }) {

    const [bookName, setBookName] = useState(bookToEdit?.name)
    const [bookType, setBookType] = useState(bookToEdit?.type)
    const [bookPages, setBookAge] = useState(bookToEdit?.pages)
   
    const editBook = async () => {
        try {
            const petData = {
                id: bookToEdit.id,
                name: bookName,
                type: bookType,
                pages: bookPages,
               
            }

            /* FETCH */
            // const response = await fetch(`http://localhost:3000/books/${bookToEdit.id}`, {
            //     method: 'PUT',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(petData)
            // })

            /* AXIOS */
            const response = await axios.put(
                `http://localhost:3000/books/${bookToEdit.id}`,
                petData,
                { headers: { 'Content-Type': 'application/json' } }
            )
            
            if (response.status === 200) {
                window.location.href = `/${bookToEdit.id}`
            }
        } catch (error) {
            console.error('error', error)
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', aligniItems: 'center' }}>
            <h2>Edit Book</h2>
            
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
                <input type='text' value={bookPages} onChange={e => setBookAge(e.target.value)} />
            </div>

            <button
                style={{ marginTop: 30 }}
                onClick={() => editBook()}
            >
                Save changes
            </button>
        </div>
    )
}

export default EditBook