import app from "./app.js"
import http from "http";
import {LoadPlanets} from "./models/planets.model.js"
const PORT = process.env.port || 8080;
const server = http.createServer(app)
await LoadPlanets()
server.listen(PORT,()=>{
    console.log(PORT)
})