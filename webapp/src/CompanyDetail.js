

import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Avatar, Card, Col, Divider, Image, Row, Space, Typography } from 'antd';
import { Link, useParams } from "react-router-dom";
import PersonPreview from './shared/PersonPreview';

const { Title } = Typography;

const CompanyDetail = () => {
  const params = useParams();
  const GET_COMPANY_DETAIL = gql`
    query GetCompanyDetail {
      DemoGraph {
        company (
          where : {
            id : {
              _eq : "${params.companyID}"
            }
          }
        ) {
          id
          name
          zipcode
          foundYear
          locate_at_To_city {
            to {
              id
              name
            }
          }
          reverse_work_at {
            to {
              id
              name
              gender
              birthYear
              height
            }
          }
        }
      }
    }
  `;
  return (<Query query={GET_COMPANY_DETAIL}>
    {({ loading, data, error }) => !loading && (
      <Row gutter={16} align="center">
        <Col span={8}>
          <Space direction="vertical" size={16} style={{ width: "100%" }}>
            <Card>
              <Space direction="vertical" size={16} style={{ width: "100%", position: "relative", top: 16 }} align="center">
                <Avatar
                  size={128}
                  src={
                    <Image
                      src={`${process.env.PUBLIC_URL}/company.png`}
                      style={{ width: 128, backgroundColor: "#ccc" }}
                      preview={false}
                    />
                  }
                />
                <Title level={2}>{data.DemoGraph.company[0].name}</Title>
              </Space>
              <Divider />
              <Row align="middle">
                <Col span={4}>
                  <Image
                    src={`${process.env.PUBLIC_URL}/zipcode.png`}
                    style={{ width: 32 }}
                    preview={false}
                  />
                </Col>
                <Col span={20}>
                  ZIP code: {data.DemoGraph.company[0].zipcode}
                </Col>
                <Col span={4}>
                  <Image
                    src={`${process.env.PUBLIC_URL}/birthday.png`}
                    style={{ width: 32 }}
                    preview={false}
                  />
                </Col>
                <Col span={20}>
                  Found year: {data.DemoGraph.company[0].foundYear}
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
                  <Link to={`/city/${data.DemoGraph.company[0].locate_at_To_city[0].to.id}`}>
                    {data.DemoGraph.company[0].locate_at_To_city[0].to.name}
                  </Link>
                </Col>
              </Row>
            </Card>
          </Space>
        </Col>
        <Col span={16}>
          <Space
            direction="vertical"
            size={16}
            style={{ width: "calc(100% - 16px)", position: "absolute", top: 0 }}
          >
            <Card title="Employees">
              {
                data.DemoGraph.company[0].reverse_work_at.map((person, index) => (
                  <div key={person.to.id}>
                    <PersonPreview
                      id={person.to.id}
                      name={person.to.name}
                      gender={person.to.gender}
                      height={person.to.height}
                      age={new Date().getFullYear() - person.to.birthYear}
                    />
                    {
                      index === data.DemoGraph.company[0].reverse_work_at.length - 1
                      || <Divider />
                    }
                  </div>
                ))
              }
            </Card>
          </Space>
        </Col>
      </Row>
    )}
  </Query>
  );
};

export default CompanyDetail;
