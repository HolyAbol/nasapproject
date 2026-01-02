import { getAllLaunches } from './launches.controller.js'
import express from 'express'
const launchRouter=express.Router()
launchRouter.get('/launches',getAllLaunches)
export {launchRouter}