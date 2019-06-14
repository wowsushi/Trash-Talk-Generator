const express = require('express')
const exphbs = require('express-handlebars')
const bodyPhaser = require('body-parser')
const generateTrashTalk = require('./generate-trash-talk')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(bodyPhaser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const sentence = generateTrashTalk(req.body)
  res.render('index', { sentence, helpers: { [req.body.job]() { return 'checked' } } })
})

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${ port }`)
})

