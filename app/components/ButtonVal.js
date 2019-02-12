import React from 'react'
 class ButtonVal extends React.Component{
     constructor(props){
         super(props)
    }
    render(){
        const div_style={
            border:'1px solid black'    
        }
        const text = this.props.val
        return(
            <div style={div_style}>
               {text}
            </div>    
        )
    }
}

 export default ButtonVal