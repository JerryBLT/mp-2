import { useEffect, useState } from "react"
import BluePrint from "./components/FinalSpace.tsx"
import { Character } from "./interfaces/Character.ts"


function App() {
  const [data, setData] = useState<Character[]>([]); // Specify the type of data


  useEffect(()=>{
    async function fetchData(){
      const rawData = await fetch("https://finalspaceapi.com/api/v0/character");
      const results = await rawData.json();
      setData(results);
    }
    fetchData()
      .then(()=> console.log("Yayy!! Data fetched successfully"))
      .catch((e)=>console.log("No!! This happened:" + e));

  }, [data.length]);

  return (
    <>
      {data.map((Character) => (<BluePrint key={Character.id} data={Character} /> 
      ))}
    </>
  )
}

export default App
