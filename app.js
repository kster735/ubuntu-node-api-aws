const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

const users = [
	{
		"name": "John",
		"age": 32
	},
	{
		"name": "Jane",
		"age": 23
	},
	{
		"name": "Joe",
		"age": 27
	}
]


app.get('/', (req, res) => {
    res.send('<h1>This is working fine!</h1>')
})

app.get('/mynodeapp', (req, res) => {
    res.json(users)
})


app.listen(PORT, () => {
    console.log(`Start server on port ${PORT}.`)
})