import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AdCampaign from './components/views/landing-page/AdCampaign';
import NavBar from './components/views/landing-page/NavBar';
import BudgetCampaign from './components/views/landing-page/BudgetCampaign';
import EasySteps from './components/views/landing-page/EasySteps';
import AmplifyReach from './components/views/landing-page/AmplifyReach';
import Testimonials from './components/views/landing-page/Testimonials';
import Insights from './components/views/landing-page/Insights';
import ExtraMoney from './components/views/landing-page/ExtraMoney';
import Footer from './components/views/landing-page/Footer';
import Signup from './components/views/signup/Signup';
import Login from './components/views/login/Login';
import LoginCopy from './components/views/login/LoginCopy';
import Navbar from './components/views/dashboard/Navbar';
import Dashboard from './components/views/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path= '/' exact component= {props => (
            <div>
              <AdCampaign />
              <BudgetCampaign />
              <EasySteps />
              <AmplifyReach />
              <Testimonials />
              <Insights />
              <ExtraMoney />
              <Footer />
              <LoginCopy />
              <Navbar />
              <Dashboard />
            </div>
          )} />
          <Route path= '/login' exact component= {Login} />
          <Route path= '/signup' exact component= {Signup} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
