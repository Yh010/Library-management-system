import express from 'express'
import cors from 'cors'
import swaggerUI from 'swagger-ui-express'
import swaggerJSdoc from 'swagger-jsdoc'

import bookRoutes from './books/routes/books.routes.js'

const index = express()
const port = 3000

// swagger definition
const swaggerSpec = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Books API',
            version: '1.0.0',
        },
        servers: [
            {
                url: `http://localhost:${port}`,
            }
        ]
    },
    apis: ['./books/routes/*.js'],
}

/* Global middlewares */
index.use(cors())
index.use(express.json())
index.use(
    '/api-docs',
    swaggerUI.serve,
    swaggerUI.setup(swaggerJSdoc(swaggerSpec))
)

/* Routes */
index.use('/books', bookRoutes)

/* Server setup */
if (process.env.NODE_ENV !== 'test') {
    index.listen(port, () => console.log(`⚡️[server]: Server is running at https://localhost:${port}`))
}

export default index