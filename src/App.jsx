import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css'
import HomePage from './components/Home';
import Typography from './components/Typography';
import Buttons from './components/Buttons';
import Colors from './components/Colors';

function App() {
  
  return (
    <Routes>
      <Route path="/alpha" index element={<HomePage /> } />
      <Route path="/alpha/typography" element={<Typography /> } />
      <Route path="/alpha/palettes" element={<Colors /> } />
      <Route path="/alpha/components/buttons" element={<Buttons /> } />
    </Routes>
  )
}

export default App
