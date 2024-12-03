import './App.css';
import Content from './Components/content';
import Greeting from './Components/greeting';
import Header from './Components/header';
import Footer from './Components/footer';
function App() {
  return (
    <div className="App">
      <Greeting/>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
