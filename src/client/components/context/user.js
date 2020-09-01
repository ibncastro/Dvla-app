import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo'
import gql from 'graphql-tag'

const GET_CURRENT_USER = gql `
    query currentUser {
        currentUser {
            firstName
        }
    }
`;

export class UserConsumer extends Component {
    render(){
        const { children } = this.props;
        return(
            <ApolloConsumer>
            {client => {
                const { currentUser } = client.readQuery({ query: GET_CURRENT_USER})
                return React.Children.map(children, function(child){
                    return React.cloneElement(child, {currentUser})
                })
            }}
            </ApolloConsumer>
        )
    }
    
}