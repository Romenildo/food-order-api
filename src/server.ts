/*
    É necessario instalar o @types/express e cors para o typescrypt saber os tipos deles
    express - para gerenciar a api
    cors - para configurar as rotas entre o front e back e eprmitir as credenciais
*/
import express from "express"
import cors from "cors"
import { foods, tags } from "./data"

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

//get food by name
app.get("/api/foods/search/:searchTerm", (req, res)=>{
    //pega o valor passado na requisicao dos parametros /search/hamburguer
    const searchTerm = req.params.searchTerm; 
    //verifica se tem algum food com aquele nome
    const filtred_foods = foods.filter(food=> food.name.toLowerCase()
    .includes(searchTerm.toLowerCase()))

    res.send(filtred_foods)
})

//get food by id
app.get("/api/foods/id/:foodId", (req, res)=>{
    const foodId = req.params.foodId;
    const food = foods.find(food=> food.id == foodId)

    res.send(food)
})

//get all tags
app.get("/api/foods/tags", (req, res)=>{
    res.send(tags)
})

//get foods by tag
app.get("/api/foods/tags/:tagName", (req, res)=>{
    const tagName = req.params.tagName; 
    //filtra por todas as comidas que possui a tag com tagName passado
    const tags_foods = foods.filter(food=> food.tags?.includes(tagName))

    res.send(tags_foods)
})

//adicionando a porta ao servidor para escutar as requisicoes
const port = 5000
app.listen(port, ()=>{
    console.log("Server runnning...")
})