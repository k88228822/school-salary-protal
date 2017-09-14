import React from 'react';
import styles from './PasswordComponent.css';
import {createAction} from "../../utils/index";
import {connect} from "dva";
import PasswordForm from "../../widgets/PasswordForm";
import {usernameKey} from "../../common/Constants";

function PasswordComponent(props) {

  function handleSubmit(values) {
    props.dispatch(createAction('app/changePassword')({...values,userName:window.localStorage.getItem(usernameKey)}))
  }

  return (
    <PasswordForm handleSubmit={handleSubmit} otherData={[{label:'原始密码',filedName:'prePassword',message:'请输入原始密码'}]}/>
  );
}

function mapStateToProps(state) {
  return {...state.app};
}

export default connect(mapStateToProps)(PasswordComponent);

