import { Routes, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import Converter from './pages/Converter';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="converter" element={<Converter />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

function Home() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo mb-4" alt="logo" />
        <p>
          Data Analysis and Bitcoin Tools.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
