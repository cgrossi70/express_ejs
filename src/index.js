import express from 'express';
import morgan from 'morgan'
import dotenv from 'dotenv';
import routes from './routes/routes'
import path from 'path'

dotenv.config()

const port = process.env.PORT || 3000
const app = express();

// Settings
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', '.ejs')

// middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root

// Routes
app.use(routes)

app.listen(port); 
console.log('Server is listening on port ' + port);