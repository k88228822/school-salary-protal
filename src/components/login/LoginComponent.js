import React from 'react';
import styles from './LoginComponent.css';
import {Form, Icon, Input, Button, Checkbox, Layout, Card, Carousel, Row, Col} from 'antd';
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
          <img src={require('../../assets/bg9.jpg')}/>
          <img src={require('../../assets/bg1.jpg')}/>
          <img src={require('../../assets/bg10.jpg')}/>
          <img src={require('../../assets/bg2.jpg')}/>
          <img src={require('../../assets/bg3.jpg')}/>
          <img src={require('../../assets/bg4.jpg')}/>
          <img src={require('../../assets/bg5.jpg')}/>
          <img src={require('../../assets/bg6.jpg')}/>
          <img src={require('../../assets/bg7.jpg')}/>
          <img src={require('../../assets/bg8.jpg')}/>
        </Carousel>
      </div>
    )

  }

  function loginForm() {
    const {getFieldDecorator} = props.form;
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

  return (
    <div className={styles.normal}>
      {renderBg()}
      <div className={styles.contentBg}>
        <Row type="flex" justify="end" style={{width:'100%'}}>
          <Col>
          {loginForm()}
          </Col>
          <Col span={1}>{''}</Col>
        </Row>
        <Layout className={styles.layout}>

          <Header className={styles.header}>
            <img className={styles.headerImg} src={require('../../assets/header.png')}/>
          </Header>

          <Content className={styles.content}>
          </Content>

          <Footer className={styles.footer}>
            <text style={{color: '#585859'}}>Copyright © 2017版权所有 东北大学人事处 All Rights Reserved 校址：辽宁省沈阳市和平区文化路三巷11号
              邮编:110819
            </text>
          </Footer>

        </Layout>
      </div>

    </div>
  );
}

export default Form.create()(LoginComponent);
