import { launch } from "../../models/launches.model.js";

function getAllLaunches(req,res){
    return res.status(200).json(Array.from(launch.values()))
}
export {getAllLaunches}