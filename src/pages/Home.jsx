import React from 'react';
import About from '../components/About';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Service from '../components/Service';
import HomePagdData from '../data/HomePagdData.json';

export default function Home() {
  const {
    hero,
    socialBtns,
    brands,
    about,
    hardSkills,
    softSkills,
    projects,
    contact,
  } = HomePagdData;
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
