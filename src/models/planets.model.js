
import {parse} from "csv-parse"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const planets =[]

const isHabitable=(planet)=>{
    return (planet['koi_disposition']==='CONFIRMED'&& planet['koi_insol']> 0.36 &&
         planet['koi_insol']<1.11 && planet ['koi_prad'] <1.6
        )}
function LoadPlanets(){
    return new Promise((resolve,reject)=>{

        fs.createReadStream(path.join(__dirname,'.','kepler.csv')).pipe(
            parse({
                comment:'#',
                columns:true
            })
        )
        .on('data',(data) =>{
            if(isHabitable(data)){
                planets.push(data)
            }
        })
        .on('err',(err)=>{
            console.log(err)
        reject(err);
    })
        

        .on('end',()=>{
            console.log(`${planets.length} planets has been found`)
            resolve();
        })
      })
}
function getAllPlanets(){
    return planets
}
export {getAllPlanets,LoadPlanets}