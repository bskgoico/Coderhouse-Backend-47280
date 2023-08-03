import express from 'express';
import { promises as fs } from 'fs';

const app = express();
const PORT = 4000
const PATH = "./users.json";

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Pagina inicial")
})

app.post('/users', async (req, res) => {
    console.log(req.body)
    res.send("Usuario creado")
})

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})