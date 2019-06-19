const express = require("express")
const path = require("path")

const app = express()

const port = process.env.PORT || 5000

app.use(express.static(path.resolve("dist")))

// build time gzip is preferred to using compression express plugin
app.get("*.js", (req, res, next) => {
  req.url += ".gz"
  req.set("Content-Encoding", "gzip")
  next()
})

app.get("*", (req, res) => {
  res.sendFile(path.resolve("dist", "index.html"))
})

app.listen(port, () => {
  // console.log(path.resolve('dist', 'index.html'))
  console.log(`Server is running on port ${port}`)
})
