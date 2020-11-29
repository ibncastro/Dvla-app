import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const GET_VEHICLES = gql `
    query vRegistration($userId: Int!){
  vRegistration(userId: $userId){
    key
    vehicleInspectionNo
    customsDocNo
    roadWorthyCert
    createdAt
    status
    center{
      name
      code
    }
    vehicle{
      id
      modelName
      chasisNo
      fuelType
      engineNo
      manufacturer
      bodyType
      countryOfOrigin
      image
    }
  }
}
`;

const UPLOAD_AVATAR = gql`
  mutation uploadAvatar($file: Upload!, $vehicleId: Int) {
    uploadAvatar(file : $file, vehicleId: $vehicleId) {
      filename
      url
    }
  }
`;

export default class UploadAvatarMutation extends Component {
    render() {
        const { children } = this.props;
        return (
            <Mutation
                update = {(store, { data: { uploadAvatar } }) => {
                    var query = {
                    query: GET_VEHICLES,
                    };
                    const data = store.readQuery(query);
                    // data.vRegistration.unshift(uploadAvatar);
                    store.writeQuery({ ...query, data });
                }}
            mutation={UPLOAD_AVATAR}>
                {uploadAvatar => 
                    React.Children.map(children, function(child){
                        return React.cloneElement(child, { uploadAvatar });
                    })
                }
            </Mutation>
        )
    }
}