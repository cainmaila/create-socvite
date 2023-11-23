import express from 'express'
import compression from 'compression'
import path from 'path'
const PORT = process.env.PORT || 8080
const __dirname = new URL('.', import.meta.url).pathname
startServer()
function startServer() {
  const app = express()
  app.use(compression())
  app.get('/config', (_, res) => {
    res.json({})
  })
  app.use(express.static(path.join(__dirname, '..', 'dist')))
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'))
  })
  app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`)
  })
}
