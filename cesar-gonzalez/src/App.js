import React, {useState} from 'react';
import Hero from './components/Hero';
import About from './components/About'
import Nav from './components/Nav';
import ContactForm from './components/contact';
import Project from './components/Project'
import Footer from './components/Footer'
import './index.css';

function App() {
    
  const [contactSelected, setContactSelected] = useState(false);

  return (
  <div>
    <Nav
    contactSelected={contactSelected}
    setContactSelected={setContactSelected}

    ></Nav>

    <main>
        <div>
        {!contactSelected ? (
        <>
          <Hero></Hero>
        <About></About>
        </>
      ) : (
          <ContactForm></ContactForm>
        )}
        </div>
      </main>
      <Footer></Footer>
  </div>
  );
}

export default App;
