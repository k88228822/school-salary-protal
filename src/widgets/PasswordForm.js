import React from 'react';
import styles from './PasswordForm.css';
import {Button, Form, Icon, Input,} from "antd";
import PropType from 'prop-types';

const FormItem = Form.Item

function PasswordForm(props) {
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
          props.handleSubmit(values);
        }
      }
    });
  }

  const {getFieldDecorator} = props.form;
  return (
    <div className={styles.normal}>
      <Form onSubmit={handleSubmit} className="login-form">
        {
          props.otherData.length>0?
          props.otherData.map((item, index) => {
            return (
              <FormItem label={item.label} key={index}>
                {getFieldDecorator(item.filedName, {
                  rules: [{required: true, message: item.message}],
                })(
                  <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} placeholder={item.message}/>
                )}
              </FormItem>
            )
          }):null
        }
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
          <Button style={{width: 300}} type="primary" htmlType="submit" className="login-form-button">
            确认修改
          </Button>
        </FormItem>
      </Form>
    </div>
  );
}

PasswordForm.propTypes = {
  handleSubmit: PropType.func.isRequired,
  otherData: PropType.array,
}

PasswordForm.defaultProps = {
  otherData: [],
}


export default Form.create()(PasswordForm);

