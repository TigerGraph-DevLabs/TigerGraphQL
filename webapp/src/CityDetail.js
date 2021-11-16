

import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Avatar, Card, Col, Divider, Image, Row, Space, Typography } from 'antd';
import { useParams } from "react-router-dom";

const { Title } = Typography;

const CityDetail = () => {
  const params = useParams();
  // TODO: 
   const GET_CITY_DETAIL = gql`
     query GetCityDetail {
      DemoGraph {
      city (
        where : {
          id : {
              _eq : "${params.cityID}"
          }
        }
      ) {
        id
        name
        population
        taxRate
      }
    }
     }
   `;
  return (<Query query={GET_CITY_DETAIL}>
    {({ loading, data, error }) => !loading && (
      <Row gutter={16} align="center">
        <Col span={100}>
          <Space direction="vertical" size={16} style={{ width: "100%" }}>
            <Card>
              <Space direction="vertical" size={16} style={{ width: "100%", position: "relative", top: 16 }} align="center">
                <Avatar
                  size={128}
                  src={
                    <Image
                      src={`${process.env.PUBLIC_URL}/hometown.png`}
                      style={{ width: 128, backgroundColor: "#ccc" }}
                      preview={false}
                    />
                  }
                />
                <Title level={2}>{data.DemoGraph.city[0].name}</Title>
              </Space>
              <Divider />
              <Row align="middle">
                <Col span={4}>
                  <Image
                    src={`${process.env.PUBLIC_URL}/population.png`}
                    style={{ width: 32 }}
                    preview={false}
                  />
                </Col>
                <Col span={20}>
                  Population: {data.DemoGraph.city[0].population}
                </Col>
                <Col span={4}>
                  <Image
                    src={`${process.env.PUBLIC_URL}/taxrate.png`}
                    style={{ width: 32 }}
                    preview={false}
                  />
                </Col>
                <Col span={20}>
                  Tax rate: {data.DemoGraph.city[0].taxRate}
                </Col>
              </Row>
              </Card>
          </Space>
        </Col>
      </Row>
    )}
  </Query>
);
};

export default CityDetail;
