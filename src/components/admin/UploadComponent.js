import React from 'react';
import styles from './UploadComponent.css';
import {Upload, Icon,notification} from 'antd';
import {baseUrl, storageTokenKey} from "../common/Constants";
const Dragger = Upload.Dragger;


function UploadComponent(props) {

  let theprops = {
    name: 'file',
    multiple: true,
    showUploadList: false,
    action: baseUrl+'/file/postFile',
    headers:{
      'Authorization':`Bearer ${window.localStorage.getItem(storageTokenKey)}`,
      mode: 'cors',
    },
    data:{
    },
    onChange(info) {
      const status = info.file.status;
      if (status !== 'uploading'){
        // console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        if(info.file.response.successful) {
          notification['success']({
            message: `${info.file.name} 上传成功`,
            description: '',
            duration: 10,
            style: {height: 80, paddingBottom: 10},
          });
        }else{
          notification['error']({
            message: `${info.file.response.object.message}`,
            description: ``,
            duration: 6,
            style:{height:80,paddingBottom:10},
          });
        }
      } else if (status === 'error') {
        notification['error']({
          message: `fileName:${info.file.name} 上传失败`,
          description: ``,
          duration: 6,
          style:{height:80,paddingBottom:10},
        });
      }
    },
  };

  const openNotification = (file) => {
  };

  return (
    <div className={styles.normal}>
      <div style={{ marginTop: 100, height: 240 ,backgroundColor:'white'}}>
        <Dragger  {...theprops}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p style={{width:400}} className="ant-upload-text">点击或者拖拽上传文件(多文件上传请使用ie10及以上版本)</p>
          <p style={{marginTop:10}} className="ant-upload-hint">支持的格式：xlsx，xls</p>
        </Dragger>
      </div>
    </div>
  );

}

export default UploadComponent;
























