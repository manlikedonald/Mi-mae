import './App.css';
import AdCampaign from './components/AdCampaign';
import NavBar from './components/NavBar';
import BudgetCampaign from './components/BudgetCampaign';
import EasySteps from './components/EasySteps';
import AmplifyReach from './components/AmplifyReach';
import Testimonials from './components/Testimonials';
import Insights from './components/Insights';
import ExtraMoney from './components/ExtraMoney';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <AdCampaign />
      <BudgetCampaign />
      <EasySteps />
      <AmplifyReach />
      <Testimonials />
      <Insights />
      <ExtraMoney />
      <Footer />
    </div>
  );
}

export default App;
