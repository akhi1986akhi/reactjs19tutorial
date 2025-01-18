import React from 'react';
// import '../../styles/style.css';
import { Link } from "react-router-dom";
import styles from '../../styles/Header.module.css';

export default function Header() {

  return (
    <>

      <ul className={styles.menuBar}>
        <div className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/service">Service</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <Link to="/login">Login</Link>
      </ul>


    </>
  )
}
