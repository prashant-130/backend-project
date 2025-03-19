import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import PrivateRoute from './Components/PrivateComponent';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav></Nav>
     <Routes>
      <Route  element={<PrivateRoute></PrivateRoute>}>
      <Route path='/' element={<h1>Product Listing</h1>}></Route>
      <Route path='/add' element={<h1>Add Listing</h1>}></Route>
      <Route path='/update' element={<h1>Update Listing</h1>}></Route>
      <Route path='/logout' element={<h1>Logout Listing</h1>}></Route>
      <Route path='/profile' element={<h1>PRofile Listing</h1>}></Route>
      </Route>
      <Route path='/SignUp' element={<SignUp></SignUp>}></Route>
     </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
