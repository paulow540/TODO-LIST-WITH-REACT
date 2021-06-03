import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count :0,
        tags:['tag1','tag2','tag3']
        };

        handleInc = product => {
        alert(product)
         this.setState({count:this.state.count +1})
        }
      

    render() { 
        return (
        <React.Fragment>
            <span  className={this.getBadgeClasses()} >{this.formatCount()}</span>
            <button onClick ={()=> this.handleInc(product)} className = "btn btn-secondary btn-sm">button one</button>
            <ul>
                {this.state.tags.map(tag => <li key= {tag}>{tag}</li>)}
            </ul>
        
        </React.Fragment>);

    }

    getBadgeClasses() {
        return (this.state.count === 0) ? "badge m-4 p-2 bg-warning" : "badge m-4 p-2 bg-primary";
    }

    formatCount(){
        const { count} = this.state;
        return count === 0 ? 'zero' : count;
    }
    
}
 
export default Counter;
