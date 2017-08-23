import React from 'react';
import styles from './UserComponent.css';
import {Card} from "antd";

function UserComponent() {
  return (
    <div className={styles.normal}>
      <Card style={{ width: 300 }}>
        <p>查询</p>
      </Card>
      <Card style={{ width: 300 ,marginTop:20}}>
        <p>hello</p>
      </Card>
    </div>
  );
}

export default UserComponent;
