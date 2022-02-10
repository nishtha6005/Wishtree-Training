import React, {Component} from "react";

class CrudClass extends Component{
    constructor(){
        super();
        this.state={Emp:[{empid:201,empname:'Krish',salary:75000},
        {empid:202,empname:'Hiral',salary:150000},
        {empid:203,empname:'Aman',salary:45000},
        {empid:204,empname:'Shreya',salary:260000},
        {empid:205,empname:'Kriti',salary:90000},
        {empid:206,empname:'Arun',salary:150000},
        ],
        empid:'', 
        empname:'', 
        salary:'',
        alert:false,
        alertMsg:'',
        showDelete:false,
        selectedIndex:-1
        };
    }
    
    addHandler=(e)=>{
        e.preventDefault();
        let {Emp,empid,empname,salary,alertMsg}=this.state;
        let msg=''
        let temp = Emp.find((value)=>{
            console.log(value.empid===empid)
            if (value.empid === empid)
            {
                value.empname=empname;
                value.salary = salary; 
            }
            return value.empid===empid
        })
        console.log('Temp',temp)
        if (temp === undefined)
        {
            Emp.push({empid,empname,salary});
            msg = 'Employee Added Successfully !!'
        }
        else
            msg = 'Employee Updated Successfully !!'
        this.setState({Emp:Emp,empid:'',empname:'',salary:'',alert:true,alertMsg:msg});
        
    }

    deleteHandler=(rowIndex)=>{
        this.setState({ showDelete: true, selectedIndex: rowIndex });
    }

    onYes = () => {
        let { Emp } = this.state;
        Emp.splice(this.state.selectedIndex, 1);
        this.setState({ Emp, showDelete: false });
    }

    onNo = () => {
        this.setState({ showDelete: false })
    }
     
    updateHandler=(rowIndex)=>{
        let {Emp} = this.state;
        let sal = Emp[rowIndex].salary
        let ename = Emp[rowIndex].empname
        let eid = Emp[rowIndex].empid
        this.setState({empid:eid,empname:ename,salary:sal});
    }

    getColor=(salary)=>salary <=50000 ? 'bg-warning':salary<=100000 ?'bg-primary':salary<=200000 ? 'bg-success':'bg-danger';
    
    getGrade=(salary)=>salary <=50000 ? 'D':salary<=100000 ?'C':salary<=200000 ? 'B':'A';

    onChangeHandler=(e)=>{
        let {name, value} = e.target;
        console.log(name,' ',value);
        if (name==='id')
            this.setState({empid:value})
        else if (name==='name')
            this.setState({empname:value})
        else if (name ==='salary')
            this.setState({salary:value})
    }
    
    render()
    {
        let {Emp,empid,empname,salary,alert,showDelete,alertMsg}=this.state;
        return(
            <>
            {this.state.showDelete ? 
            <div className=" m-1 p-2 text-center">
                <h1>Are you sure delete this record</h1>
                <button className='btn btn-danger px-3 m-1' onClick={this.onYes}>Yes</button>
                <button className='btn btn-secondary px-3 m-1' onClick={this.onNo} >No</button>
                </div> : null}

            <div className="row">
                <div className="col-md-4 ">
                    <form method="Post" onSubmit={(e)=>{this.addHandler(e)}} >
                    <div className="border border-secondary m-3 p-2 text-center">
                        
                    {alert ? <div className="alert alert-success alert-dismissible fade show" role="alert"> <strong>{alertMsg}</strong></div>:null}

                    <h3 > Add Employee Details</h3>

                    <div className="form-group m-3">
                        <input type='text' className="form-control" name='id' value={empid} placeholder="Emp Id"
                        onChange={this.onChangeHandler}/>
                    </div>
                    <div className="form-group m-3">
                        <input type="text" className="form-control" name="name" value={empname} placeholder="Emp Namme"
                        onChange={this.onChangeHandler}/>
                    </div>
                    <div className="form-group m-3">
                        <input type="text" className="form-control" name="salary" value={salary} placeholder="Salary"
                        onChange={this.onChangeHandler}/>
                    </div>
                    <button className="btn btn-primary btn-lg my-3 mx-5 px-5 " type='submit'
                     >Add</button>
                    </div>
                    </form>            
                </div>
            
                <div className="col-md-8 ">
                <table className="table table-bordered text-center">
                    <tbody>
                    <tr className="">
                        <th> Emp Id</th>
                        <th> Emp Name</th>
                        <th> Emp Salary</th>
                        <th> Grade </th>
                        <th> Update</th>
                        <th> Delete </th>
                    </tr>
                        {Emp.map((value,index)=>{
                            return(
                            <tr key={index} >
                                <td> {value.empid}</td>
                                <td> {value.empname}</td>
                                <td > {value.salary}</td>
                                <td className={this.getColor(value.salary)}> {this.getGrade(value.salary)}</td>
                                <td><button className="btn btn-primary"
                                 onClick={()=>this.updateHandler(index)}>Update</button></td>
                                 <td><button className="btn btn-danger"
                                  onClick={()=>this.deleteHandler(index)}>Delete</button></td>
                            </tr> 
                        )})}
                    </tbody>
                </table>
                </div>
            </div>
            </>
        )
    }
}

export default CrudClass;