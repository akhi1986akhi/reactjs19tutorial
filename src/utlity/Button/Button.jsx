import React from 'react'
import styles from '../../styles/button.module.css';
export default function Button({data}) {
  return (
        <button type={data.type}  className={styles.customBtn} onClick={data.onClick}>{data.label}</button>
  )
}
