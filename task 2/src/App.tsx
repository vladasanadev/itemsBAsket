import { useState } from "react";
import Header from "./Header";
import Good from "./Good";
import './index.css'

const initialgoods = ["Bread", "Cheese", "Butter", "Honey"];


function App() {
  const [selectedGood, setSelectedGood] = useState("Bread");
  const [goods, setGoods] = useState<string[]>(initialgoods);
  const [newGood, setNewGood] = useState("");

  const addGood = (good: string) => {
    setSelectedGood(good);
  };

  const removeGood = () => {
    setSelectedGood("");
  };
  const updateNewGood = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setNewGood(e.target.value)

 
  }
  const addNewGoods = () =>{
    setGoods([...goods,newGood])
    setNewGood("");
  }

  return (
    <div className="appContainer">
    <div className="mainContainer">
    <input value={newGood} onChange={(e) => updateNewGood(e)}  type="text" />
    <button onClick={addNewGoods}>ADD</button>
      <Header selectedGood={selectedGood} />
      <ul>
        {goods.map((good: string, key: number) => {
          return (
            <Good
              key={key}
              item={good}
              isSelected={selectedGood === good}
              addGood={addGood}
              removeGood={removeGood}
              showAddBtn = {selectedGood === ""}
            />
          );
        })}
      </ul>
    </div>
    </div>
  );
}

export default App;
