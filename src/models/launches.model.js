const launches =new Map();
let latestflightNumber = 100;
const launch ={
    flightNumber:100,
    mission: 'nigga balls',
    rocket:'kaboom-3000',
    launchDate:new Date('1 january,2027'),
    destination:'mohsen abdis crib',
    customer:['mohsen','bros'],
    success:true,
    upcoming:true
}
launches.set(launch.flightNumber,launch)
function getAllLaunches(){
    return Array.from(launches.values());
}
     function addNewLaunch(launch) {
  latestflightNumber++;

  launches.set(
    latestflightNumber,
    Object.assign(launch, {
      flightNumber: latestflightNumber,
      customer: ["mohsen", "bros"],
      success: true,
      upcoming: true,
    })
  );
}
function existLaunchWithId(launchId){
return launches.has(launchId)
}
function abortlaunchWithId(launchId){
  const aborted = launches.get(launchId)
  aborted.success=false
  aborted.upcoming=false
  return aborted
    
}
export {
    getAllLaunches,addNewLaunch,existLaunchWithId,abortlaunchWithId
}