import React from 'react';
import styles from './UserComponent.css';
import {Table, Card, Form, Icon, Button, Dropdown, Menu} from "antd";
import {createAction} from "../../utils/index";

const {Column, ColumnGroup} = Table;

class UserComponent extends React.Component {

  // 构造
  constructor(props) {
    super(props);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.onPrintOnclick = this.onPrintOnclick.bind(this)
  }

  handleMenuClick(e) {
    this.props.dispatch(createAction('user/changeSelectKey')({selectedKey: e.key}))
  }

  onPrintOnclick() {
    let exportPdf = $(this.refs.exportPdf)
    $(document).find('body').html(exportPdf)
    window.print()
    window.location.reload()
  }

  render() {
    let selectedNum = parseInt(this.props.monthsSelectedKeys[0]);
    let currentData = this.props.data.length===0?[]:this.props.data[selectedNum][0];
    let time = currentData.time * 1000;
    let menu = (
      <Menu
        selectedKeys={this.props.monthsSelectedKeys}
        onClick={this.handleMenuClick}>
        {
          this.props.data.length === 0 ? null :
            this.props.data.map((item, index) => {
              return (
                <Menu.Item key={`${index}`}>
                  {new Date(item[0].time).getFullYear()}年{new Date(item[0].time).getMonth() + 1}月
                </Menu.Item>
              )
            })
        }
      </Menu>
    );

    return (
      <div className={styles.normal}>
        <div className={styles.selectContainer}>
          <Dropdown overlay={menu}>
            <Button>
              {new Date(currentData.time).getFullYear()}年{new Date(currentData.time).getMonth() + 1}月
              <Icon type="down"/>
            </Button>
          </Dropdown>
          <Button style={{marginLeft: 10}} onClick={this.onPrintOnclick}>打印</Button>
        </div>

        <div ref='exportPdf' className={styles.normal}>
          <text className={styles.titleText}>
            {new Date(currentData.time).getFullYear()}年{new Date(currentData.time).getMonth() + 1}月工资概况
          </text>
          <Table
            loading={this.props.loading}
            style={{width: '100%', marginTop: 10}}
            columns={this.props.column1}
            pagination={false}
            dataSource={this.props.data[selectedNum]} bordered
          />

          <Table
            loading={this.props.loading}
            style={{width: '100%', marginTop: 10}}
            columns={this.props.column2}
            pagination={false}
            dataSource={this.props.data[selectedNum]} bordered
          />

          <Table
            loading={this.props.loading}
            style={{width: '100%', marginTop: 10, marginBottom: 20}}
            columns={this.props.column3}
            pagination={false}
            dataSource={this.props.data[selectedNum]} bordered
          />
        </div>
      </div>

    )
  }
}

export default Form.create()(UserComponent);
