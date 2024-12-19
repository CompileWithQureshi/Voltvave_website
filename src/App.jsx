import './App.css';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Vision from './Components/Vision';
import Service from './Components/Service';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <NavBar />
      <main className="container mx-auto px-6">
        <About />
        <Vision />
        <Service />
      </main>
      <Contact />
    </>
  );
}

export default App;
