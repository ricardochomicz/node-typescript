import express from "express";
import routes from "./routes";
import path from 'path'
import cors from 'cors';
import { errors } from 'celebrate'

const app = express()

// app.use(cors({
//     origin: ['42telecom.com.br', 'exemplo.com']
// }))
app.use(cors())

app.use(express.json())
app.use(routes)
const PORT = 3333


//rota estatica
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

//retornar erros da validacao - celebrate
app.use(errors())

app.listen(PORT, () => {
    console.log(`Server is running port ${PORT}`)
})