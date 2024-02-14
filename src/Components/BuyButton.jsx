import React from 'react'
import styles from '../Foodlist.module.css'

const BuyButton = ({Fooditem,HandleOnchangeInput}) => {

  return (
    <button key={Fooditem} onClick={HandleOnchangeInput} type="button" className={styles.button}>
    Buy
  </button>
  )
}

export default BuyButton