import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        My Portfolio
        <Nav/>
      </header>
      <ContactForm/>
      <About/>
    </div>
  );
}

export default App;
