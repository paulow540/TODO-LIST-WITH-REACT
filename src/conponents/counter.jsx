import React, { Component } from 'react';
class Counter extends Component {
    

    render() {     
        return (
        <div>
            <span className={this.getBadgeClasses()} >{this.formatCount()}</span>
            <button  onClick ={()=> this.props.onIncrement(this.props.counter) } className="btn btn-secondary btn-sm">click to add up</button>
          <button onClick={() => this.props.ondecrement(this.props.counter)} className="btn-warning btn-sm m-1">click to add down</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-1">Delete</button>        
        </div>);
    }




    getBadgeClasses() {     
       let classes = this.props.counter.value === 0 ? "badge m-2 p-2 bg-warning" : "badge m-2 p-2 bg-primary";
       return classes;
    }

    formatCount(){
        const { value} = this.props.counter;
        return value === 0 ? "zero" : value;
    }    
} 
export default Counter;
