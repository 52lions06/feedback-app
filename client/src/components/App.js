import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';


const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const LandingPage = () => <h2>LandingPage</h2>

const App = () => {
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
};

export default App;