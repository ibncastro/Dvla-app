import React, { Component } from "react";
import Vehicle from "./head";
import VehiclesQuery from "../Queries/fetchRegs";
import VRegs from "../vRegs/index";

import { TabView, TabPanel } from "primereact/tabview";

export default class Dashboard extends Component {
  render() {
    return (     
      <VRegs />
    );
  }
}
