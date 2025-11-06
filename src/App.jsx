import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import PaulowniaTree from './components/PaulowniaTree';
import Header from './components/Header';
import Footer from './components/Footer';
import InvestorDocs from './components/InvestorDocs';
const App = () => {
  return (
    <div>
      
          <BrowserRouter>
          {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paulowniaTree" element={<PaulowniaTree />} />
          <Route path="/investorDocs" element={<InvestorDocs />} />
        </Routes>

           <Footer />
      </BrowserRouter>

   
      </div>
  )
}

export default App
