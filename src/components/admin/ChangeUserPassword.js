import React from 'react';
import PasswordForm from "../../widgets/PasswordForm";
import {createAction} from "../../utils/index";
import {connect} from "dva";

function ChangeUserPassword(props) {

  function handleSubmit(values) {
    props.dispatch(createAction('app/adminChangeUserPassword')({...values}))
  }

  return (
    <PasswordForm
      handleSubmit={handleSubmit}
      otherData={[{label:'用户名',filedName:'userName',message:'请输入用户名'}]}
    />
  );

}

function mapStateToProps(state) {
  return {
    ...state.app
  }
}

export default connect(mapStateToProps)(ChangeUserPassword);
