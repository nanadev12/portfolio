
import './App.css';
import Home from './Routes/Home'
import About from './Routes/About'

import Project from './Routes/Project'
import {Route, Routes} from 'react-router-dom'
function App() {
  return (
   <>
   <Routes>
      <Route path = '/' element= {<Home/>}/>
      <Route path = '/about' element= {<About/>}/>

      <Route path = '/project' element= {<Project/>}/>
   </Routes>
   </>
  );
}

export default App;
