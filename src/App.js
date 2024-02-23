import { useState } from 'react';
import './Style.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import HomeSection from './components/HomeSection.js';
import AboutSection from './components/AboutSection.js';
import ContactSection from './components/ContactSection.js';
import QuizSection from './components/QuizSection.js';
import CreateQuizSection from './components/CreateQuizSection.js';


export default function QuizPage() {
  const [questions, setQuestions] = useState([
    "What is the name of the force which keeps the planets in orbit around the sun?",
    "Which planet is closest to the sun?",
    "What is the term for a natural satellite?",
    "Which is the largest moon in the solar system?",
    "Which is the largest planet in the solar system?",
    "What is the smallest planet in the solar system?",
    "What would you find if you travelled to the centre of the solar system?",
    "How many planets are there in the solar system?",
    "What, ultimately, will the sun become?",
    "Which planet is furthest away from the sun?"
  ]);
  const [answers, setAnswers] = useState(["Gravity", "Mercury", "Moon", "Ganymede", "Jupiter", "Pluto:)", "Sun", "Eight", "White dwarf", "Neptune"]);
  const [allOptions, setAllOptions] = useState([
    ["Gravity", "Friction", "Tension", "Normal"], ["Mercury", "Pluto", "Venus", "Mars"], ["Moon", "Ganymede", "Phobos", "Titan"], 
    ["Ganymede", "Deimos", "Moon", "Europa"], ["Jupiter", "Saturn", "Sun", "Neptune"], ["Pluto:)", "Neptune", "Ceres", "Makemake"], 
    ["Sun", "Alpha Centuri", "Mercury", "Jupiter"], ["Eight", "Nine", "Seven", "Six"], ["White dwarf", "Red dwarf", "Black Hole", "Neutron star"], 
    ["Neptune", "Pluto", "Mercury", "Uranus"]])
  
    function createQuiz(createQuestions, createAnswer, createOptions) {
      setQuestions(createQuestions);
      setAnswers(createAnswer);
      setAllOptions(createOptions);
    };

  const [section, setSection] = useState(<HomeSection />)
  function toggleSection( isToggleSection ) {
    if (isToggleSection === 'AboutSection') {setSection(<AboutSection />)}
    else if (isToggleSection === 'ContactSection') {setSection(<ContactSection />)}
    else if (isToggleSection === 'HomeSection') {setSection(<HomeSection />)}
    else if (isToggleSection === 'QuizSection') {setSection(<QuizSection questions={questions} answers={answers} allOptions={allOptions}/>)}
    else if (isToggleSection === 'CreateQuizSection') {setSection(<CreateQuizSection createNextQuiz={createQuiz}/>)}
    else {setSection(<HomeSection />)}
  }
  return (
    <>
    <Navbar changeSection={toggleSection}/>
    { section }
    <Footer />
    </>
  );
};