import React, { Component } from "react";
import { Sidebar } from "primereact/sidebar";
// import swal from 'sweetalert';
import history from "../history";

export class AddNewModal extends Component {
  state = {
    paymentMethod: "momo",
    amount: "",
    phoneNumber: null,
    vendor: "",
    cardholder: "",
    cardNumber: "",
  };

  grabinputs = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  onConfirm = (e) => {
    this.props.hideModal();
  };

  render() {
    const { show, hideModal } = this.props;
    const { grabinputs } = this;
    return (
      <div className="card">
        <Sidebar visible={show} position="right" onHide={() => hideModal()}>
          <form onSubmit={this.submitDetails}>
            <div>
              <div className="form-group">
                <label htmlFor="fuelType">Choose Payment Method</label>
                <select
                  className="custom-select form-control required"
                  id="eventLocation3"
                  defaultValue={this.state.paymentMethod}
                  onChange={grabinputs("paymentMethod")}
                  name="eventStatus"
                >
                  <option value="momo">Mobile Money</option>
                  <option value="visa">Visa</option>
                </select>
              </div>
            </div>

            {this.state.paymentMethod === "momo" && (
              <div>
                <div className="form-group">
                  {/* <label htmlFor="vendor">Choose Payment Method</label> */}
                  <select
                    className="custom-select form-control required"
                    id="eventLocati"
                    // defaultValue={this.state.paymentMethod}
                    onChange={grabinputs("vendor")}
                    name="vendor"
                  >
                    <option value="mtn">Mtn momo</option>
                    <option value="vodafone">Vodaphone cash</option>
                  </select>
                </div>
                <div className="form-group">
                  <div className="form-label-group">
                    <input
                      type="number"
                      id="first-name-column"
                      className="form-control"
                      placeholder="Number"
                      name="fname-column"
                      onChange={grabinputs("phoneNumber")}
                    />
                    <label htmlFor="first-name-column">Phone Number</label>
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-label-group">
                    <input
                      type="number"
                      id="first-name-column"
                      className="form-control"
                      placeholder="Amount"
                      name="fname-column"
                      onChange={grabinputs("amount")}
                    />
                    <label htmlFor="first-name-column">Amount</label>
                  </div>
                </div>

                <button className="btn btn-primary block">Pay</button>
              </div>
            )}

            {this.state.paymentMethod === "visa" && (
              <div>
                <div className="form-group">
                  <div className="form-label-group">
                    <input
                      type="number"
                      id="first-name-column"
                      className="form-control"
                      placeholder="Cardholder Name"
                      name="fname-column"
                      onChange={grabinputs("cardHolder")}
                    />
                    <label htmlFor="first-name-column">Cardholder Name</label>
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-label-group">
                    <input
                      type="number"
                      id="first-name-column"
                      className="form-control"
                      placeholder="Card Number"
                      name="fname-column"
                      onChange={grabinputs("cardNumber")}
                    />
                    <label htmlFor="first-name-column">Card Number</label>
                  </div>
                </div>

                {/* <div className="form-group">
                  <div className="form-label-group">
                    <input
                      type="number"
                      id="first-name-column"
                      className="form-control"
                      placeholder="Amount"
                      name="fname-column"
                      onChange={grabinputs("amount")}
                    />
                    <label htmlFor="first-name-column">Amount</label>
                  </div>
                </div> */}

                <button className="btn btn-primary block">Pay</button>
              </div>
            )}
          </form>
        </Sidebar>
      </div>
    );
  }
}

export default AddNewModal;
