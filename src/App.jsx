import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from '../Regsiter';
import Login from './LoginUser';
import Welcome from './Component/Welcome';
import { useContext } from 'react';
import Dashboard from './Component/Dashboard';


function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Welcome/>}></Route>
       <Route path='/Register' element={<Register />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/Dashboard/:fullname' element={<Dashboard/>}/>
       </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
