import { Outlet } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      <HomePage /> 
      <Outlet /> 
      <Footer /> 
    </div>
  );
}

export default App;
