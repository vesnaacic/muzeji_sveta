
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
        <NavBar></NavBar>
     </BrowserRouter>
    </div>
  );
}

export default App;
