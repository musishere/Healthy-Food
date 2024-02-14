import React from "react";
import styles from "./Foodlist.module.css";
import BuyButton from "./Components/BuyButton";



const FoodList = ({Fooditems}) => {

  return (
    <div className={styles.Foodlist}>
      {
      Fooditems.map((Fooditem)   => (
        <ul>
          <li>
           {onkeydown}
            {Fooditem}
            <BuyButton  HandleOnchangeInput={()=>console.log(`${Fooditem} Purchased`)}/>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default FoodList;
