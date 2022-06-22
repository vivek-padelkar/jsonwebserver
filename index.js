import express from 'express'
import jsonServer from 'json-server'
const server = jsonServer.create()
const router = jsonServer.router('./assets/db.json') // <== Will be created later
const middlewares = jsonServer.defaults()
const port = process.env.JSONPORT // <== You can change the port

server.use(middlewares)
server.use(router)

server.listen(port)
