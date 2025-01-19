import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Notfound() {

  const [countDown, setCountDown] = useState(10);
  const navigate = useNavigate();
  useEffect(()=>{
    const timer= setInterval(()=>{
      setCountDown((pre)=> pre - 1 );
    },1000);

    if(countDown===0){
      navigate('/');
    }
    return ()=> clearInterval(timer);

  },[countDown, navigate])

  return (
    <div style={{fontSize:'3rem', color:'red', textAlign:'center', marginTop:'20%'}}> 404- Not Found
    <div style={{fontSize:'2rem', marginTop:'1rem'}}>
      Redirecting to home page in {countDown} seconds...

    </div>
    
    </div>
  )
}
