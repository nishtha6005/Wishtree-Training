import React, {useState} from 'react'

function Loan() {
    const [amount, setAmount] = useState(1);
    const [years, setYears] = useState(1);
    const [rate, setRate] = useState(1);
    const [interest, setInterest] = useState();

  return (
    <>
    <div className="row">
        <div className="col-md-4 border border-dark border-2  my-5 mx-auto p-3 text-center">
            <h3 > Interest Calculator</h3>
            <h5> Monthly installment : {interest} </h5> 
            <div className="form-group m-3">
                <input type='text' className="form-control"  placeholder="Enter Principal Amount" onChange={(e)=>setAmount(parseFloat(e.target.value))}/>
            </div>
            <div className="form-group m-3">
                <input type="text" className="form-control" placeholder="Enter Rate of Interest" onChange={(e)=>setRate(parseFloat(e.target.value))}/>
            </div>
            <div className="form-group m-3">
                <input type="text" className="form-control"  placeholder="Enter Years" onChange={(e)=>setYears(parseInt(e.target.value))}/>
            </div>
            <button className="btn btn-dark btn-lg my-3 mx-5 px-5 " 
            onClick={()=>setInterest(Math.round((amount +(amount*rate)/100)/12*years))}>Calculate</button>
        </div>        
    </div>
    </>
  )
}

export default Loan;
