import React from 'react';
import styles from './TempComponent.css';
import {Button} from "antd";

function TempComponent() {
  return (
    <div className={styles.normal}>
      <div className={styles.imageContainer}>
        <img  className={styles.image} src={require('../../assets/first_bg.jpg')}/>
      </div>
      <div className={styles.selectContainer}>
        <Button  size={"small"}onClick={()=>{
          window.open('http://jcc.neu.edu.cn/northEastUcw/index.jsp')
        }} className={styles.button} type={"primary"}>
          <span className={styles.textSpan}>全民职工工资查询</span>
        </Button>

        <Button size={"small"} onClick={()=>{
          let url= window.location.href.includes('10.0.0.1')?
            'http://10.0.0.1:3000/app/login':
            'http://202.118.27.233:3000/app/login'
          window.open(url)
        }} className={styles.button} type={"primary"}>
          <span className={styles.textSpan}>人才派遣职工工资查询</span>
        </Button>

      </div>
    </div>
  );
}

export default TempComponent;
