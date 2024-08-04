import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Form from './Components/Form';
import Instructions from './Components/Instructions';
import Question from './Components/Question';

function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route path='/Form' element={<Form/>}/>
        <Route path='/Instruction' element={<Instructions/>}/>
        <Route path='/question' element={<Question/>}/>
      
      </Routes>
     </Router>
    </div>
  );
}

export default App;
