

import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
import Surveys from './pages/Surveys.jsx';
import Portfolio from './pages/Portfolio.jsx';
import UserTraining from './pages/UserTraining.jsx';
import Doctors from './pages/Doctors.jsx';
import Pharmacy from './pages/Pharmacy.jsx';
import TheraphyAsoociate from './pages/TheraphyAsoociate.jsx';
 import "bootstrap/dist/css/bootstrap.css"
import Signin from './pages/Signin/Signin';


const App = () => {
  
  
  return (
   <div>
    {/* <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Signin/>} />  
      </Routes>
      </BrowserRouter>
    </div> */}
    
    <BrowserRouter>
      {/* <Sidebar> */}
        <Routes>
            <Route path="/" element={<Signin/>} />  
          <Route path="/surveys" element={<Surveys />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/usertraining" element={<UserTraining />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/theraphy" element={<TheraphyAsoociate/>} />
        </Routes>
      {/* </Sidebar> */}
    </BrowserRouter>
    
    </div>
  );
};

export default App;