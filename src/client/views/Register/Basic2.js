import React, { Component } from 'react'

export class BasicTwo extends Component {
  
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
              <h4 className="mb-0">Add Basic Details</h4>
            </div>
          </div>
          {/* <p className="px-2">Fill the below form to create a new account.</p> */}
          <div className="card-content">
            <div className="card-body pt-0">
              <form>
                <fieldset className="form-group">
                  <select onChange={handleChange("nationality")} defaultValue={values.nationality} className="custom-select" id="customSelect">
                    <option defaultValue={values.nationality}>Nationality</option>
                    <option value="NATIONALID">NATIONALID</option>
                    <option value="VOTERSID">VOTERSID</option>
                    <option value="PASSPORT">PASSPORT</option>
                  </select>
                </fieldset>
                <div className="form-label-group">
                  <input
                    type="date"
                    id="dob"
                    className="form-control"
                    placeholder="Date of birth"
                    onChange={handleChange("dob")}
                    defaultValue={values.dob}
                    required
                  />
                  <label htmlFor="dob">Date of birth</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="number"
                    id="inputName"
                    className="form-control"
                    placeholder="Mobile Number 1"
                    onChange={handleChange("mobileNo1")}
                    defaultValue={values.mobileNo1}
                    required
                  />
                  <label htmlFor="inputName">Mobile Number 1</label>
                </div>
                {/* <fieldset className="form-group">
                  <select onChange={handleChange("idType")} defaultValue={values.idType} className="custom-select" id="customSelect">
                  <option defaultValue={values.nationality}>Nationality</option>
                    <option value="NATIONALID">NATIONALID</option>
                    <option value="VOTERSID">VOTERSID</option>
                    <option value="PASSPORT">PASSPORT</option>
                  </select>
                  
                </fieldset> */}
                <div className="form-label-group">
                  <input
                    type="text"
                    id="idNumber"
                    className="form-control"
                    placeholder="Identification Number"
                    onChange={handleChange("idNumber")}
                    defaultValue={values.idNumber}
                    required
                  />
                  <label htmlFor="idNumber">Identification Number</label>
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

export default BasicTwo
