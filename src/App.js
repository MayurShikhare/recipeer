import { Route, Routes } from 'react-router';
import './App.css';
import Details from './Redux/Details/Details';
import Fooditems from './Redux/FoodItem/FoodItems';

function App() {
  return (
    <div >
      <br/>
      <center className="App"> <h1 > Recipe Finder</h1></center>
      <br/>
      <Routes>
        <Route path="/" element={<Fooditems />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
