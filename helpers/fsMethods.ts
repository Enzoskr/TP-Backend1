import fs from "fs";
import { Spent } from "../interfaces/interfaces";

export const getWithFS = (file: string): Promise<Spent[]> => {
    return new Promise((resolve, reject) => {
        fs.readFile( `./${file}.json`, "utf8", (err, content) => {
            if (err) {
                reject(err);
            }
            resolve( JSON.parse(content))
        })
    })
}

export const saveWithFS = (file: string, content: Spent[]): Promise<void> => {

    return new Promise((resolve, reject) => {
        fs.writeFile(file + ".json", JSON.stringify(content), (err) => {
            if(err) {
                reject(err)
            }
            resolve(console.log('gasto guardado'));
            
        })

    })

}