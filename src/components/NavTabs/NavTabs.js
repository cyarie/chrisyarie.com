import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import About from '../AboutMe/AboutMe';
import ResumeParent from '../Work/ResumeParent';
import WorkWithMe from '../WorkWithMe/WorkWithMe';
import './NavTabs.scss';

class HomeNavTabs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tabs defaultActiveKey={1} id="nav-tabs">
        <Tab eventKey={1} title="About me">
          <About/>
        </Tab>
        <Tab eventKey={2} title="Previous Work">
          <ResumeParent/>
        </Tab>
        <Tab eventKey={3} title="Work with me">
          <WorkWithMe/>
        </Tab>
      </Tabs>
    )
  }
}

export default HomeNavTabs;