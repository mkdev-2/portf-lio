import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Preloader from './components/Preloader';  // Importa o Preloader
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import React from 'react';

function App() {
  const [loading, setLoading] = useState(true);  // Estado para o Preloader

  useEffect(() => {
    Aos.init({
      once: true,  // Animações serão executadas apenas uma vez
    });
    // Simula o carregamento do Preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);  // Ajuste o tempo de acordo com o necessário

    return () => clearTimeout(timer);  // Limpa o timer ao desmontar o componente
  }, []);

  if (loading) {
    return <Preloader />;  // Exibe o Preloader enquanto carrega
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
