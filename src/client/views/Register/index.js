import React, { Component } from 'react'
import BasicInfo from './BasicInfo';
import Address from './Address'
import AccountDetails from './AccountDetails';

export class UserForm extends Component {
    state = {
        step: 1,
        title: '',
        firstName: '',
        lastName: '',
        middleName: '',
        Gender: '',
        email: '',
        region: '',
        dob: '',
        nationality: '',
        idType: '',
        idNumber: '',
        mobileNo1: '',
        mobileNo2: '',
        postalAddress: '',
        ghanaPostcode: '',
        password: '',
        passportPhoto: '',
        city: '',
        username: '',
        confirmPassword: ''
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({step: step + 1})
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({step: step - 1})
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value })
    }


    render() {
        const { step } = this.state;
        const { title, firstName, lastName, middleName, Gender, email, region, dob, nationality, idType, idNumber, mobileNo1, mobileNo2, postalAddress, ghanaPostcode, password, passportPhoto, city, username, confirmPassword } = this.state;
        const values = { title, firstName, lastName, middleName, Gender, email, region, dob, nationality, idType, idNumber, mobileNo1, mobileNo2, postalAddress, ghanaPostcode, password, passportPhoto, city, username, confirmPassword } 

       switch(step){
           case 1:
            return (
                <BasicInfo />
            )

            case 2:
                return (
                    <Address />
                )

            case 3:
                return (
                    <AccountDetails />
                )
       }
    }
}

export default UserForm
