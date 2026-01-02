import express from "express"
import { getAllPlanets } from "./planet.controller.js"
const planetRouter = express.Router()
planetRouter.get("/planets",getAllPlanets)

export {planetRouter}