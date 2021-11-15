

import React from 'react';
import { Avatar, Button, Image, List } from 'antd';

const WorkingExperiencePreview = ({ title, name, startTime, endTime }) => (
  <List.Item>
    <List.Item.Meta
      avatar={
        <Avatar
          shape="square"
          size={48}
          src={
            <Image
              src={`${process.env.PUBLIC_URL}/company.png`}
              style={{ width: 48, backgroundColor: "#ccc" }}
              preview={false}
            />
          }
        />
      }
      title={`${title} at ${name}`}
      description={`${startTime} - ${endTime}`}
    />
    <Button>View Company</Button>
  </List.Item>
);

export default WorkingExperiencePreview;
