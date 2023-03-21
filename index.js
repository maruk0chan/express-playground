import * as util from 'util' // has no default export
import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  // console.log(util.inspect(req))
  res.send(util.inspect(req))
})

app.get('/foobar', (req, res) => {
  res.status('201').json({ user: 'tobi' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
