import React, { Component } from 'react'
import axios from 'axios'

class VendorCrud extends Component {
    constructor(props) {
      super(props)
      this.state = {
          VendorList:[],
          vendor:{id:'', vendorName:'', contactNo:'', type:''},
          vType:false,
          alertMsg:''
      }
    }

    getVendorList =(e)=>{
        axios.get("http://localhost:4000/Vendor").then(response=>{
            this.setState({VendorList:response.data});
        });
    }

    componentDidMount(){
        this.getVendorList();
    }

    changeHandler =(e)=>{ 
        let {name, value, checked} = e.target;
        let {vendor, vType}= this.state;
        if (name === 'type')
        {
            value = checked
            this.setState({vType:value})
        }
        this.setState({vendor:{...vendor,[name]:value}});
    }
    
    addVendor = (e)=>{
        e.preventDefault();
        let {vendor, VendorList, vType} = this.state
        let x = VendorList.find(val => val.id == vendor.id )
        if (x === undefined)
        {
            axios.post("http://localhost:4000/Vendor",this.state.vendor).then(response =>{
                this.setState({alertMsg : 'Employee Added Successfuly !!!'});
                this.getVendorList();
            })
        }
        else 
        {           
            axios.put("http://localhost:4000/Vendor/"+vendor.id,this.state.vendor).then(response =>{
            this.setState({alertMsg : 'Employee Updated Successfuly !!!'})
            this.getVendorList()
        })
        }
        vendor.id=''
        vendor.vendorName=''
        vendor.contactNo=''
        vType=false
        this.setState({vendor,vType})
        
    }

    updateVendor = (vid)=>{
        let {VendorList}= this.state
        let v = VendorList.find(val=> val.id == vid)
        this.setState({vendor:v,vType:v.type})
    }

    deleteVendor = (vid)=>{
        let x = window.confirm("Are you sure you want to delete ?")
        const URL = "http://localhost:4000/Vendor/"+vid
        if (x) 
            axios.delete(URL).then(response=>{ 
                console.log(response);
                this.setState({alertMsg : 'Employee Deleted Successfuly !!!'})
                this.getVendorList();
            });
    }

    render() 
    {
        let {VendorList, vendor, vType, alertMsg} = this.state;
        return (
        <>
        <div className="row">
            <div className="col-md-4 ">
                <div className="border border-secondary m-3 p-2 text-center">
                { <div className=" alert-success alert-dismissible fade show" role="alert"> 
                            <strong>{alertMsg}</strong>
                            </div> }
                    <h3 > Add Vendor Details</h3>
                    <form method="Post" >
                        <div className="form-group m-3">
                            <input type='text' className="form-control" name='id' value={vendor.id}
                            onChange={this.changeHandler} placeholder="Vendor Id"/>
                        </div>
                        <div className="form-group m-3">
                            <input type="text" className="form-control" name="vendorName" value={vendor.vendorName}
                            onChange={this.changeHandler} placeholder="Vendor Name"/>
                        </div>
                        <div className="form-group m-3">
                            <input type="tel" className="form-control" name="contactNo" value={vendor.contactNo}
                            onChange={this.changeHandler} placeholder="Contact Number"/>
                        </div>
                        <div className="form-group">
                            <label >Active</label>
                            <input type="checkbox" className='m-2' name="type" checked={vType} 
                                onChange={this.changeHandler}/>
                        </div>
                        <button className="btn btn-success btn-lg my-3 mx-5 px-5 " type='submit'
                        onClick={(e)=>this.addVendor(e)}>Add Vendor</button>
                    </form>            
                </div>
            </div>
            <div className="col-md-7 mt-3">
            <table className="table table-bordered table-striped table-hover text-center">
                <tbody>
                    <tr>
                        <th> Vendor Id </th>
                        <th> Vendor Name </th>
                        <th> Contact No </th>
                        <th> Active </th>
                        <th> Update </th>
                        <th> Delete </th>
                    </tr>
                    { VendorList.map(item=>{
                        return (
                            <tr key={item.id}>
                                <td> {item.id}</td>
                                <td> {item.vendorName}</td>
                                <td> {item.contactNo}</td>
                                <td> <input type="checkbox" checked={item.type} onChange={()=>{}}/></td>
                                <td> <button className="btn btn-success" onClick={()=>this.updateVendor(item.id)}>Update</button></td>
                                <td> <button className="btn btn-danger" onClick={()=>this.deleteVendor(item.id)}>Delete</button></td>
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
}

export default VendorCrud
