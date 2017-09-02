import React from 'react';
import {connect} from 'dva';
import styles from './Login.css';
import LoginComponent from "../components/login/LoginComponent";

function Login(props) {
  return (
    <div className={styles.normal}>
      <LoginComponent {...props}/>
    </div>
  );
}

function mapStateToProps(state) {
  return {...state.app,loading: state.loading.models.app};
}

export default connect(mapStateToProps)(Login);
