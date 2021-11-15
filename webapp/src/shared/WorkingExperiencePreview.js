

import React from 'react';
import { Avatar, Button, Image, List } from 'antd';
import { beautifyDate } from './utility';

import { Link } from "react-router-dom";

const WorkingExperiencePreview = ({ title, id, name, startTime, endTime }) => (
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
      description={`${beautifyDate(startTime)} - ${beautifyDate(endTime)}`}
    />
    <Link to={`/company/${id}`}>
      <Button>View Company</Button>
    </Link>

  </List.Item>
);

export default WorkingExperiencePreview;
