import express from 'express'
import usersRoutes from './routes/todo.js'

const app = express();
const PORT = 3000;

app.use('/', usersRoutes)

app.listen(PORT, () => {
    console.log("Server running on port : http://localhost");
})

