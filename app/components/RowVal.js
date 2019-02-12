import React from 'react'
import ButtonVal from './ButtonVal'

class RowVal extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const div_style={
            padding: '2px'
        }
        return(
            <div style={div_style}>
                <button onClick={()=> this.props.handleClick(this.props.val.first)}><ButtonVal val={this.props.val.first} /></button>
                <button onClick={()=> this.props.handleClick(this.props.val.second)}><ButtonVal val={this.props.val.second} /></button>
                <button onClick={()=> this.props.handleClick(this.props.val.third)}><ButtonVal val={this.props.val.third} /></button>
                <button onClick={()=> this.props.handleClick(this.props.val.fourth)}><ButtonVal val={this.props.val.fourth} /></button>
            </div>
        )
    }
}

export default RowVal