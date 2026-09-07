import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Garage from './components/page_1/Garage';
import Footer from './components/Footer';
import Learn from './components/page_2/Learn';
import Build from './components/page_3/Build';
import Network from './components/page_4/Network';
import Community from './components/page_5/Community';

function App() {
  return (
    <div className="App">
        <Header />
        
        <Routes>
          <Route path="/"        element={<Garage />}></Route>
          <Route path="/learn"   element={<Learn />}></Route>
          <Route path="/build"   element={<Build />}></Route>
          <Route path="/network" element={<Network />}></Route>
          <Route path="/community" element={<Community />}></Route>
        </Routes>
        
        <Footer />
    </div>
  );
}

export default App;