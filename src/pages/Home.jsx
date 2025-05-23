import React from 'react';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import HomePagdData from '../data/HomePagdData.json';

export default function Home() {
  console.log('HomePagdData:', HomePagdData);
  
  const {
    hero,
    socialBtns,
    about,
    hardSkills,
    softSkills,
    projects,
    contact,
  } = HomePagdData;

  console.log('Projects data from Home:', projects);
  
  return (
    <>
      <Hero data={hero} socialData={socialBtns} />
      <About data={about} />
      <Experience hardSkills={hardSkills} softSkills={softSkills} />
      <Projects data={projects} />
      <Contact data={contact} socialData={socialBtns} />
    </>
  );
}
