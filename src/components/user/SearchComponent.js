import React from 'react';
import styles from './SearchComponent.css';
import {connect} from "dva";
import {message,Table, Button, Icon, Menu, DatePicker, Form} from "antd";

const {MonthPicker} = DatePicker;
import moment from 'moment';
import {createAction} from "../../utils/index";

function SearchComponent(props) {
  const monthFormat = 'YYYY-MM'
  const {getFieldDecorator} = props.form;

  function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        if(values.firstDate.toDate()>values.lastDate.toDate()){
          message.info('日期顺序错误',2)
          return;
        }
        if(values.firstDate.toDate().getFullYear()!==values.lastDate.toDate().getFullYear())
        {
          message.info('请选择同一年',2)
          return;
        }
        props.dispatch(createAction('search/searchData')({
          firstDate:values.firstDate.toDate(),
          lastDate:values.lastDate.toDate()
        }))

      }
    });
  }

  return (
    <div className={styles.normal}>
      <Form className={styles.selectContainer} layout={'inline'} onSubmit={handleSubmit}>
        <Form.Item>
          <text className={styles.selectText}>从</text>
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('firstDate', {
            initialValue: moment(new Date().getFullYear() + '-1', monthFormat)
          })(
            <MonthPicker format={monthFormat}/>
          )}
        </Form.Item>
        <Form.Item>
          <text className={styles.selectText}> 到</text>
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('lastDate', {
            initialValue: moment(new Date().getFullYear() + '-12', monthFormat)
          })(
            <MonthPicker format={monthFormat}/>
          )}
        </Form.Item>
        <Form.Item>
          <Button type={"primary"} htmlType={'submit'}>查询</Button>
        </Form.Item>
      </Form>

      <div style={{marginTop: 20}}>
        <Table
          rowKey={record => record.uid}
          // size={'small'}
          loading={props.loading}
          style={{maxWith:'100%',marginTop: 10,marginBottom:20}}
          columns={props.column}
          pagination={false}
          dataSource={props.data}
          bordered
        />
      </div>

    </div>
  );
}

function mapStateToProps(state) {
  return {...state.search, loading: state.loading.models.search}
}

export default Form.create()(connect(mapStateToProps)(SearchComponent));
