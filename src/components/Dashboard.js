import React from 'react';
import TopNavBar from './TopNavBar';
import SideMenu from './SideMenu';
import Stats from './Stats';
import ActivityChart from './ActivityChart';
import RecentOrders from './RecentOrders';
import Feedback from './Feedback';
import NetProfit from './NetProfit';
import InfoSections from './InfoSections';
import '../styles/Dashboard.css';

const Dashboard = () => (
  <div className="dashboard">
    <TopNavBar />
    <div className="dashboard-content">
      <SideMenu />
      <div className="main-content">
        <div className="left-column">
          <Stats />
          <ActivityChart />
          <RecentOrders />
        </div>
        <div className="right-column">
          <NetProfit />
          <InfoSections />
          <Feedback />
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
