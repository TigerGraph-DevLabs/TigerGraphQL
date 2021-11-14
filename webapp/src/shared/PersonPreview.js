

import React from 'react';
import { Avatar, Button, List } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const PersonPreview = ({name, gender, height, age}) => (
  <List.Item>
    <List.Item.Meta
      avatar={<Avatar shape="square" size={48} icon={<UserOutlined />} />}
      title={name}
      description={`${gender}, ${height}cm, ${age} years old`}
    />
    <Button type="primary">View Detail</Button>
  </List.Item>
);

export default PersonPreview;
