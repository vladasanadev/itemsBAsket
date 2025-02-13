import React from 'react'

interface Header{
    selectedGood: string;
}

export default function Header(props:Header) {
  return (
 
           <h2>{props.selectedGood ? `Selected: ${props.selectedGood}` : "No Goods Selected"}</h2>

  )
}
