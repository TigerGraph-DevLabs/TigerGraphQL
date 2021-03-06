

import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Avatar, Card, Col, Divider, Image, Rate, Row, Space, Typography } from 'antd';
import { Link, useParams } from "react-router-dom";

import EducationPreview from './shared/EducationPreview';
import PersonPreview from './shared/PersonPreview';
import WorkingExperiencePreview from './shared/WorkingExperiencePreview';
import { beautifyDate } from './shared/utility';

const { Title } = Typography;

const PersonDetail = () => {
  const params = useParams();
  const GET_PERSON_DETAIL = gql`
    query GetPersonDetail {
      DemoGraph {
        person (
          where: {
            id: {
              _eq: "${params.personID}"
            }
          }
        ) {
          id
          name
          gender
          birthYear
          height
          married
          born_in {
            birthday
            to {
              id
              name
            }
          }
          has {
            score
            to {
              name
            }
          }
          attend {
            start_time
            end_time
            to {
              id
              name
            }
          }
          work_at {
            title
            start_time
            end_time
            to {
              id
              name
            }
          }
          is_friend_of {
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
  return (
    <Query query={GET_PERSON_DETAIL}>
      {({ loading, data, error }) => !loading && (
        <Row gutter={16}>
          <Col span={8}>
            <Space direction="vertical" size={16} style={{ width: "100%" }}>
              <Card>
                <Space direction="vertical" size={16} style={{ width: "100%", position: "relative", top: 16 }} align="center">
                  <Avatar
                    size={128}
                    src={
                      <Image
                        src={`${process.env.PUBLIC_URL}/avatar_${data.DemoGraph.person[0].gender}.png`}
                        style={{ width: 128, backgroundColor: "#ccc" }}
                        preview={false}
                      />
                    }
                  />
                  <Title level={2}>{data.DemoGraph.person[0].name}</Title>
                </Space>
                <Divider />
                <Row align="middle">
                  <Col span={4}>
                    <Image
                      src={`${process.env.PUBLIC_URL}/gender.png`}
                      style={{ width: 32 }}
                      preview={false}
                    />
                  </Col>
                  <Col span={20}>
                    Gender: {data.DemoGraph.person[0].gender}
                  </Col>
                </Row>
                <Row align="middle">
                  <Col span={4}>
                    <Image
                      src={`${process.env.PUBLIC_URL}/height.png`}
                      style={{ width: 32 }}
                      preview={false}
                    />
                  </Col>
                  <Col span={20}>
                    Height: {data.DemoGraph.person[0].height}cm
                  </Col>
                </Row>
                <Row align="middle">
                  <Col span={4}>
                    <Image
                      src={`${process.env.PUBLIC_URL}/birthday.png`}
                      style={{ width: 32 }}
                      preview={false}
                    />
                  </Col>
                  <Col span={20}>
                    Birthday: {beautifyDate(data.DemoGraph.person[0].born_in[0].birthday)}
                  </Col>
                </Row>
                <Row align="middle">
                  <Col span={4}>
                    <Image
                      src={`${process.env.PUBLIC_URL}/hometown.png`}
                      style={{ width: 32 }}
                      preview={false}
                    />
                  </Col>
                  <Col span={20}>
                    Hometown:&nbsp;
                    <Link to={`/city/${data.DemoGraph.person[0].born_in[0].to.id}`}>
                      {data.DemoGraph.person[0].born_in[0].to.name}
                    </Link>
                  </Col>
                </Row>
                <Row align="middle">
                  <Col span={4}>
                    <Image
                      src={`${process.env.PUBLIC_URL}/marriage.png`}
                      style={{ width: 32 }}
                      preview={false}
                    />
                  </Col>
                  <Col span={20}>
                    {data.DemoGraph.person[0].married ? 'Married' : 'Single'}
                  </Col>
                </Row>
              </Card>
              <Card title="Skills">
                {
                  data.DemoGraph.person[0].has.map(skill => (
                    <Row align="middle" key={skill.to.name}>
                      <Col span={11}>
                        {skill.to.name}
                      </Col>
                      <Col span={13}>
                        <Rate allowHalf disabled defaultValue={skill.score} />
                      </Col>
                    </Row>
                  ))
                }
              </Card>
            </Space>
          </Col>
          <Col span={16}>
            <Space
              direction="vertical"
              size={16}
              style={{ width: "calc(100% - 16px)", position: "absolute", top: 0 }}
            >
              <Card title="Education">
                {
                  data.DemoGraph.person[0].attend.map((school, index) => (
                    <div key={school.to.id}>
                      <EducationPreview
                        id={school.to.id}
                        name={school.to.name}
                        startTime={school.start_time}
                        endTime={school.end_time}
                      />
                      {
                        index === data.DemoGraph.person[0].attend.length - 1
                        || <Divider />
                      }
                    </div>
                  ))
                }
              </Card>
              <Card title="Working Experience">
                {
                  data.DemoGraph.person[0].work_at.map((company, index) => (
                    <div key={company.to.id}>
                      <WorkingExperiencePreview
                        title={company.title}
                        id={company.to.id}
                        name={company.to.name}
                        startTime={company.start_time}
                        endTime={company.end_time}
                      />
                      {
                        index === data.DemoGraph.person[0].work_at.length - 1
                        || <Divider />
                      }
                    </div>
                  ))
                }
              </Card>
              <Card title="Friends">
                {
                  data.DemoGraph.person[0].is_friend_of.map((person, index) => (
                    <div key={person.to.id}>
                      <PersonPreview
                        id={person.to.id}
                        name={person.to.name}
                        gender={person.to.gender}
                        height={person.to.height}
                        age={new Date().getFullYear() - person.to.birthYear}
                      />
                      {
                        index === data.DemoGraph.person[0].is_friend_of.length - 1
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

export default PersonDetail;
