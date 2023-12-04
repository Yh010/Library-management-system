import supertest from 'supertest' // Import supertest
import server from '../../index' // Import the server object
const requestWithSupertest = supertest(server) // We will use this function to mock HTTP requests

describe('GET "/"', () => {
    test('GET "/" returns all books', async () => {
        const res = await requestWithSupertest.get('/books')
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual([
            {
            id: 1,
            name: 'Zero to one',
            type: 'Business',
            pages: 3,
            
            },
            {
                id: 2,
                name: 'Fido',
                type: 'dog',
                pages: 1,
                
            },
            {
                id: 3,
                name: 'Mittens',
                type: 'cat',
                pages: 2,
                
            },
        ])
    })
})

describe('GET "/:id"', () => {
    test('GET "/:id" returns given book', async () => {
        const res = await requestWithSupertest.get('/books/1')
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual(
            {
                id: 1,
                name: 'Rex',
                type: 'dog',
                pages: 3,
                
            }
        )
    })
})

describe('PUT "/:id"', () => {
    test('PUT "/:id" updates book and returns it', async () => {
        const res = await requestWithSupertest.put('/books/1').send({
            id: 1,
            name: 'Rexo',
            type: 'dogo',
            pages: 4,
            
        })
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual({
            id: 1,
            name: 'Rexo',
            type: 'dogo',
            pages: 4,
            
        })
    })
})

describe('POST "/"', () => {
    test('POST "/" adds new book and returns the added item', async () => {
        const res = await requestWithSupertest.post('/books').send({
            name: 'Salame',
            type: 'cat',
            pages: 6,
            
        })
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual({
            id: 4,
            name: 'Salame',
            type: 'cat',
            pages: 6,
          
        })
    })
})

describe('DELETE "/:id"', () => {
    test('DELETE "/:id" deletes given book and returns updated list', async () => {
        const res = await requestWithSupertest.delete('/books/2')
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual([
            {
                id: 1,
                name: 'Rexo',
                type: 'dogo',
                pages: 4,
                
            },
            {
                id: 3,
                name: 'Mittens',
                type: 'cat',
                pages: 2,
                
            },
            {
                id: 4,
                name: 'Salame',
                type: 'cat',
                pages: 6,
                
            }
        ])
    })
})