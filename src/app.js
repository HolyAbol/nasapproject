import express from "express"
import cors from "cors"
import { planetRouter } from "./routes/planet/planet.routers.js"
import { launchRouter } from "./routes/launch/launches.router.js"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url";
import morgan from 'morgan'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()
app.use(express.json())
app.use(cors({
    origin:'http://localhost:3000'
}))
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname,'..','public','build')));
app.use('/api/launches',launchRouter)
app.use('/api/planets',planetRouter)
export default app;