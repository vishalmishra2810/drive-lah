import './App.css';
import Header from './component/header/header';
import DeviceManagement from './pages/device-management';
import SubscriptionPlan from './pages/subscription-plan';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/subscription" element={<SubscriptionPlan />} />
        <Route path="/device" element={<DeviceManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
