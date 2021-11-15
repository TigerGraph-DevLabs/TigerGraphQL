

import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Card, Divider } from 'antd';

import PersonPreview from './shared/PersonPreview';

export const GET_PERSONS = gql`
  query GetPersons {
    DemoGraph {
      person (
        order_by : {
          name : asc
        }
      ) {
        name
        gender
        birthYear
        height
      }
    }
  }
`;

const PeopleViewer = () => (
  <Query query={GET_PERSONS}>
    {({ loading, data, error }) => !loading && (
      <Card title="People On Record" style={{ width: 960 }}>
        {
          data.DemoGraph.person.map((person, index) => (
            <div key={person.name}>
              <PersonPreview 
                name={person.name}
                gender={person.gender}
                height={person.height}
                age={new Date().getFullYear() - person.birthYear}
              />
              {
                index === data.DemoGraph.person.length - 1
                || <Divider />
              }
            </div>
          ))
        }
      </Card>
    )}
  </Query>
);

export default PeopleViewer;
