import React from 'react';
import { connect } from 'dva';
import styles from './Login.css';
import LoginComponent from "../components/login/LoginComponent";

function Login(props) {
  return (
    <LoginComponent {...props}/>
  );
}

function mapStateToProps(state) {
  return {...state.app};
}

export default connect(mapStateToProps)(Login);
