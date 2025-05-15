import { Planets } from "@/types/Planets";

export default async function getAllPlanets(): Promise<Planets[]>{
    const data = await fetch('https://swapi.info/api/planets')
    const planets = await data.json()
    return planets;
}