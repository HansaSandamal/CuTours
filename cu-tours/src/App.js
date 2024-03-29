import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Routes} from "react-router-dom";

import { theme } from './theme';
import styled from 'styled-components';
import Header from './layouts/Header/Header';
import HomeView from './views/HomeView/HomeView';
import AboutView from './views/AboutView/AboutView';
import ContactView from './views/ContactView/ContactView';
import DestinationsView from './views/DestinationsView/DestinationsView';
import Footer from './layouts/Footer/Footer';


function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeView/>} />
        <Route path="/about" element={<AboutView/>} />
        <Route path="/contact" element={<ContactView/>} />
        <Route path="/destinations" element={<DestinationsView/>} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
