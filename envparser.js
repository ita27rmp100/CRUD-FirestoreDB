import fs from "fs"
export const parsing = async (envPath) => {
    const finalData = {}
    await new Promise((resolve,reject)=>{
        fs.readFile(envPath,"utf16le",(err,data)=>{
            if(err) {
                console.log(err)
                return reject(err)
            }
            else{
                let env = data.slice(1,data.length).split('\n')
                env.forEach((e)=>{
                    const splitted = e.split('=')
                    finalData[splitted[0]] = splitted[1]
                    return finalData
                })
                resolve()
            }
        })
    })
    return finalData
}