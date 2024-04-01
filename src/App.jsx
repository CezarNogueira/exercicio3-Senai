import './App.css';
import Header from './assets/header/Header';
import Stopwatch from './assets/page';

function App() {
  return (
    <div className="container">
      <header><Header/></header>
      <main><Stopwatch/></main>
    </div>
  );
};

export default App