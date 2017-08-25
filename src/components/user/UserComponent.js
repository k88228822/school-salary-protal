import React from 'react';
import styles from './UserComponent.css';
import {Table, Card, Form, Icon} from "antd";
const { Column, ColumnGroup } = Table;

function UserComponent(props) {
  return (
    <div className={styles.normal}>
      <Table
        loading={props.loading}
        scroll={{x:'400%'}}
        style={{width:'100%'}}
        columns={props.columns}
        dataSource={props.data} bordered/>
    </div>
  );
}

export default Form.create()(UserComponent);
