

import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Avatar, Card, Col, Divider, Image, Rate, Row, Space, Typography } from 'antd';
import { useParams } from "react-router-dom";

const { Title } = Typography;

const CompanyDetail = () => {
  const params = useParams();
  // TODO: 
  // const GET_COMPANY_DETAIL = gql`
  //   query GetCompanyDetail {
  //     // TODO
  //   }
  // `;
  return (
    <div>TODO: Show detail for {params.companyID}</div>
  );
};

export default CompanyDetail;
