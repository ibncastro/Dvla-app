import React, { Component } from "react";

export default class Keys extends Component {
  render() {
      const { values, handleChange } = this.props;
    return (
        <fieldset>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="inspection">Vehicle Registration Number </label>
                <input
                  type="text"
                  className="form-control required"
                  defaultValue={values.key}
                  onChange={handleChange("key")}
                  id="inspection"
                  name="inspection"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="customs">Vehicle Owner</label>
                <input
                  type="text"
                  className="form-control required"
                  id="customs"
                  defaultValue={values.owner}
                  onChange={handleChange("owner")}
                  name="owner"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="roadWorthy">Owner Telephone Number</label>
                <input
                  type="text"
                  className="form-control required"
                  id="roadWorthy"
                  defaultValue={values.ownerTel}
                  onChange={handleChange("ownerTel")}
                  name="emailAddress"
                />
              </div>
            </div>     

             <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="proposalTitle3">Vehicle Chasis Number</label>
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
          </div>
          
          <div className="alert alert-primary">Upload Signed letter from the owner</div>

          <div className="row">
           
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="manufacturer">Manufacturer</label>
                <input
                  type="file"
                  className="form-control required"
                  id="manufacturer"
                  defaultValue={values.letter}
                  onChange={handleChange("letter")}
                  name="jobTitle"
                />
              </div>
            </div>
          </div>
         
        </fieldset>
    );
  }
}
