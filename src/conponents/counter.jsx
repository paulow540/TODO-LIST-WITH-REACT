import React, { Component } from 'react';
class Counter extends Component {
    

    render() {     
        return (
        <React.Fragment  >
            <span  className={this.getBadgeClasses()} >{this.formatCount()}</span>
            <button  onClick ={()=> this.props.onIncrement(this.props.counter) } className = "btn btn-secondary btn-sm">click to add up</button>
          
            <button onClick={() => this.props.onDelete(this.props.id)} className='btn btn-danger btn-sm m-2'>Delete</button>        
        </React.Fragment>);
    }




    getBadgeClasses() {
        return (this.props.value === 0) ? "badge m-4 p-2 bg-warning " : "badge m-4 p-2 bg-primary";
    }
    formatCount(){
        const { value} = this.props;
        return value === 0 ? 'zero' : value;
    }    
} 
export default Counter;
