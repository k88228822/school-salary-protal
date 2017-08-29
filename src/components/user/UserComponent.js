import React from 'react';
import styles from './UserComponent.css';
import {Table, Card, Form, Icon, Button} from "antd";

const {Column, ColumnGroup} = Table;

class UserComponent extends React.Component{

 render(){
   return(
     <div ref='exportPdf' className={styles.normal}>
       <div>
         <Button onClick={() => {
           let exportPdf = $(this.refs.exportPdf)
           $(document).find('body').html(exportPdf)
           window.print()
           window.location.reload()
         }}>test</Button>
       </div>
       <Table
         loading={this.props.loading}
         style={{width: '100%', marginTop: 10}}
         columns={this.props.column1}
         pagination={false}
         dataSource={this.props.data} bordered
       />

       <Table
         loading={this.props.loading}
         style={{width: '100%', marginTop: 10}}
         columns={this.props.column2}
         pagination={false}
         dataSource={this.props.data} bordered
       />

       <Table
         loading={this.props.loading}
         style={{width: '100%', marginTop: 10, marginBottom: 20}}
         columns={this.props.column3}
         pagination={false}
         dataSource={this.props.data} bordered
       />
     </div>

   )
 }
}

export default Form.create()(UserComponent);
