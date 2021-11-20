

import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Avatar, Card, Col, Divider, Image, Row, Space, Typography } from 'antd';
import { useParams } from "react-router-dom";
import { beautifyNumber } from './shared/utility';
import CompanyPreview from './shared/CompanyPreview';
import PersonPreview from './shared/PersonPreview';
import SchoolPreview from './shared/SchoolPreview';

const { Title } = Typography;

const CityDetail = () => {
  const params = useParams();
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
          reverse_born_in {
            to {
              id
              name
              gender
              birthYear
              height
            }
          }
          reverse_locate_at_To_school {
            to {
              id
              name
              studentNumber
            }
          }
          reverse_locate_at_To_company {
            to {
              id
              name
              zipcode
            }
          }
        }
      }
    }
  `;
  return (<Query query={GET_CITY_DETAIL}>
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
                      src={`${process.env.PUBLIC_URL}/city.png`}
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
                  Population: {beautifyNumber(data.DemoGraph.city[0].population)}
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
        <Col span={16}>
          <Space
            direction="vertical"
            size={16}
            style={{ width: "calc(100% - 16px)", position: "absolute", top: 0 }}
          >
            <Card title="Residents">
              {
                data.DemoGraph.city[0].reverse_born_in.map((person, index) => (
                  <div key={person.to.id}>
                    <PersonPreview
                      id={person.to.id}
                      name={person.to.name}
                      gender={person.to.gender}
                      height={person.to.height}
                      age={new Date().getFullYear() - person.to.birthYear}
                    />
                    {
                      index === data.DemoGraph.city[0].reverse_born_in.length - 1
                      || <Divider />
                    }
                  </div>
                ))
              }
            </Card>
            <Card title="Educational Institutions">
              {
                data.DemoGraph.city[0].reverse_locate_at_To_school.map((school, index) => (
                  <div key={school.to.id}>
                    <SchoolPreview
                      id={school.to.id}
                      name={school.to.name}
                      studentNumber={school.to.studentNumber}
                    />
                    {
                      index === data.DemoGraph.city[0].reverse_locate_at_To_school.length - 1
                      || <Divider />
                    }
                  </div>
                ))
              }
            </Card>
            <Card title="Companys">
              {
                data.DemoGraph.city[0].reverse_locate_at_To_company.map((company, index) => (
                  <div key={company.to.id}>
                    <CompanyPreview
                      id={company.to.id}
                      name={company.to.name}
                      zipcode={company.to.zipcode}
                    />
                    {
                      index === data.DemoGraph.city[0].reverse_locate_at_To_company.length - 1
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

export default CityDetail;
