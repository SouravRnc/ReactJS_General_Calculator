import React from 'react'
import RowVal from './components/RowVal';

class App extends React.Component{
    constructor(){
        super()
        this.state={
            displayText:0,
            topVal:[],
            opertaion:null,
            bottomVal:[],
            calState:0
        }
        this.handleClick=this.handleClick.bind(this)
        this.handleClear=this.handleClear.bind(this)
    }

    handleClick(ch){
        if((!isNaN(ch) || ch=='.')&&(this.state.calState==0)){
            this.setState(function(prevState){
                const newTopVal = prevState.topVal.map(function(item){
                    return item
                })
                newTopVal.push(ch)
                return({
                    topVal:newTopVal,
                    displayText:newTopVal
                })
            })
        }
        else if((!isNaN(ch) || ch=='.')&&(this.state.calState==1)){
            this.setState(function(prevState){
                const newBottomVal = prevState.bottomVal.map(function(item){
                    return item
                })
                newBottomVal.push(ch)
                return({
                    bottomVal:newBottomVal,
                    displayText:newBottomVal
                })
            })
        }
        else if(ch=='='){
            var i
            var num1=0.0
            var num2=0.0
            var answer=0.0
            for(i=0;i<this.state.topVal.length;i++){
                if(this.state.topVal[i]=='.'){
                    break;
                }
                num1=10*num1+this.state.topVal[i]
            }
            if(i!=(this.state.topVal.length)-1){
                var k=0.1
                i++
                for(i;i<this.state.topVal.length;i++){
                    num1=num1+k*this.state.topVal[i]
                    k=k/10
                }    
            }
            console.log(num1)
            for(i=0;i<this.state.bottomVal.length;i++){
                if(this.state.bottomVal[i]=='.'){
                    break;
                }
                num2=10*num2+this.state.bottomVal[i]
            }
            if(i!=(this.state.bottomVal.length)-1){
                var k=0.1
                i++
                for(i;i<this.state.bottomVal.length;i++){
                    num2=num2+k*this.state.bottomVal[i]
                    k=k/10
                }    
            }
            console.log(num2)
            switch(this.state.opertaion){
                case '+':   answer=num1+num2
                            break
                case '-':   answer=num1-num2
                            break
                case '*':   answer=num1*num2
                            break
                case '/':   if(num2==0){
                                alert("Divide By Zero Error!")
                                this.setState(()=>{
                                    return({
                                        displayText:'Can\'t divide by zero',
                                        topVal:[null],
                                        bottomVal:[null],
                                        opertaion:null,
                                        calState:0    
                                    })
                                })
                                return
                            }
                            answer=num1/num2
                            break
                default:    alert("WRONG CHOICE")
                            this.setState(()=>{
                                return({
                                    displayText:'Wrong Choice',
                                    topVal:[null],
                                    bottomVal:[null],
                                    opertaion:null,
                                    calState:0    
                                })
                            })
                            return                 
            }
            this.setState(()=>{
                return({
                    displayText:answer,
                    topVal:[answer],
                    bottomVal:[null],
                    opertaion:null,
                    calState:1
                })
            })
        }
        
        else{
            if(this.state.topVal==[null]){
                alert('Not Allowed')
                this.setState(()=> {
                    displayText:'Not Allowed'
                })
            }
            else{
                this.setState(()=> {
                    return({
                        displayText:ch,
                        opertaion:ch,
                        calState:1
                    })
                })
            }
        }    
    }

    handleClear(){
        this.setState(()=>{
            return({
                displayText:0,
                topVal:[null],
                bottomVal:[null],
                opertaion:null,
                calState:0
            })
        })
    }

    render(){
        const calculator_style={
            width:'300px',
            margin:'575px',
            border:'10px solid black'
        }
        const firstRow={
            first:7,
            second:8,
            third:9,
            fourth:'/'
        }
        const secondRow={
            first:4,
            second:5,
            third:6,
            fourth:'*'
        }
        const thirdRow={
            first:1,
            second:2,
            third:3,
            fourth:'-'
        }
        const fourthRow={
            first:'.',
            second:0,
            third:'=',
            fourth:'+'
        }
        return(
            <div style={calculator_style}>
                <p id="displayArea">
                    {this.state.displayText}
                </p>
                <hr />
                <table>
                    <tbody>
                        <tr><RowVal val={firstRow} handleClick={this.handleClick} /></tr>
                        <tr><RowVal val={secondRow} handleClick={this.handleClick} /></tr>
                        <tr><RowVal val={thirdRow} handleClick={this.handleClick} /></tr>
                        <tr><RowVal val={fourthRow} handleClick={this.handleClick} /></tr>
                        <tr><button onClick={this.handleClear}>CLEAR ALL</button></tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App