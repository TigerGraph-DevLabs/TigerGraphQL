

import React from 'react';
import { Avatar, Button, Image, List } from 'antd';
import { beautifyNumber } from './utility';

import { Link } from "react-router-dom";

const SchoolPreview = ({ id, name, studentNumber }) => (
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
      description={`${beautifyNumber(studentNumber)} students study here`}
    />
    <Link to={`/school/${id}`}>
      <Button>View School</Button>
    </Link>
  </List.Item>
);

export default SchoolPreview;
