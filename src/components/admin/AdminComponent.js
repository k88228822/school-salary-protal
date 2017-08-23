import React from 'react';
import styles from './AdminComponent.css';
import {Card} from "antd";
import { routerRedux } from 'dva/router';

function AdminComponent(props) {

  function onUploadClick(){
    props.dispatch(routerRedux.push({pathname:'/app/admin/upload'}))
  }

  return (
    <div className={styles.normal}>

      <Card style={{ width: 300 }}>
        <p>查询</p>
      </Card>

      <Card onClick={onUploadClick}style={{ width: 300 ,marginTop:20}}>
        <p>上传</p>
      </Card>

    </div>
  );


}

export default AdminComponent;
