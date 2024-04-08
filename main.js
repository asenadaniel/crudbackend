import express from 'express';
import mongoose from 'mongoose';
import productRoute from './routes/product.route.js';
import Products from './Models/product.model.js';


const app = express()
mongoose.connection.setMaxListeners(15);

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routes
app.use('/api/products', productRoute)

app.get('/', (req, res) => {
  res.send('hello')
})

mongoose.connect('mongodb+srv://user:user@backend.4blzoua.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend')
  .then(() => {
    console.log('connected to database succesfully')
    app.listen(3000, () => {
      console.log('server is running')
    })
  })
  .catch(() => {
    console.log('connection to the database failed!')
  })