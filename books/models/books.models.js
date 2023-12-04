import db from '../../db/db.js'

export const getItem = id => {
    try {
        const book = db?.books?.filter(book => book?.id === id)[0]
        return book
    } catch (err) {
        console.log('Error', err)
    }
}

export const listItems = () => {
    try {
        return db?.books
    } catch (err) {
        console.log('Error', err)
    }
}

export const editItem = (id, data) => {
    try {
        const index = db.books.findIndex(book => book.id === id)

        if (index === -1) throw new Error('Book not found')
        else {
            db.books[index] = data
            return db.books[index]
        }        
    } catch (err) {
        console.log('Error', err)
    }
}

export const addItem = data => {
    try {  
        const newBook = { id: db.books.length + 1, ...data }
        db.books.push(newBook)
        return newBook

    } catch (err) {
        console.log('Error', err)
    }
}

export const deleteItem = id => {
    try {
        // delete item from db
        const index = db.books.findIndex(book => book.id === id)

        if (index === -1) throw new Error('Book not found')
        else {
            db.books.splice(index, 1)
            return db.books
        }
    } catch (error) {
        
    }
}