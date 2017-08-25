import React from 'react';
import styles from './PasswordComponent.css';
import {Button, Form, Icon, Input,notification} from "antd";
import {createAction} from "../../utils/index";
import {connect} from "dva";
const FormItem=Form.Item

function PasswordComponent(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        if(values.password1!==values.password2) {
          notification['error']({
            message: '两次输入的密码不一致',
            description: ``,
            duration: 5,
            style: {height: 80, paddingBottom: 10},
          })
        }else{
          props.dispatch(createAction('app/changePassword')({...values}))
        }
      }

    });
  }

  const {getFieldDecorator} = props.form;
  return (
    <div className={styles.normal}>
      <Form onSubmit={handleSubmit} className="login-form">
        <FormItem label="原始密码">
          {getFieldDecorator('prePassword', {
            rules: [{required: true, message: '请输入原始密码密码'}],
          })(
            <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} placeholder="请输入原始密码"/>
          )}
        </FormItem>
        <FormItem label="新密码">
          {getFieldDecorator('password1', {
            rules: [{required: true, message: '请输入新密码'}],
          })(
            <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password" placeholder="请输入新密码"/>
          )}
        </FormItem>
        <FormItem label="确认输入的密码">
          {getFieldDecorator('password2', {
            rules: [{required: true, message: '确认输入的密码'}],
          })(
            <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password" placeholder="确认输入的密码"/>
          )}
        </FormItem>
        <FormItem>
          <Button style={{width:300}}type="primary" htmlType="submit" className="login-form-button">
            确认修改
          </Button>
        </FormItem>
      </Form>
    </div>
  );
}

function mapStateToProps(state) {
  return {...state.app};
}

export default connect(mapStateToProps)( Form.create()(PasswordComponent));

