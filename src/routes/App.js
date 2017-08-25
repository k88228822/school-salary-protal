import React from 'react';
import {connect} from 'dva';
import styles from './App.css';
import {Col, Layout, Menu, Row} from 'antd';
import {routerRedux} from 'dva/router';
import {Link} from 'react-router';
import {createAction} from "../utils/index";

class AppComponent extends React.Component {

  // 构造
  constructor(props) {
    super(props);
    this.onItemClick = this.onItemClick.bind(this);

  }

  onItemClick(data) {
    switch (data.key) {
      case '1':
        this.props.dispatch(routerRedux.push({pathname: '/app/user',query:{key:data.key}}));
        break;
      case '0':
        this.props.dispatch(routerRedux.push({pathname: '/app/admin/upload',query:{key:data.key}}))
        break;
      case '2':
        let pathname=this.props.rank===0?
          '/app/admin/changePassword':'/app/user/changePassword'
        this.props.dispatch(routerRedux.push({pathname,query:{key:data.key}}))
        break;
    }
  }

  render() {
    return (
      <div className={styles.normal}>
        <Layout className={styles.container}>
          <div className={styles.top}>
            <Row type="flex">
              <Col style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} span={12}>
                <text className={styles.leftText}>东北大学</text>
              </Col>
              <Col span={12}>
                <div className={styles.rightContainer}>
                  <Menu
                    mode="horizontal"
                    style={{borderBottomWidth: 0}}
                    selectedKeys={this.props.selectedKeys}
                    onClick={this.onItemClick}
                  >
                    {
                      this.props.title.map((item, index) => {
                        return (
                          <Menu.Item key={item.key}>
                            <Link to={item.url}>
                              <text className={styles.linkText}>{item.title}</text>
                            </Link>
                          </Menu.Item>
                        );
                      })
                    }
                  </Menu>
                </div>
              </Col>
            </Row>
          </div>

          <div className={styles.contentContainer}>
            {
              this.props.children
            }
          </div>
        </Layout>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {...state.app};
}

export default connect(mapStateToProps)(AppComponent);

