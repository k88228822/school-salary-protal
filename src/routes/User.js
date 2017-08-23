import React from 'react';
import { connect } from 'dva';
import styles from './User.css';
import UserComponent from "../components/user/UserComponent";

function User(props) {
  return (
    <div className={styles.normal}>
      <UserComponent {...props}/>
    </div>
  );
}

function mapStateToProps(state) {
  return {...state.user,...state.app};
}

export default connect(mapStateToProps)(User);
