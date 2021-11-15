

import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Avatar, Card, Col, Divider, Image, Rate, Row, Space, Typography } from 'antd';
import { useParams } from "react-router-dom";

const { Title } = Typography;

const SchoolDetail = () => {
  const params = useParams();
  // TODO: 
  // const GET_SCHOOL_DETAIL = gql`
  //   query GetSchoolDetail {
  //     // TODO
  //   }
  // `;
  return (
    <div>TODO: Show detail for {params.schoolID}</div>
  );
};

export default SchoolDetail;
