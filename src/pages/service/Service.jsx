import React from 'react';
import { Link } from 'react-router-dom';
import Products from '../../components/products/Products';

export default function Service() {
  return (
  <>
   <ul>
    <li><Link to="/service/1">Service 1</Link></li>
    <li><Link to="/service/2">Service 2</Link></li>
    <li><Link to="/service/3">Service 3</Link></li>
    <li><Link to="/service/4">Service 4</Link></li>
   </ul>

    <hr/>

    <Products/>
    
  </>
  )
}
