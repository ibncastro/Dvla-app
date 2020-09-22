import React, { Component } from "react";
import Keys from "./keys";
import RegisterNewVehicleMutation from "../mutations/registerVehicle";
import { UserConsumer } from "../context/user";
import swal from 'sweetalert'
import history from '../history'

class NewRegistration extends Component {
  state = {
    vehicleInspectionNo: "",
    customsDocNo: "",
    roadWorthyCert: "",
    chasisNo: "",
    manufacturer: "",
    modelName: "",
    fuelType: "",
    noOfDoors: "",
    bodyType: "",
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.registerVehicle({
      variables: {
        details: {
          vehicleInspectionNo: this.state.vehicleInspectionNo,
          customsDocNo: this.state.customsDocNo,
          roadWorthyCert: this.state.roadWorthyCert,
          chasisNo: this.state.chasisNo,
          manufacturer: this.state.manufacturer,
          modelName: this.state.modelName,
          fuelType: this.state.fuelType,
          noOfDoors: this.state.noOfDoors,
          bodyType: this.state.bodyType,
        },
      },
    }).then(() => {
      swal("Good job!", "You clicked the button!", "success").then(() => {
        history.push('/dashboard')
                history.go()
      })
    }).catch((e) => {
      console.log(e.message)
    })
  };

  render() {
    const {
      vehicleInspectionNo,
      customsDocNo,
      roadWorthyCert,
      firstName,
      lastName,
      otherNames,
      gender,
      email,
      passportPhoto,
      mobileNo,
      ghanaPostAddress,
      chasisNo,
      manufacturer,
      modelName,
      fuelType,
      noOfDoors,
      bodyType,
    } = this.state;
    const values = {
      vehicleInspectionNo,
      customsDocNo,
      roadWorthyCert,
      firstName,
      lastName,
      otherNames,
      gender,
      email,
      passportPhoto,
      mobileNo,
      ghanaPostAddress,
      chasisNo,
      manufacturer,
      modelName,
      fuelType,
      noOfDoors,
      bodyType,
    };

    return (
      <div>
        <section id="validation">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header"></div>
                <div className="card-content">
                  <div className="card-body">
                    <form
                      onSubmit={this.handleSubmit}
                      className="steps-validation wizard-circle"
                    >
                      <div className="row">
                        <div className="col-md-6">Instructions</div>
                        <div className="col-md-6">
                          <h4 className="card-title my-1 alert alert-primary text-center">
                            Add document Reference Numbers
                          </h4>
                          <Keys
                            values={values}
                            handleChange={this.handleChange}
                          />
                          <div className="col text-center">
                            <button type="submit" className="btn btn-primary ">
                              Register Vehicle
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default class VehicleRegistration extends Component {
  render() {
    return (
      <UserConsumer>
        <RegisterNewVehicleMutation>
          <NewRegistration />
        </RegisterNewVehicleMutation>
      </UserConsumer>
    );
  }
}
