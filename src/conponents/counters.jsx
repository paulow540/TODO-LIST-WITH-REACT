import React, { Component } from 'react';
import Counter  from './counter'

class Counters extends Component {
  
    render() { 
        return ( <div>
            <button onClick={this.props.onRest} className="btn btn-primary btn-sm m-4">Reset</button>  
                                 
            {this.props.counters.map(counter =>
                 <Counter key={counter.id}
                 ondecrement ={this.props.ondecrement}                 
                  onDelete ={this.props.onDelete} 
                  counter ={counter}
                  onIncrement={this.props.onIncrement} 
                  value={counter.value}
                  
                   />)}
        </div> );
    }
}
 
export default Counters;