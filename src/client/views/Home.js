import React, { Component } from 'react'


import Sidenav from '../components/navigation/sideNav'
import Mainnav from '../components/navigation/Main-nav'
import Content from '../components/Content'
import LoginRegister from './loginF'

export default class Home extends Component {
                 state = {
                   loggedIn: false,
                 };

                 componentWillMount() {
                   const token = localStorage.getItem("jwt");
                   if (token) {
                     this.setState({ loggedIn: true });
                   }
                 }

                 changeLoginState = (loggedIn) => {
                     this.setState({loggedIn})
                 }

                 render() {
                   const { loggedIn } = this.state;
                   return (
                     <div>
                       {loggedIn ? (
                         <div>
                           <Mainnav />
                           <Sidenav />
                           <Content />
                         </div>
                       ) : (
                         <LoginRegister changeLoginState={this.changeLoginState} />
                       )}
                     </div>
                   );
                 }
               }
