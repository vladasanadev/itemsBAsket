
interface GoodProps{
    key:number;
    selectedGood: string;
    item:string;
    removeGood: ()=> void;
    addGood: (item:string)=> void;



}

export default function Good(props:GoodProps) {
  return (
    <>
        <li key={props.key} style={{display:"flex", alignItems: "center" }}>
       
       {props.selectedGood === props.item ? (
       <button onClick={()=> {props.removeGood()}}>-</button>)
       :
         (<button onClick={()=> {props.addGood(props.item)}}>+</button>
         )}
          <div>{props.item}</div>
     </li>
    </>
  )
}
