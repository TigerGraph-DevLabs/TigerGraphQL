

import React from 'react';
import { Avatar, Button, Image, List } from 'antd';

import { Link } from "react-router-dom";

const PersonPreview = ({ id, name, gender, height, age }) => (
  <List.Item>
    <List.Item.Meta
      avatar={
        <Avatar
          shape="square"
          size={48}
          src={
            <Image
              src={`${process.env.PUBLIC_URL}/avatar_${gender}.png`}
              style={{ width: 48, backgroundColor: "#ccc" }}
              preview={false}
            />
          }
        />
      }
      title={name}
      description={`${gender}, ${height}cm, ${age} years old`}
    />
    <Link to={`/person/${id}`}>
      <Button>View Person</Button>
    </Link>
  </List.Item>
);

export default PersonPreview;
