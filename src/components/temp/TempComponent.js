import React from 'react';
import styles from './TempComponent.css';
import {Button} from "antd";

function TempComponent() {
  return (
    <div className={styles.normal}>
      <Button onClick={()=>{
        window.open('http://jcc.neu.edu.cn/northEastUcw/index.jsp')
      }} className={styles.button} type={"primary"}>全民职工工资查询</Button>

      <Button onClick={()=>{
        let url= window.location.href.includes('10.0.0.1')?
          'http://10.0.0.1:3000/app/login':
          'http://202.118.27.233:3000/app/login'
        window.open(url)
      }} className={styles.button} type={"primary"}>人才派遣职工工资查询</Button>
    </div>
  );
}

export default TempComponent;
