import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import NoticiasPage from './pages/NoticiasPage';
import EspecialidadesPage from './pages/EspecialidadesPage';
import ServiciosPage from './pages/ServiciosPage';
import LlegarPage from './pages/LlegarPage';
import GaleriaPage from './pages/GaleriaPage';
import SociosPage from './pages/SociosPage';
import ContactanosPage from './pages/ContactanosPage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
      <Nav></Nav>
        <Routes>
          
          <Route path='/' element={<NoticiasPage />} />
          <Route path='especialidades' element={<EspecialidadesPage />} />
          <Route path='servicios' element={<ServiciosPage />} />
          <Route path='galeria' element={<GaleriaPage />} />
          <Route path='socios' element={<SociosPage />} />
          <Route path='llegar' element={<LlegarPage />} />
          <Route path='contactanos' element={<ContactanosPage />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div >
  );
}

export default App;
