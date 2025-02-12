import { useEffect, useState } from 'react'
import Item from './Item';


function App() {
  const goods = ["Bread", "Cheese", "Butter", "Honey"];
  const [selectedGood, setSelectedGood] = useState("Bread");
  const [newGoods, setNewGoods] = useState([]);

  useEffect(()=> {

  }, [newGoods])

  const addItem = (el:string) =>{
    setSelectedGood(el);
    setNewGoods((prevGoods)=> [...prevGoods, el]);
    //newGoods.push(el)
  }

  const removeItem = (el) =>{
    setSelectedGood("");
    setNewGoods((prevGoods) => [...prevGoods])
  }

  return (
    <>
    <h2>{selectedGood ? `Selected: ${selectedGood}` : "No Items Selected"}</h2>
    <ul>
    {
      goods.map((el: string,key: number) => {
        return(
        <li key={key} style={{display:"flex", alignItems: "center" }}>
       
          {selectedGood === el ? (
          <button onClick={()=> {removeItem(el)}}>Remove Item</button>)
          :
            (<button onClick={()=> {addItem(el)}}>+</button>
            )}
          <Item item={el} selectedGood={selectedGood}/>
        </li>
      )})
    }
     </ul>
     
    </>
  )
}

export default App
