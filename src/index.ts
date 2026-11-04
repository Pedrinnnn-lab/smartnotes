import express from "express"
import noteRouter from "./resources/note/note.router.js"

const app = express()
const PORT = Number(process.env.PORT) || 3333

app.use(express.json())

app.use("/v1/notes", noteRouter)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})