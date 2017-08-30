import React from 'react';
import styles from './LoginComponent.css';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import {createAction} from "../../utils/index";

const FormItem = Form.Item;

function LoginComponent(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        props.dispatch(createAction('app/login')({...values}))
      }
    });
  }

  const {getFieldDecorator} = props.form;
  return (
    <div className={styles.normal}>
      <Form onSubmit={handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{required: true, message: '请输入工号'}],
          })(
            <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="请输入工号"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{required: true, message: '请输入密码'}],
          })(
            <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password" placeholder="请输入密码"/>
          )}
        </FormItem>
        <FormItem>
          <Button style={{width:300}}type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </FormItem>
      </Form>
    </div>
  );
}

export default Form.create()(LoginComponent);
