import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/NavBar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testmonials';
import Contacts from './components/Contacts';
import Particles from 'react-particles-js';

function App() {
  return (
    <div className="App">
      <Particles
      className="particles-canvas"
         params={{
          particles:{
            number:{
              value:30,
              density:{
                enabled:true,
                value_area:900
              }
            },
            shape:{
              type:"circle",
              stroke:{
                width:6,
                color:"#fa9b00"
              }
            }
          }
      }}
      />
      <NavBar/>
      <Header/>
      <AboutMe/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contacts/>
    </div>
  );
}

export default App;
