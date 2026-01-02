
import { getAllLaunches ,addNewLaunch,existLaunchWithId, abortlaunchWithId }from "../../models/launches.model.js";

function HttpgetAllLaunches(req,res){
    return res.status(200).json(getAllLaunches())
}
function httpaddNewlaunch(req,res){
    if (!req.body.mission ||!req.body.rocket ||!req.body.launchDate ||!req.body.target){
        return res.status(400).json({
            error:'missing required launch property'
        })
    }
    const launches=req.body
    launches.launchDate = new Date(launches.launchDate)
    if(isNaN(launches.launchDate)){
        return res.status(400).json({
            error:"invalid date"
        })
    }
addNewLaunch(launches)
res.status(201).json(launches)
}
function httpAbortLaunch(req,res){
    const launchId =Number(req.params.id)
    if(!existLaunchWithId(launchId)){
        return res.status(400).json("error")
    }
   const aborted = abortlaunchWithId(launchId);
return res.status(200).json(aborted)
}

export{HttpgetAllLaunches,httpaddNewlaunch,httpAbortLaunch}