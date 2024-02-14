import React from "react";
import styles from "./Input.module.css";

const Seacrh = ({onKeyDown}) => {

  return (
    <div className={styles.user_input}>
      <input
        onKeyDown={onKeyDown}
        className={styles.input}
        type="text"
        placeholder="Enter Food item"
      ></input>
    </div>
  );
};

export default Seacrh;
