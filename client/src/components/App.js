import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import LandingPage from './LandingPage';
import * as actions from '../actions';


const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

class App extends React.Component {
  componentDidMount(){
    this.props.fetchUser();
  }  

  render() {
    return (
      <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
      </div>
    ) 
  }
};

export default connect(null, actions) (App);