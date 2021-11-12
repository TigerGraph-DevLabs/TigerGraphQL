

import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Table } from 'reactstrap';

export const GET_PERSONS = gql`
  query GetPersons {DemoGraph
        {person (
            order_by : {name : asc})
            {name,
            gender,
            height}
        }
    
  }
`;

export default () => (
    <Query query={GET_PERSONS}>
      {({ loading, data , error}) => !loading && (
        <Table>
          <thead>
            <tr>
              <th>name</th>
              <th>gender</th>
              <th>height</th>
            </tr>
          </thead>
          <tbody>
            {data.DemoGraph.person.map(person => (
              <tr key={person.name}>
                <td>{person.name}</td>
                <td>{person.gender}</td>
                <td>{person.height}</td>
              </tr>
            ))
            }
          </tbody>
        </Table>
      )}
    </Query>
  );