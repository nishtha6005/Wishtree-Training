import React, {Component} from "react";

class Filter extends Component {
    constructor(){
        super();
        this.state ={ClientData:[
            { clientId: 123, clientName: 'A1 Pvt Ltd', dueAmount: 50000, type: 'local' },
            { clientId: 124, clientName: 'A2 Pvt Ltd', dueAmount: 80000, type: 'central' },
            { clientId: 125, clientName: 'A3 Pvt Ltd', dueAmount: 70000, type: 'local' },
            { clientId: 126, clientName: 'A4 Pvt Ltd', dueAmount: 90000, type: 'local' },
            { clientId: 127, clientName: 'A5 Pvt Ltd', dueAmount: 20000, type: 'central' },
            { clientId: 128, clientName: 'A6 Pvt Ltd', dueAmount: 30000, type: 'local' },
            { clientId: 129, clientName: 'A7 Pvt Ltd', dueAmount: 70000, type: 'central' },
            { clientId: 130, clientName: 'A8 Pvt Ltd', dueAmount: 50000, type: 'local' }
        ], TempData:[]
    }
    }

    componentDidMount(){
        let { ClientData, TempData } = this.state;
        TempData = ClientData;
        this.setState({TempData});
    }

    OnFilterHandler=(Type)=>{
        let { ClientData, TempData } = this.state;
        if (Type==='all')
            ClientData=TempData
        else
            ClientData = TempData.filter(item=>( Type==='all' ? item.type : item.type === Type))
        this.setState({ClientData});     
    }

    render(){
        let {ClientData} = this.state
        return(
         <>
         <h2 >Client Data</h2>
         <button className='btn btn-primary m-2' onClick={()=>{this.OnFilterHandler('local')}}>Local</button>
         <button className="btn btn-primary m-2" onClick={()=>{this.OnFilterHandler('central')}}>Central</button>
         <button className="btn btn-primary m-2 " onClick={()=>{this.OnFilterHandler('all')}}>All</button>
         <table className='table table-striped'>
            <tbody>
                <tr>
                    <th>Client ID</th>
                    <th>Client Name</th>
                    <th>Due Amount</th>
                    <th>Type</th>
                </tr>
                {ClientData.map((item, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{item.clientId}</td>
                            <td>{item.clientName}</td>
                            <td>{item.dueAmount}</td>
                            <td>{item.type}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>   
        )
    }
}

export default Filter