// import React, { Component } from 'react'

// export default class Head extends Component {
//   render() {
//     return (
//             <section id="dashboard-analytics">
//               <div className="row">
//                 <div className="col-lg-6 col-md-12 col-sm-12">
//                   <div className="card bg-analytics text-white">
//                     <div className="card-content">
//                       <div className="card-body text-center">
//                         <img
//                           src="../../../app-assets/images/elements/decore-left.png"
//                           className="img-left"
//                           alt="
//             card-img-left"
//                         />
//                         <img
//                           src="../../../app-assets/images/elements/decore-right.png"
//                           className="img-right"
//                           alt="
//             card-img-right"
//                         />
//                         <div className="avatar avatar-xl bg-primary shadow mt-0">
//                           <div className="avatar-content">
//                             <i className="feather icon-award white font-large-1" />
//                           </div>
//                         </div>
//                         <div className="text-center">
//                           <h1 className="mb-2 text-white">
//                             Congratulations John,
//                           </h1>
//                           <p className="m-auto w-75">
//                             You have done <strong>57.6%</strong> more sales
//                             today. Check your new badge in your profile.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-3 col-md-6 col-12">
//                   <div className="card">
//                     <div className="card-header d-flex flex-column align-items-start pb-0">
//                       <div className="avatar bg-rgba-primary p-50 m-0">
//                         <div className="avatar-content">
//                           <i className="feather icon-users text-primary font-medium-5" />
//                         </div>
//                       </div>
//                       <h2 className="text-bold-700 mt-1 mb-25">92.6k</h2>
//                       <p className="mb-0">Subscribers Gained</p>
//                     </div>
//                     <div className="card-content">
//                       <div id="subscribe-gain-chart" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-3 col-md-6 col-12">
//                   <div className="card">
//                     <div className="card-header d-flex flex-column align-items-start pb-0">
//                       <div className="avatar bg-rgba-warning p-50 m-0">
//                         <div className="avatar-content">
//                           <i className="feather icon-package text-warning font-medium-5" />
//                         </div>
//                       </div>
//                       <h2 className="text-bold-700 mt-1 mb-25">97.5K</h2>
//                       <p className="mb-0">Orders Received</p>
//                     </div>
//                     <div className="card-content">
//                       <div id="orders-received-chart" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-md-6 col-12">
//                   <div className="card">
//                     <div className="card-content">
//                       <div className="card-body">
//                         <div className="row pb-50">
//                           <div className="col-lg-6 col-12 d-flex justify-content-between flex-column order-lg-1 order-2 mt-lg-0 mt-2">
//                             <div>
//                               <h2 className="text-bold-700 mb-25">2.7K</h2>
//                               <p className="text-bold-500 mb-75">
//                                 Avg Sessions
//                               </p>
//                               <h5 className="font-medium-2">
//                                 <span className="text-success">+5.2% </span>
//                                 <span>vs last 7 days</span>
//                               </h5>
//                             </div>
//                             <a href="#" className="btn btn-primary shadow">
//                               View Details{" "}
//                               <i className="feather icon-chevrons-right" />
//                             </a>
//                           </div>
//                           <div className="col-lg-6 col-12 d-flex justify-content-between flex-column text-right order-lg-2 order-1">
//                             <div className="dropdown chart-dropdown">
//                               <button
//                                 className="btn btn-sm border-0 dropdown-toggle p-0"
//                                 type="button"
//                                 id="dropdownItem5"
//                                 data-toggle="dropdown"
//                                 aria-haspopup="true"
//                                 aria-expanded="false"
//                               >
//                                 Last 7 Days
//                               </button>
//                               <div
//                                 className="dropdown-menu dropdown-menu-right"
//                                 aria-labelledby="dropdownItem5"
//                               >
//                                 <a className="dropdown-item" href="#">
//                                   Last 28 Days
//                                 </a>
//                                 <a className="dropdown-item" href="#">
//                                   Last Month
//                                 </a>
//                                 <a className="dropdown-item" href="#">
//                                   Last Year
//                                 </a>
//                               </div>
//                             </div>
//                             <div id="avg-session-chart" />
//                           </div>
//                         </div>
//                         <hr />
//                         <div className="row avg-sessions pt-50">
//                           <div className="col-6">
//                             <p className="mb-0">Goal: $100000</p>
//                             <div className="progress progress-bar-primary mt-25">
//                               <div
//                                 className="progress-bar"
//                                 role="progressbar"
//                                 aria-valuenow={50}
//                                 aria-valuemin={50}
//                                 aria-valuemax={100}
//                                 style={{ width: "50%" }}
//                               />
//                             </div>
//                           </div>
//                           <div className="col-6">
//                             <p className="mb-0">Users: 100K</p>
//                             <div className="progress progress-bar-warning mt-25">
//                               <div
//                                 className="progress-bar"
//                                 role="progressbar"
//                                 aria-valuenow={60}
//                                 aria-valuemin={60}
//                                 aria-valuemax={100}
//                                 style={{ width: "60%" }}
//                               />
//                             </div>
//                           </div>
//                           <div className="col-6">
//                             <p className="mb-0">Retention: 90%</p>
//                             <div className="progress progress-bar-danger mt-25">
//                               <div
//                                 className="progress-bar"
//                                 role="progressbar"
//                                 aria-valuenow={70}
//                                 aria-valuemin={70}
//                                 aria-valuemax={100}
//                                 style={{ width: "70%" }}
//                               />
//                             </div>
//                           </div>
//                           <div className="col-6">
//                             <p className="mb-0">Duration: 1yr</p>
//                             <div className="progress progress-bar-success mt-25">
//                               <div
//                                 className="progress-bar"
//                                 role="progressbar"
//                                 aria-valuenow={90}
//                                 aria-valuemin={90}
//                                 aria-valuemax={100}
//                                 style={{ width: "90%" }}
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md-6 col-12">
//                   <div className="card">
//                     <div className="card-header d-flex justify-content-between pb-0">
//                       <h4 className="card-title">Support Tracker</h4>
//                       <div className="dropdown chart-dropdown">
//                         <button
//                           className="btn btn-sm border-0 dropdown-toggle p-0"
//                           type="button"
//                           id="dropdownItem4"
//                           data-toggle="dropdown"
//                           aria-haspopup="true"
//                           aria-expanded="false"
//                         >
//                           Last 7 Days
//                         </button>
//                         <div
//                           className="dropdown-menu dropdown-menu-right"
//                           aria-labelledby="dropdownItem4"
//                         >
//                           <a className="dropdown-item" href="#">
//                             Last 28 Days
//                           </a>
//                           <a className="dropdown-item" href="#">
//                             Last Month
//                           </a>
//                           <a className="dropdown-item" href="#">
//                             Last Year
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="card-content">
//                       <div className="card-body pt-0">
//                         <div className="row">
//                           <div className="col-sm-2 col-12 d-flex flex-column flex-wrap text-center">
//                             <h1 className="font-large-2 text-bold-700 mt-2 mb-0">
//                               163
//                             </h1>
//                             <small>Tickets</small>
//                           </div>
//                           <div className="col-sm-10 col-12 d-flex justify-content-center">
//                             <div id="support-tracker-chart" />
//                           </div>
//                         </div>
//                         <div className="chart-info d-flex justify-content-between">
//                           <div className="text-center">
//                             <p className="mb-50">New Tickets</p>
//                             <span className="font-large-1">29</span>
//                           </div>
//                           <div className="text-center">
//                             <p className="mb-50">Open Tickets</p>
//                             <span className="font-large-1">63</span>
//                           </div>
//                           <div className="text-center">
//                             <p className="mb-50">Response Time</p>
//                             <span className="font-large-1">1d</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//     );
//   }
// }

import React, { Component } from 'react';
// import { Dropdown } from 'react-bootstrap'
// import img from "../../app-assets/images/slider/10.png"

// import React, { Component } from 'react'

class Post extends Component {
    render(){
        const { vehicle } = this.props;
        return(
            <div className="card">
                <div className="card-body">
                <h2>{vehicle.chasisNo}</h2>
                <p>{vehicle.modelName}</p>
                <p>{vehicle.noOfAxles}</p>
                <p>{vehicle.maufacturer}</p>
                </div>
            </div>
        )
    }
}

export default class Vehicle extends Component {
    render() {
        const { vehicles } = this.props;
        return (
           <div>
                {vehicles.map((veh,i) => 
                    <Post key={i} vehicle={veh} />
                )}
           </div>
        )
    }
}
