import { planets } from "../../models/planets.model.js"


function getAllPlanets(req,res){
    return res.status(200).json(
    planets.map(planet => ({
    keplerName: planet.kepler_name,
  })))

}
export {
getAllPlanets
};