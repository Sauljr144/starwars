'use client'
import getAllPlanets from "@/api/invetory-api"
import { Planets } from "@/types/Planets"
import { useEffect, useState } from "react"

const Posters = () => {

    const [planets, setPlanets] = useState<Planets[]>()

    useEffect(() => {
        const data = async () =>{
            setPlanets(await getAllPlanets())
        }
        data()
    }, [])


  return (
    <div>{planets?.map((planet, index) => <h3 className="text-white">{planet.name}</h3>)}</div>
  )
}

export default Posters