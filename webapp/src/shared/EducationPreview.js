

import React from 'react';
import { Avatar, Button, Image, List } from 'antd';
import { beautifyDate } from './utility';

const EducationPreview = ({ name, startTime, endTime }) => (
  <List.Item>
    <List.Item.Meta
      avatar={
        <Avatar
          shape="square"
          size={48}
          src={
            <Image
              src={`${process.env.PUBLIC_URL}/school.png`}
              style={{ width: 48, backgroundColor: "#ccc" }}
              preview={false}
            />
          }
        />
      }
      title={name}
      description={`${beautifyDate(startTime)} - ${beautifyDate(endTime)}`}
    />
    <Button>View School</Button>
  </List.Item>
);

export default EducationPreview;
