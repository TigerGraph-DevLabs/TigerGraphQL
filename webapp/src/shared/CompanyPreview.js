

import React from 'react';
import { Avatar, Button, Image, List } from 'antd';

import { Link } from "react-router-dom";

const CompanyPreview = ({ id, name, zipcode }) => (
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
      title={`${name}`}
      description={`Zipcode: ${zipcode}`}
    />
    <Link to={`/company/${id}`}>
      <Button>View Company</Button>
    </Link>

  </List.Item>
);

export default CompanyPreview;
