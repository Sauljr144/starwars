import Button from "@/components/atomic/atoms/Button";
import PlanetsTable from "@/components/atomic/molecules/PlanetsTable";

export default function Home() {
  return (
   <div className='container p-3 mx-auto scroll-mt-[100px] font-poppins mt-7'>
    <span className="text-lg font-starwars">Welcome, Ezra!</span>
    <h1 className="text-5xl mb-5 font-starwars">Posters</h1>
    <div className=" mb-8">
      <Button name="Planets"/>
      <Button name="Ships"/>
      <Button name="Characters"/>
    </div>
    <PlanetsTable/>
   </div>
  );
}
