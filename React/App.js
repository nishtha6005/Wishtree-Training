import logo from './logo.svg';
import './App.css';

import EmployeeApiPost from './EmployeeApiPost';

import EmployeeApiGet from './EmployeeApiGet';


import EmployeeApiDelete from './EmployeeApiDelete';

import EmployeeApiPut from './EmployeeApiPut';
import EmployeeApiPutGrid from './EmployeeApiPutGrid';

import VendorCrud from './VendorCrud';

import Loan from './Loan';
function App(props) {
  return (
    <>
    <EmployeeApiPutGrid/>
    <hr/>
    <EmployeeApiPut/>
    <hr/>
    <VendorCrud/>

    {/* <EmployeeApiDelete/> */}
    {/* <EmployeeApiPost/> */}
    {/* <EmployeeApiGet/> */}
    {/* <ProductCrud/> */}
    {/* <CrudFunction/> */}
    {/* <CrudClass/> */}
    {/* <FormCss/> */}
     {/* <Form/> */}
     {/* <h1 className='text-center'>CRUD Operations</h1>
     <br/>
      
      <hr/>
      <Loan/>
      <hr/>*/}
      {/* <TableFunction/>  */}
    {/* <Filter/>  */}
    {/* <Spread/> */}
    </>
       
  );
}


export default App;
