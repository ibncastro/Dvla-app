import React, { Component } from 'react';
import FetchChangeOwnerQuery from '../Queries/fetchChangeOwnership'
import { Tabs, Tab } from "react-bootstrap";
import { UserConsumer } from '../context/user';

export default class AllChange extends Component {
    render(){
        // const { getOwners } = this.props;
        return (
          <UserConsumer>
            <FetchChangeOwnerQuery>
                <div>
                { this.props.getOwners.map((owner, i) => (
                   <OneChange key={i} owner={owner} />
                ))}
                </div>
           </FetchChangeOwnerQuery>
           </UserConsumer>
        )
    }
}

class OneChange extends Component {
    render(){
        const { owner } = this.props;
        return (
            <div className="col-lg-6 col-sm-12 ">
            <div className="card border-info">
              <div className="card-header"></div>
              <div className="card-content" style={{ minHeight: "400px" }}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-5 mt-4">
                      <div className="col-12 ml-4 col-md-8 d-flex align-items-center justify-content-center mb-2 mb-md-0">
                        {/* <div className="d-flex align-items-center justify-content-center">
                          <img
                            src={Img}
                            className="img-fluid"
                            alt="product image"
                          />
                        </div> */}
                      </div>
                      
                    </div>
    
                    <div className="col-sm-7">
                      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                        <Tab eventKey="home" title="Overview">
                          <table className="table table-sm">
                            <tbody>
                              <tr>
                                <th scope="row">Registration Number</th>
                                <td className="text-success">{owner.regNumber}</td>
                              </tr>
                              <tr>
                                <th scope="row">Status</th>
                                <td className="text-warning">{owner.status}</td>
                              </tr>
                              <tr>
                                <th scope="row">Owner</th>
                                <td className="text-success">
                                  {owner.owner}
                                </td>
                              </tr>
                              {/* <tr>
                                <th scope="row">Vehicle Number Plate</th>
                                <td className="text-success">GW-1455-20</td>
                              </tr> */}
    
                              {/* <tr>
                                <th scope="row">Registration Date</th>
                                <td className="text-success">{owner.created}</td>
                              </tr> */}
                             
                            </tbody>
                          </table>
                        </Tab>
                        {/* <Tab eventKey="profile" title="Vehicle Details">
                          <table className="table table-sm">
                            <tbody>
                              <tr>
                                <th scope="row">Model</th>
                                <td>{vreg.vehicle.modelName}</td>
                              </tr>
                              <tr>
                                <th scope="row">Vehicle Use</th>
                                <td>{vreg.vehicle.vehicleUse}</td>
                              </tr>
                              <tr>
                                <th scope="row">Vehicle Inspection Number</th>
                                <td>{vreg.vehicleInspectionNo}</td>
                              </tr>
                              <tr>
                                <th scope="row">Fuel Type</th>
                                <td>{vreg.vehicle.fuelType}</td>
                              </tr>
    
                              <tr>
                                <th scope="row">Registration Date</th>
                                <td>Larry</td>
                              </tr>
                              <tr>
                                <th scope="row">Registration Expiry Date</th>
                                <td>Larry</td>
                              </tr>
                            </tbody>
                          </table>
                        </Tab> */}
                        {/* <Tab eventKey="contact" title="Contact">
                          <h2>Content</h2>
                        </Tab> */}
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <PaymentModal
              show={show}
              grabinputs={this.grabinputs}
              hideModal={this.hideModal}
            /> */}
          </div>
        )
    }
}