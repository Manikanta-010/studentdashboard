import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { AddStudent } from './components/AddStudent';
import { TopLearner } from './components/TopLearner';
import { Feedback } from './components/Feedback';
import { Navbar } from './components/Navbar';
import { UpdateStudent } from './components/UpdateStudent';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/add" element={<AddStudent/>} />
         <Route path="/update" element={<UpdateStudent/>} />
         <Route path="/top-learner" element={<TopLearner/>} />
         <Route path="/feedback" element={<Feedback/>} />
      </Routes>
    </div>
  );
}

export default App;
