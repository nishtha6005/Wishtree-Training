import React, { Component } from 'react'

class Spread extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Contact : {contactid:'',contactName:''}
      }
    }

    onChangeHandler=(e)=>{
        let {name,value}=e.target;
        let {Contact}=this.state;
        console.log(name,value)
        this.setState({Contact:{...Contact,[name]:value}})
        
    }
    submitHandler=(e)=>{
        e.preventDefault();
        //console.log(Contact)
    }
    
  render() {
      let {Contact}=this.state
    return (
      <>
        <div className="row">
                <div className="col-md-4 ">
                    <form method="Post" onSubmit={(e)=>{this.submitHandler(e)}} >
                
                    <h3 > Contact </h3>

                    <div className="form-group m-3">
                        <input type='text' className="form-control" name='contactid' value={Contact.contactid} placeholder="Emp Id"
                        onChange={this.onChangeHandler}/>
                    </div>
                    <div className="form-group m-3">
                        <input type="text" className="form-control" name="contactName" value={Contact.contactName} placeholder="Emp Namme"
                        onChange={this.onChangeHandler}/>
                    </div>
                    <button className="btn btn-primary btn-lg my-3 mx-5 px-5 " type='submit'
                     >Add</button>
                    </form>            
                </div>
            </div>
      </>
    )
  }
}

export default Spread
