const baseURL = 'https://swapi.info/api/'

export default async function getStarWarsData(type:string){
    const data = await fetch(`${baseURL}${type}`)
    return await data.json()
}