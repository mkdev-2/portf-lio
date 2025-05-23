import React, { useState, useEffect } from 'react';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import HomePagdData from '../data/HomePagdData.json';

export default function Home() {
  const [pageData, setPageData] = useState(HomePagdData);

  useEffect(() => {
    // Força o recarregamento dos dados ignorando o cache
    fetch('/data/HomePagdData.json?v=' + new Date().getTime())
      .then(response => response.json())
      .then(data => {
        setPageData(data);
        console.log('Dados atualizados:', data);
      })
      .catch(error => {
        console.error('Erro ao carregar dados:', error);
      });
  }, []);

  const {
    hero,
    socialBtns,
    about,
    hardSkills,
    softSkills,
    projects,
    contact,
  } = pageData;

  console.log('Projects data from Home:', projects);
  
  // Garantir que projects tem a estrutura correta
  const projectsData = {
    sectionHeading: projects.sectionHeading,
    allProjects: projects.allProjects
  };
  
  return (
    <>
      <Hero data={hero} socialData={socialBtns} />
      <About data={about} />
      <Experience hardSkills={hardSkills} softSkills={softSkills} />
      <Projects data={projectsData} />
      <Contact data={contact} socialData={socialBtns} />
    </>
  );
}
