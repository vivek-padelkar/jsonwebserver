import express from 'express'
import jsonServer from 'json-server'
import dontenv from 'dotenv'
const server = jsonServer.create()
const router = jsonServer.router('db.json') // <== Will be created later
const middlewares = jsonServer.defaults()

dontenv.config()
const port = process.env.JSONPORT || 5024 // <== You can change the port

server.use(middlewares)
server.use(router)

server.get('/', (req, res) => {
  res.send('welcome')
})
server.listen(port, () => {
  console.log('its running on port=' + port)
})
