import React from 'react';
import { useParams } from 'react-router-dom';

export default function ServiceDetails() {
const {id}=useParams();

if(id){
    return(
        <>
            <h2>Search Detail page for: {id}</h2>
        </>
    )
}
  return (
    <div>ServiceDetails</div>
  )
}
