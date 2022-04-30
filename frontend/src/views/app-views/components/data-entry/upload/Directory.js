import React, { Component } from "react";
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

export class Directory extends Component {
  render() {
    return (
      <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory>
        <Button>
          <UploadOutlined /> Upload Directory
        </Button>
      </Upload>
    );
  }
}

export default Directory;
