

import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Avatar, Card, Col, Divider, Image, Rate, Row, Space, Typography } from 'antd';
import { useParams } from "react-router-dom";

const { Title } = Typography;

const CityDetail = () => {
  const params = useParams();
  // TODO: 
  // const GET_CITY_DETAIL = gql`
  //   query GetCityDetail {
  //     // TODO
  //   }
  // `;
  return (
    <div>TODO: Show detail for {params.cityID}</div>
  );
};

export default CityDetail;
