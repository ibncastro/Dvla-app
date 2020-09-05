import React, { Component } from "react";

export default class Keys extends Component {
  render() {
      const { values, handleChange } = this.props;
    return (
        <fieldset>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="inspection">Vehicle Inspection Serial Number</label>
                <input
                  type="text"
                  className="form-control required"
                  defaultValue={values.vehicleInspectionNo}
                  onChange={handleChange("vehicleInspectionNo")}
                  id="inspection"
                  name="inspection"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="customs">Customs Document Number</label>
                <input
                  type="text"
                  className="form-control required"
                  id="customs"
                  defaultValue={values.customsDocNo}
                  onChange={handleChange("customsDocNo")}
                  name="lastName"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="roadWorthy">Road Worthy Inspection Document Number</label>
                <input
                  type="text"
                  className="form-control required"
                  id="roadWorthy"
                  defaultValue={values.roadWorthyCert}
                  onChange={handleChange("roadWorthyCert")}
                  name="emailAddress"
                />
              </div>
            </div>           
          </div>
          {/* <div className="row my-2">
          <label className="mr-2">Requirements :</label>
                <div className="c-inputs-stacked">
                  <div className="d-inline-block mr-2">
                    <div className="vs-checkbox-con vs-checkbox-primary">
                      <input type="checkbox" defaultValue="false" />
                      <span className="vs-checkbox">
                        <span className="vs-checkbox--check">
                          <i className="vs-icon feather icon-check" />
                        </span>
                      </span>
                      <span className>Staffing</span>
                    </div>
                  </div>
                  <div className="d-inline-block">
                    <div className="vs-checkbox-con vs-checkbox-primary">
                      <input type="checkbox" defaultValue="false" />
                      <span className="vs-checkbox">
                        <span className="vs-checkbox--check">
                          <i className="vs-icon feather icon-check" />
                        </span>
                      </span>
                      <span className>Catering</span>
                    </div>
                  </div>
                </div>
          </div> */}

          <div className="alert alert-primary">Vehicle Details</div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="proposalTitle3">Chasis Number</label>
                <input
                  type="text"
                  className="form-control required"
                  id="proposalTitle3"
                  defaultValue={values.chasisNo}
                  onChange={handleChange("chasisNo")}
                  name="proposalTitle"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="manufacturer">Manufacturer</label>
                <input
                  type="text"
                  className="form-control required"
                  id="manufacturer"
                  defaultValue={values.manufacturer}
                  onChange={handleChange("manufacturer")}
                  name="jobTitle"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="eventName3">Model Name</label>
                <input
                  type="text"
                  className="form-control required"
                  id="eventName3"
                  defaultValue={values.modelName}
                  onChange={handleChange("modelName")}
                  name="eventName"
                />
              </div>
              <div className="form-group">
                <label htmlFor="fuelType">Fuel Type</label>
                <select
                  className="custom-select form-control required"
                  id="eventLocation3"
                  defaultValue={values.fuelType}
                  onChange={handleChange("fuelType")}
                  name="eventStatus"
                >
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="eventLocation3">Body Type</label>
                <select
                  className="custom-select form-control required"
                  id="eventLocation3"
                  defaultValue={values.bodyType}
                  onChange={handleChange("bodyType")}
                  name="eventStatus"
                >
                  <option value="Saloon">Saloon</option>
                  <option value="Van">Van</option>
                  <option value="Truck">Truck</option>
                  <option value="Bus">Bus</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="eventName3">Number of Doors</label>
                <input
                  type="number"
                  className="form-control required"
                  id="eventName3"
                  defaultValue={values.noOfDoors}
                  onChange={handleChange("noOfDoors")}
                  name="eventName"
                />
              </div>
            </div>
          </div>
        </fieldset>
    );
  }
}
