import logo from "./logo.svg";
import "./App.css";
import Bus from "./views/Bus";

import { useNavigate, Routes, Route,Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
function App() {
  const navigate = useNavigate();
  const goTodashboard = () => {
    navigate("/dashboard");
  };
  return (
    <div className="App">
      <div className="header-container"> <h1>Click on available seats to proceed with your transactions</h1></div>
     
      
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/" element={  <Bus seats={40} deck={2} />}/>
      </Routes>

    
    </div>
  );
}

export default App;
