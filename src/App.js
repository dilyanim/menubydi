import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Recipe from './components/Recipe' ;
import Menu from './components/Menu'


function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Recipe/>
      <Footer/>
    </div>
  );
}

export default App;
