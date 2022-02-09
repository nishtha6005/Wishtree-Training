import React, {useState, useEffect} from 'react'

 function TableFunction() {
    const [data, setData]=useState([])
    const [load, setLoad]=useState(true)
    const [unique, setUnique]=useState([])
    const [tempData, setTempData]=useState([])
    
    useEffect(()=>{
        let temp=[{ clientId: 123, clientName: 'A1 Pvt Ltd', dueAmount: 50000, type: 'A',selected:false},
        { clientId: 124, clientName: 'A2 Pvt Ltd', dueAmount: 80000, type: 'B',selected:false},
        { clientId: 125, clientName: 'A3 Pvt Ltd', dueAmount: 70000, type: 'C',selected:false },
        { clientId: 126, clientName: 'A4 Pvt Ltd', dueAmount: 90000, type: 'B' ,selected:false},
        { clientId: 127, clientName: 'A5 Pvt Ltd', dueAmount: 20000, type: 'C' ,selected:false},
        { clientId: 128, clientName: 'A6 Pvt Ltd', dueAmount: 30000, type: 'A' ,selected:false},
        { clientId: 129, clientName: 'A7 Pvt Ltd', dueAmount: 70000, type: 'D',selected:false },
        { clientId: 130, clientName: 'A8 Pvt Ltd', dueAmount: 50000, type: 'E' ,selected:false}]

        // Creating a set by using map() on temp to get unique values of 'type' 
        let x = [...new Set(temp.map(item => item.type))]

        if (load)
        {
            setData(temp)
            setTempData(temp)
            setUnique(x)
            setLoad(false)
        }
        console.log("Unique ",unique)
       
    },[])

    const onSelect=(e)=>{
        let {value, options, selectedIndex }=e.target;
        // console.log(value,options, selectedIndex);
        console.log(options[selectedIndex].text)
        // Filtering data on selected item 
        let x = tempData.filter(item=> item.type===value )
        setData(x)
    }

    // to toggle background colour on click of button on row
    const onChangeRow =(rowIndex)=>{
        data[rowIndex].selected=!data[rowIndex].selected
        setData([...data])

    }

  return (
    <>
    {load? <strong>Loading</strong>:
    <>
    <div className='row'>
        <div className='col-md-3'>
        <select className='form-select mb-3' onChange={onSelect}>
            <option defaultValue='Choose option'>Choose option</option>
        {/* showing unique values of type in drop-down using map() on unique */}
        {unique.map((val,index) => <option key={index} value={val} >{val}</option>)}
        </select>
        </div>

        <div className='col-md-9'>
        <table className="table table-bordered text-center table-striped">
            <tbody>
                <tr>
                    <th>Client ID</th>
                    <th>Client Name</th>
                    <th>Due Amount</th>
                    <th>Type</th>
                </tr>

            { data.map((item, idx) => {
                return (
                    <tr key={idx} className={item.selected && 'bg-danger'}>
                        <td>{item.clientId}</td>
                        <td>{item.clientName}</td>
                        <td>{item.dueAmount}</td>
                        <td>{item.type}</td>
                        <td><button className='btn btn-secondary' onClick={()=>onChangeRow(idx)}>Select</button></td>
                    </tr>
                )
            })}
            </tbody>
        </table>
        </div>
    </div>
    </> }
    </>
  )
}

export default TableFunction