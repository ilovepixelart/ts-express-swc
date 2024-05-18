/**
 * Module dependencies.
 */

import dotenv from 'dotenv'
dotenv.config()

import app from '../app'
import http from 'http'
import debug from 'debug'

import MongooseClient from '../clients/MongooseClient'
import MigrationClient from '../clients/MigrationClient'

import type { Server } from 'http'
import type { HttpError } from 'http-errors'

import '../handlers/UserHandler'

const log = debug('ts-express-swc:server')

/**
 * Normalize a port into a number, string, or false.
 */

const normalizePort = (val: string): boolean | number | string => {
  const port = parseInt(val, 10)
  if (isNaN(port)) return val // named pipe
  if (port >= 0) return port // port number
  return false
}

const port = normalizePort(process.env.PORT ?? '3000')

/**
 * Event listener for HTTP server "error" event.
 */

const onError = (error: HttpError): void => {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port.toString()}`

  // handle specific listen errors with friendly messages
  if (error.code === 'EACCES') {
    console.error(`${bind} requires elevated privileges`)
    process.exit(1)
  } else if (error.code === 'EADDRINUSE') {
    console.error(`${bind} is already in use`)
    process.exit(1)
  } else {
    throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

const onListening = (server: Server): void => {
  let bind = 'unknown'
  const addr = server.address()
  if (typeof addr === 'string') {
    bind = `pipe ${addr}`
  } else if (addr) {
    bind = `port ${addr.port.toString()}`
  }

  log(`Listening on ${bind}`)
}

const start = async (): Promise<void> => {
  await MongooseClient.connect()
  await MigrationClient.connect()

  /**
   * Get port from environment and store in Express.
   */

  app.set('port', port)

  /**
   * Create HTTP server.
   */

  const server = http.createServer(app)

  /**
   * Listen on provided port, on all network interfaces.
   */

  server.listen(port)
  server.on('error', (error: HttpError) => {
    onError(error)
  })
  server.on('listening', () => {
    onListening(server)
  })
}

start().catch((error: unknown) => {
  log(error)
  process.exit(1)
})
