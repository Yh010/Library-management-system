import express from 'express'
import cors from 'cors'

import bookRoutes from './books/routes/books.routes.js'

const index = express()
const port = 3000

/* Global middlewares */
index.use(cors())
index.use(express.json())

/* Routes */
index.use('/books', bookRoutes)

/* Server setup */
if (process.env.NODE_ENV !== 'test') {
    index.listen(port, () => console.log(`⚡️[server]: Server is running at https://localhost:${port}`))
}

export default index