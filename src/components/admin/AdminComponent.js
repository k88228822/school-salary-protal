import React from 'react';
import styles from './AdminComponent.css';
import {Card} from "antd";
import { routerRedux } from 'dva/router';
import {connect} from "dva";
import {createAction} from "../../utils/index";

function AdminComponent(props) {

  function onCardPress(key) {
    switch (key){
      case 0://修改管理员密码
        props.dispatch(routerRedux.push({pathname:'/app/admin/changePassword'}))
        break;
      case 1://修改职工密码
        props.dispatch(routerRedux.push({pathname:'/app/admin/changeUserPassword'}))
        break;
    }
  }
  return (
    <div className={styles.normal}>

      <Card style={{ width: 300 ,fontWeight:500}} onClick={()=>{onCardPress(0)}}>
        <p>修改管理员密码</p>
      </Card>

      <Card onClick={()=>{onCardPress(1)}} style={{ width: 300 ,marginTop:20,fontWeight:500}} >
        <p>修改职工密码</p>
      </Card>

    </div>
  );
}

function mapStateToProps(state){
  return {
    ...state.app
  }
}

export default connect(mapStateToProps)(AdminComponent);
