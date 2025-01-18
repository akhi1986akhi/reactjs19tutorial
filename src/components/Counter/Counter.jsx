import React, { useState } from 'react'

export default function Counter() {

let [age, setAge]= useState(28)
function updateAge(){
    setAge(29)
    console.log(age);
}
  return (

    <>
    
    <h2>Counter Page</h2>

    <h6>My age is :{age}</h6>

    <button onClick={updateAge}>Update Age</button>
    </>


  )
}
