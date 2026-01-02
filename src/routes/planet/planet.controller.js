import { getAllPlanets } from "../../models/planets.model.js"

function httpGetAllPlanets(req,res){
    return res.status(200).json(
    getAllPlanets().map(planet => ({
    keplerName: planet.kepler_name,
  })))

}
export {
  httpGetAllPlanets
};