import React, { Component } from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Spinner from '../../assets/components/spinner/Loading-spinner'
import Error from '../error'

const GET_VEHICLES = gql `
    query vRegistration($userId: Int!){
  vRegistration(userId: $userId){
    key
    user{
      firstName
      lastName
    }
    vehicle{
      modelName
      chasisNo
    }
  }
}
`;

class VRegQuery extends Component {
  getVariables(){
    var query_variables = {};

    query_variables.userId = 1;

    return query_variables;
  }
    render() {
        const { children } = this.props;
        const variables = this.getVariables()
        return (
           <Query query={GET_VEHICLES} variables={variables}>
               {({loading, error, data}) => {
                   if (loading) return <Spinner />
                   if (error) return <Error><p>{error.message}</p></Error>

                   const {vRegistration} = data;
                   console.log(vRegistration)

                   return React.Children.map(children, function(child){
                       return React.cloneElement(child, { vregs: vRegistration })
                   })
               }}
           </Query>
        );
    }
}

export default VRegQuery;