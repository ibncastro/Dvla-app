import React, { Component } from 'react'
import BasicInfo from './BasicInfo';
import BasicTwo from './Basic2'
import Address from './Address'
import AccountDetails from './AccountDetails';
import RegisterMutation from '../../components/mutations/register'

class UserForm extends Component {

  state = {
    step: 1,
    firstName: "",
    lastName: "",
    middleName: "",
    Gender: "",
    email: "",
    region: "",
    dob: "",
    nationality: "",
    idType: "",
    idNumber: "",
    mobileNo1: "",
    mobileNo2: "",
    postalAddress: "",
    ghanaPostcode: "",
    password: "",
    city: "",
    username: "",
    confirmPassword: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = () => {
    this.props.register({
      variables: {
       user: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        middleName: this.state.middleName,
        gender: this.state.Gender,
        email: this.state.email,
        region: this.state.region,
        dob: this.state.dob,
        nationality: this.state.nationality,
        idType: this.state.idType,
        idNumber: this.state.idNumber,
        mobileNo1: this.state.mobileNo1,
        mobileNo2: this.state.mobileNo2,
        postalAddress: this.state.postalAddress,
        ghanaPostcode: this.state.ghanaPostcode,
        password: this.state.password,
        city: this.state.city,
        username: this.state.username
      }
       }
    })
  }

  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      middleName,
      Gender,
      email,
      region,
      dob,
      nationality,
      idType,
      idNumber,
      mobileNo1,
      mobileNo2,
      postalAddress,
      ghanaPostcode,
      password,
      city,
      username,
      confirmPassword,
    } = this.state;
    const values = {
      firstName,
      lastName,
      middleName,
      Gender,
      email,
      region,
      dob,
      nationality,
      idType,
      idNumber,
      mobileNo1,
      mobileNo2,
      postalAddress,
      ghanaPostcode,
      password,
      city,
      username,
      confirmPassword,
    };

    switch (step) {
      case 1:
        return (
          <BasicInfo
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 2:
        return (
          <BasicTwo
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 3:
        return (
          <Address
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 4:
        return (
          <AccountDetails
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            values={values}
          />
        );
    }
  }
}

export default class Registration extends Component {
  render() {
    const { changeLoginState } = this.props;
    return (
      <RegisterMutation changeLoginState={changeLoginState}>
        <UserForm />
      </RegisterMutation>
    )
  }
}



