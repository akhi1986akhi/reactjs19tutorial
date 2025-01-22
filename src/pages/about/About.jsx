import React, { useContext } from 'react'
import Counter from '../../components/Counter/counter'
import Button from '../../utlity/Button/Button'
import AppContext from '../../context/AppContext';

export default function About() {
  const {message, setMessage}= useContext(AppContext);
  
  return (
    <>
    <Counter/>
    <hr/>
    <Button data={{type:'button',label:'Submit', onclick:'onClick'}}/>
    <Button data={{type:'button',label:'Update',onclick:'onClick'}}/>
    <Button data={{type:'button',label:'view More',onclick:'onClick'}}/>

    <hr></hr>

    {message}

    <button onClick={()=> setMessage('This message is updated by about page')}>Update Message</button>


    </>


  )
}
