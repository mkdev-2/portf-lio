import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './assets/css/style.css';
import './assets/css/color/color-2.css';
import './assets/css/style-2.css';
import HomeDefault from './pages/HomeDefault';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });

    // Reiniciar AOS em mudança de tamanho de tela
    window.addEventListener('resize', () => {
      AOS.refresh();
    });

    // Script para detectar elementos na viewport e aplicar a animação fade-in
    const handleScroll = () => {
      const sections = document.querySelectorAll('.fade-in-section');
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.85) {
          section.classList.add('is-visible');
        }
      });
      
      // Atualiza as animações AOS durante o scroll
      AOS.refresh();
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Iniciar verificação ao carregar a página
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', () => {
        AOS.refresh();
      });
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeDefault />} />
      </Routes>
    </Router>
  );
}

export default App; 