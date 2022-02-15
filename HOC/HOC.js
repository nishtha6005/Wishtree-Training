import React from "react";


const HOC = (OriginalComponent)=>{
    class NewComponent extends React.Component{
        constructor(props)
        {
            super(props);
            this.state = {
                count: 0
            }
        }
        incrementCount=()=>{
            let {count} = this.state;
            count++;
            this.setState({count});
        }

        render (){
            return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} />
        }
    }
    return NewComponent
}

export default HOC