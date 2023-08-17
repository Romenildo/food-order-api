/*
    É necessario instalar o @types/express e cors para o typescrypt saber os tipos deles
    express - para gerenciar a api
    cors - para configurar as rotas entre o front e back e eprmitir as credenciais
*/
import express from "express"
import cors from "cors"

//instancia um novo servidor do express
const app = express();

//adiciona o cors do front
app.use(cors({
    credentials: true,
    origin:["http://localhost:4200"]
}))

//adicionando rotas

//get All foods
app.get("/api/foods", (req, res)=>{
    res.send(foods)
})


//adicionando a porta ao servidor para escutar as requisicoes
const port = 5000
app.listen(port, ()=>{
    console.log("Server runnning...")
})