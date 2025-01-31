const express = require('express');

const sequelize = require('./database/sequelize')
const moviesRouter = require('./models/movie')
const GenreRouter = require('./routes/genreRouters')
const PORT = 2345
const app = express();
app.use(express.json());
app.use(moviesRouter);
app.use(GenreRouter);

const server = async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error.message);
      }
}
server();
app.listen(PORT,()=>{
    console.log(`sever is listening to PORT:${PORT}`)
})
 