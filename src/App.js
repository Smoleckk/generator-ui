import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import AddProduct from './components/AddProduct';
import EmployeeList from './components/EmployeeList';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<EmployeeList/>}/>
          <Route  index element={<EmployeeList/>}></Route>
          <Route  path="/employeeList" element={<EmployeeList/>}/>
          <Route  path="/addEmployee" element={<AddEmployee/>}/>
          <Route path="editEmployee/:id" element={<UpdateEmployee />} />
          <Route  path="/productList" element={<ProductList/>}/>
          <Route  path="/addProduct" element={<AddProduct/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
