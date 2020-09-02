import React, { Component } from 'react'

export class Address extends Component {
  
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="col-lg-6 col-12 p-0">
        <div className="card rounded-0 mb-0 p-2">
          <div className="card-header pt-50 pb-1">
            <div className="card-title">
              <h4 className="mb-0">Add Residential Address</h4>
            </div>
          </div>
          <div className="card-content">
            <div className="card-body pt-0">
              <form action="index.html">
              <div className="form-label-group">
                  <input
                    type="text"
                    id="inputName"
                    className="form-control"
                    placeholder="Ghana Post Code"
                    onChange={handleChange("ghanaPostcode")}
                    defaultValue={values.ghanaPostcode}
                    required
                  />
                  <label htmlFor="inputName">Ghana Post Code</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputName"
                    className="form-control"
                    placeholder="Address"
                    onChange={handleChange("postalAddress")}
                    defaultValue={values.postalAddress}
                  />
                  <label htmlFor="inputName">Postal Address</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputName"
                    className="form-control"
                    placeholder="Region"
                    onChange={handleChange("region")}
                    defaultValue={values.region}
                    required
                  />
                  <label htmlFor="inputName">Region</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputName"
                    className="form-control"
                    placeholder="City"
                    onChange={handleChange("city")}
                    defaultValue={values.city}
                    required
                  />
                  <label htmlFor="inputName">City</label>
                </div>

                <button
                  onClick={this.back}
                  className="btn btn-outline-primary float-left btn-inline mb-50"
                >
                  Back
                </button>
                <button
                  onClick={this.continue}
                  className="btn btn-primary float-right btn-inline mb-50"
                >
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Address
