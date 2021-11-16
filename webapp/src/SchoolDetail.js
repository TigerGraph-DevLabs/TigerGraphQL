

import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Avatar, Card, Col, Divider, Image, Row, Space, Typography } from 'antd';
import { Link, useParams } from "react-router-dom";

const { Title } = Typography;

const SchoolDetail = () => {
  const params = useParams();
  // TODO: 
   const GET_SCHOOL_DETAIL = gql`
     query GetSchoolDetail {      
      DemoGraph {
        school (
          where : {
            id : {
              _eq : "${params.schoolID}"
            }
          }
        ) {
            id
            name
            studentNumber
            locate_at_To_city {
              to {
                  id
                  name
              }
        }
        }
      }
  
     }
  `;
  return (<Query query={GET_SCHOOL_DETAIL}>
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
                      src={`${process.env.PUBLIC_URL}/school.png`}
                      style={{ width: 128, backgroundColor: "#ccc" }}
                      preview={false}
                    />
                  }
                />
                <Title level={2}>{data.DemoGraph.school[0].name}</Title>
              </Space>
              <Divider />
              <Row align="middle">
                <Col span={4}>
                  <Image
                    src={`${process.env.PUBLIC_URL}/student_number.png`}
                    style={{ width: 32 }}
                    preview={false}
                  />
                </Col>
                <Col span={20}>
                  Student number: {data.DemoGraph.school[0].studentNumber}
                </Col>
                <Col span={4}>
                  <Image
                    src={`${process.env.PUBLIC_URL}/hometown.png`}
                    style={{ width: 32 }}
                    preview={false}
                  />
                </Col>
                <Col span={20}>
                City:&nbsp;
                    <Link to={`/city/${data.DemoGraph.school[0].locate_at_To_city[0].to.id}`}>
                      {data.DemoGraph.school[0].locate_at_To_city[0].to.name}
                    </Link> 
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

export default SchoolDetail;
