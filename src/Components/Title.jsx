import React from "react";
import styles from './Title.module.css'


const Title = ({name}) => {
  return (
    <div className={styles.Title}>
      <h1>{name}</h1>
    </div>
  );
};

export default Title;
