const express = require('express');
const app = express();
const PORT = 3001;
const router = require('./router')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use(router);

app.get('/', (req, res) => {
    return res.json({"home":"here"})
})

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})