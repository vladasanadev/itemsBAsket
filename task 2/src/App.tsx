import { useState } from 'react'
import Header from './Header';
import Good from './Good';


function App() {
  const goods = ["Bread", "Cheese", "Butter", "Honey"];
  const [selectedGood, setSelectedGood] = useState("Bread");
 

  const addGood = (good:string) =>{
    setSelectedGood(good);

  }

  const removeGood = () =>{
    setSelectedGood("");
  }

  return (
    <>
 <Header selectedGood={selectedGood}/>
    <ul style={{ 
 
   
}}>
    {
      goods.map((el: string,key: number) => {
        return(
        <Good item={el} key={key} addGood={addGood} removeGood={removeGood}/>
      )})
    }
     </ul>
     
    </>
  )
}

export default App
