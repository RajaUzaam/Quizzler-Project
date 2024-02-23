import { useState } from 'react';


export default function Navbar({ changeSection }) {
    const [btnTheme, setBtnTheme] = useState('fas fa-moon fa-2x')
    const elementBody = document.body.dataset;
    const toggleTheme = () => {
      if (elementBody.bsTheme === 'dark') {
        elementBody.bsTheme = 'light';
        setBtnTheme('fas fa-sun fa-2x');
      } else {
        elementBody.bsTheme = 'dark';
        setBtnTheme('fas fa-moon fa-2x');
      }
    }
    return(
      <nav className='Nav navbar navbar-expand-lg'>
        <div className='container-fluid'>
          <div>
          <a href='http://192.168.100.24:3000' className='logo'>
          Quiz<img src='https://cdn-icons-png.flaticon.com/256/5692/5692030.png' alt="Quizzler's Logo" width={'100%'} className='img-fluid'/>zler
          </a>
          </div>
          <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarContent">
            <i className='navbar-toggler-icon'></i>
          </button>
          <div className='collapse' id='navbarContent'>
            <ul className='navbar-nav'>
              <li className='nav-item'><button className='nav-link' onClick={() => changeSection('HomeSection')}>Home</button></li>
              <li className='nav-item'><button className='nav-link' onClick={() => changeSection('AboutSection')}>About</button></li>
              <li className='nav-item'><button className='nav-link' onClick={() => changeSection('ContactSection')}>Contact</button></li>
              <li className='nav-item'><button className='nav-link' onClick={() => changeSection('QuizSection')}>Play</button></li>
              <li className='nav-item'><button className='nav-link' onClick={() => {changeSection('CreateQuizSection')}}>Create</button></li>
              <li className='nav-item'><button className='btnTheme' onClick={toggleTheme}><i className={btnTheme}></i></button></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };