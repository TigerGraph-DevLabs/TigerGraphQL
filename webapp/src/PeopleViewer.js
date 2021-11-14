

import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Table } from 'reactstrap';
import { Card } from 'antd';

export const GET_PERSONS = gql`
  query GetPersons {
    DemoGraph {
      person (
        order_by : {
          name : asc
        }
      ) {
        name,
        gender,
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
          data.DemoGraph.person.map(person => (
            <div key={person.name}>
              {person.name},
              {person.gender},
              {person.height} cm,
              {new Date().getFullYear() - person.birthYear} years old
            </div>
          ))
        }
      </Card>
    )}
  </Query>
);

export default PeopleViewer;
