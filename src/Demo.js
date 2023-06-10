import React from "react";

class Demo extends React.Component{
    state={
        name:"ReactJS",
        value:111,
        dummy:false
    }
    display=()=>{
        if(this.state.dummy==false){
            this.setState({
                name:"Angular",
                value:222,
                dummy:true
        })
    }
        else{
            this.setState({
                name:"ReactJS",
                value:111,
                dummy:false
        })
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.name} {this.state.value}</h1>
                <p>Name : {this.props.name}</p>
                <p>Company : {this.props.company}</p>
                <button onClick={this.display}>Click</button>
            </div>
        )
    }
}

export default  Demo;