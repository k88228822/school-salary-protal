import React from 'react';
import { connect } from 'dva';
import styles from './Admin.css';
import AdminComponent from "../components/admin/AdminComponent";

function Admin(props) {
  return (
    <div className={styles.normal}>
      <AdminComponent {...props}/>
    </div>
  );
}

function mapStateToProps(state) {
  return {...state.admin,...state.app};
}

export default connect(mapStateToProps)(Admin);
