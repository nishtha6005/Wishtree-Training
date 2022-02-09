import React, {useState, useEffect} from 'react'

function FormCss() {
    const [empCode, setEmpCode]= useState('')
    const [empName, setEmpName]= useState('')
    const [status, setStatus] = useState('')
    const [chooseStyle, setchooseStyle] = useState('')
    const [empData, setEmpData] = useState([])
    
    const submitData = (e)=>{
        e.preventDefault();
        empData.push({empCode,empName,status,chooseStyle});
        // console.log(e)
        setEmpData(empData);
        setEmpCode('');
        setEmpName('');    
        // setStatus()    
    }

    // const changeHandler = (e)=>
    // {
    //     console.log(e.target.value)
    //     setStatus(e.target.value)
    // }
    const getClassStyle = (status)=>status==='active'?'bg-success text-white':'bg-warning text-white';

    const getStyle=(status)=> status==='active'?{backgroundColor:'blue',color:'white'}:{backgroundColor:'red',color: "white"};

return (
    <>
    <div className='row'>
    <div className='col-md-6'>
        <div className="border border-secondary m-3 p-2 text-center">
            <h3> Add Employee Details</h3>
            <form method="Post">
                <div className='form-group  m-3'>
                    <input type='text' className="form-control" name='empCode' placeholder="Emp Code" value={empCode}
                    onChange={(e)=>setEmpCode(e.target.value)}/>
                </div>
                <div className='form-group  m-3'>
                    <input type='text' className="form-control" name='empName' placeholder="Emp Name" value={empName}
                    onChange={(e)=>setEmpName(e.target.value)}/>
                </div>
                <div className='form-group  m-3'>
                <select className="form-select" onChange={(e)=>setStatus(e.target.value)} >
                    <option value='status'>Select Employee Status</option>
                    <option value="active">Active</option>
                    <option value="disabled">Disabled</option>
                </select>
                </div>
                <div className='form-group  m-3'>
                <select className="form-select" onChange={(e)=>setchooseStyle(e.target.value)}>
                    <option value='type'>Select Style Type</option>
                    <option value="style">Style Attribute </option>
                    <option value="class">Class Name Attribute</option>
                </select>
                </div>
                <button className="btn btn-primary btn-lg my-3 mx-5 px-5 " type='submit' onClick={submitData}>
                Submit</button>
            </form>
        </div>
    </div>
    <div className='col-md-6'>
        <table className="table table-bordered text-center table-striped m-3">
            <tbody>
                <tr>
                    <th>Emp Code</th>
                    <th>Emp Name</th>
                    <th>Status</th>
                    <th>Css Type</th>
                </tr>
                { empData.map((item, idx) => {
                return (
                    <tr key={idx} >
                        <td>{item.empCode}</td>
                        <td>{item.empName}</td>
                        {item.chooseStyle==='style' ? 
                        <td style={getStyle(item.status)}>{item.status}</td> :
                        <td className={getClassStyle(item.status)}>{item.status}</td>}
                         <td>{item.chooseStyle}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    </div>
    </div>
    </>
  )
}


export default FormCss;