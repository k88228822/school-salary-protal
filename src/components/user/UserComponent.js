import React from 'react';
import styles from './UserComponent.css';
import {Table, Card, Form, Icon} from "antd";

const {Column, ColumnGroup} = Table;

function UserComponent(props) {
  return (
    <div className={styles.normal}>
      <Table
      loading={props.loading}
      style={{width:'100%',marginTop:10}}
      columns={props.column1}
      pagination={false}
      dataSource={props.data} bordered
      />

      <Table
        loading={props.loading}
        style={{width:'100%',marginTop:10}}
        columns={props.column2}
        pagination={false}
        dataSource={props.data} bordered
      />

      <Table
        loading={props.loading}
        style={{width:'100%',marginTop:10,marginBottom:20}}
        columns={props.column3}
        pagination={false}
        dataSource={props.data} bordered
      />
    </div>
  );
}

export default Form.create()(UserComponent);
