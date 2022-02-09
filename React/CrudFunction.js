import React, {useState} from 'react'

function CrudFunction() {
    const [empId, setEmpId] = useState('')
    const [empName, setEmpName]= useState('')
    const [empSalary, setEmpSalary]= useState('')
    const [showDelete, setShowDelete] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const [empData, setEmpData] = useState([])

    const addEmployee = (e)=>{
        e.preventDefault();
        let temp=empData.find(value=>{
            console.log(value.empId===empId)
            if (value.empId===empId)
            {
                value.empName = empName;
                value.empSalary = empSalary;
            } 
            return value.empId===empId
        })
        if (temp===undefined)
            empData.push({empId,empName,empSalary});
        setEmpData(empData);
        setEmpId('');
        setEmpName('');
        setEmpSalary('');
        setTimeout(()=>{
            console.log("Emp data ",empData)
            
        },2000)
    }

    const updateEmployee=(rowIndex)=>{
        setEmpId(empData[rowIndex].empId);
        setEmpName(empData[rowIndex].empName);
        setEmpSalary(empData[rowIndex].empSalary);
    }

    const deleteEmployee =(rowIndex)=>{
        setSelectedIndex(rowIndex);
        setShowDelete(true);
    }

    const onDeleteYes =()=>{
        let x = empData.splice(selectedIndex,1)
        setEmpData(empData)
        setShowDelete(false)
    }

    const onDeleteNo =()=>{
        setShowDelete(false)
    }

    const getGrade= salary => salary <=50000 ? 'D':(salary<=100000 ?'C':(salary<=200000 ? 'B':'A'));

    const getColor= salary =>salary <=50000 ? 'bg-warning':salary<=100000 ?'bg-primary':salary<=200000 ? 'bg-success':'bg-danger';

  return (
    <>
    {showDelete &&
      <div className=" m-1 p-2 text-center">
            <h1>Are you sure delete this record</h1>
            <button className='btn btn-danger px-3 m-1' onClick={onDeleteYes}>Yes</button>
            <button className='btn btn-secondary px-3 m-1' onClick={onDeleteNo} >No</button>
                </div> }

            <div className="row">
                <div className="col-md-4 ">
                    <form method="Post" onSubmit={addEmployee} >
                    <div className="border border-secondary m-3 p-2 text-center">
                        
                    {/* {alert ? <div className="alert alert-success alert-dismissible fade show" role="alert"> <strong>{alertMsg}</strong></div>:null} */}

                    <h3 > Add Employee Details</h3>

                    <div className="form-group m-3">
                        <input type='text' className="form-control" name='id' value={empId} placeholder="Emp Id"
                        onChange={(e)=>setEmpId(e.target.value)}/>
                    </div>
                    <div className="form-group m-3">
                        <input type="text" className="form-control" name="name" value={empName} placeholder="Emp Namme"
                        onChange={(e)=>setEmpName(e.target.value)}/>
                    </div>
                    <div className="form-group m-3">
                        <input type="text" className="form-control" name="salary" value={empSalary} placeholder="Salary"
                        onChange={(e)=>setEmpSalary(e.target.value)}/>
                    </div>
                    <button className="btn btn-primary btn-lg my-3 mx-5 px-5 " type='submit'
                     >Add</button>
                    </div>
                    </form>            
                </div>
            
                <div className="col-md-8 ">
                <table className="table table-bordered text-center table-hover">
                    <tbody>
                    <tr className="">
                        <th> Emp Id</th>
                        <th> Emp Name</th>
                        <th> Emp Salary</th>
                        <th> Grade </th>
                        <th> Update</th>
                        <th> Delete </th>
                    </tr>
                        {empData.map((value,index)=>{
                            return(
                            <tr key={index} >
                                <td> {value.empId}</td>
                                <td> {value.empName}</td>
                                <td > {value.empSalary}</td>
                                <td className={getColor(value.empSalary)}> {getGrade(value.empSalary)}</td>
                                 <td><button className="btn btn-primary"
                                 onClick={()=>updateEmployee(index)}>Update</button></td>
                                 <td><button className="btn btn-danger"
                                  onClick={()=>deleteEmployee(index)}>Delete</button></td>
                            </tr> 
                        )})}
                    </tbody>
                </table>
                </div>
            </div>
    </>
  )
}

export default CrudFunction
