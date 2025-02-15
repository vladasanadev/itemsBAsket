import './index.css'
 
interface GoodProps {
  isSelected: boolean;
  item: string;
  removeGood: () => void;
  addGood: (item: string) => void;
  showAddBtn: string;
}

export default function Good({isSelected, item, removeGood, addGood, showAddBtn}: GoodProps) {
  return (
    <>
      <li>
        {isSelected ? (
          <button
            onClick={() => 
            removeGood()}
          >
            -
          </button>
        ) : (
            // showAddBtn &&
          <button
            onClick={() => 
              addGood(item)}
          >
            +
          </button>
        )}
        <div>{item}</div>
      </li>
    </>
  );
}
