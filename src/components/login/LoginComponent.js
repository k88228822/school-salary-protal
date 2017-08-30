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
          speed={2000}
          pauseOnHover={false}
          autoplaySpeed={6000}
          className={styles.carousel}
        >
          <img className={styles.imageStyle} src={'http://202.118.27.233/myimages/bg1.jpg'}/>
          <img className={styles.imageStyle} src={'http://202.118.27.233/myimages/bg2.jpg'}/>
          <img className={styles.imageStyle} src={'http://202.118.27.233/myimages/bg3.jpg'}/>
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
        {loginForm()}
        <Layout className={styles.layout}>

          <Header className={styles.header}>

          </Header>

          <Content className={styles.content}>
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
