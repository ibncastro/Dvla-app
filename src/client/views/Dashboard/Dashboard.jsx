import React, { PureComponent } from 'react';
import { Header, Content, SideBar, MainContent } from './Dashboard.styles';


import TopBar from '../../components/NavBar'
import SideNav from '../../components/SideNav'
import Home from '../../components/Home'
import Buttons from '../../components/Buttons'

class Dashboard extends PureComponent { 
  
  render () {
    
    return (
      <div className="DashboardWrapper">
        <Header>
          <TopBar />
        </Header>
        <Content>
          <div>
          <SideBar>
            <SideNav />
          </SideBar>
          <MainContent >
            <Buttons />            
            <Home />        
          </MainContent>
          </div>          
        </Content>
        
      </div>
    );
  }
}


export default Dashboard;
