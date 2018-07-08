import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import EventDashboard from '../../features/event/eventDashboard/eventDashboard'
import Navbar from '../../features/nav/navbar/navbar';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <Container className="main">
      <EventDashboard/> 
      </Container>
      </div>
    );
  }
}

export default App;


