import React, { Component } from "react";
import Form from "./form";
import ChangeOwnershipMutation from "../mutations/changeOwnership";
import { UserConsumer } from "../context/user";
import swal from 'sweetalert'
import history from '../history'

class NewChange extends Component {
  state = {
    key: "",
    chasisNo: "",
    owner: "",
    ownerTel: "",
    letter: ""
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.changeOwner({
      variables: {
        details: {
          key: this.state.key,
          owner: this.state.owner,
          chasisNo: this.state.chasisNo,
          ownerTel: this.state.ownerTel,
          // letter: this.state.letter
        },
      },
    }).then(() => {
      swal("Request has been sent", "You clicked the button!", "success").then(() => {
        history.push('/dashboard')
                history.go()
      })
    }).catch((e) => {
      console.log(e.message)
    })
  };

  render() {
    const { key, chasisNo, owner, ownerTel, letter} = this.state;

    const values = {
      key,
      chasisNo,
      owner,
      ownerTel,
      letter
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
                            Add appropriate documents and details
                          </h4>
                          <Form
                            values={values}
                            handleChange={this.handleChange}
                          />
                          <div className="col text-center">
                            <button type="submit" className="btn btn-primary ">
                              Request for ownership change
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

export default class change extends Component {
  render() {
    return (
      <UserConsumer>
        <ChangeOwnershipMutation>
          <NewChange />
        </ChangeOwnershipMutation>
      </UserConsumer>
    );
  }
}
