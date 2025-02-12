import React from 'react'
interface ItemProps {
  item: string;
  chosenItem: string;

}

export default function Item(props:ItemProps) {
  return (
    <div>{props.item}</div>
  )
}
