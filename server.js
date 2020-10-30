const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const projectRouter = require('./projectRouter')
const actionRouter = require('./actionRouter')

const server = express()
server.use(helmet())
server.use(morgan('dev'))
server.use(express.json())

server.use('/api/projects', projectRouter)
server.use('/api/actions', actionRouter)


server.get('/', (req, res) => {
    res.send('Endpoint Running')
})

module.exports = server