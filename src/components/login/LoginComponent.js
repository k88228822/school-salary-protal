import React from 'react';
import styles from './LoginComponent.css';
import {Form, Icon, Input, Button, Checkbox, Layout, Card, Carousel} from 'antd';
import {createAction} from "../../utils/index";

const {Header, Footer, Content} = Layout;

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

  function renderBg() {
    return (
      <div className={styles.carousel}>
        <Carousel
          dots={false}
          effect={'fade'}
          autoplay
          pauseOnHover={false}
          autoplaySpeed={5000}
          className={styles.carousel}
        >
          <img className={styles.imageStyle} src={'http://oukxzn0vv.bkt.clouddn.com/17-8-30/9396048.jpg'}/>
          <img className={styles.imageStyle} src={'http://oukxzn0vv.bkt.clouddn.com/17-8-30/38605632.jpg'}/>
          <img className={styles.imageStyle} src={'http://oukxzn0vv.bkt.clouddn.com/17-8-30/53395676.jpg'}/>
        </Carousel>
      </div>
    )

  }

  function loginForm() {
    return (
      <Card title="请使用职工号登录" bordered={false} className={styles.card}>
        <Form onSubmit={handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{required: true, message: '请输入工号'}],
            })(
              <Input className={styles.formInput} prefix={<Icon type="user" style={{fontSize: 13}}/>}
                     placeholder="请输入工号"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{required: true, message: '请输入密码'}],
            })(
              <Input className={styles.formInput} prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                     placeholder="请输入密码"/>
            )}
          </FormItem>
          <FormItem>
            <Button className={styles.formBtn} type="primary" htmlType="submit">
              登录
            </Button>
          </FormItem>
        </Form>
      </Card>
    );
  }

  const {getFieldDecorator} = props.form;
  return (
    <div className={styles.normal}>
      {renderBg()}
      <div className={styles.contentBg}>
        <Layout className={styles.layout}>

          <Header className={styles.header}>

          </Header>

          <Content className={styles.content}>
            {loginForm()}
          </Content>

          <Footer className={styles.footer}>
            <text style={{color:'#585859'}}>Copyright © 2017版权所有 东北大学人事处 All Rights Reserved 校址：辽宁省沈阳市和平区文化路三巷11号 邮编:110819</text>
          </Footer>

        </Layout>
      </div>

    </div>
  );
}

export default Form.create()(LoginComponent);
