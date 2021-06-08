import React, { Component } from 'react';
import Counter  from './counter'

class Counters extends Component {
    state = {
        counters:[
            {id:1, value:0},
            {id:2, value:7},
            {id:3, value:0},
            {id:4, value:0},
        ]
      }
      handIncrement = counter => {
          console.log(counter);
          const counters =[...this.state.counters];
          const index =counters.indexOf(counters)
          counters[index] ={... counter}
          counters[index].value++;
          this.setState({ counters})
      }

      handlrDel = counterId => {
         console.log(counterId);
         const counters = this.state.counters.filter(c=> c.id !== counterId);
         this.setState({counters});
      }
      handlereset = ()=>{
          const counters= this.state.counters.map(c => {
              c.value=0;
              return c;
          })
          this.setState({counters})
      }
    render() { 
        return ( <div>
            <button onClick ={this.handlereset} className="btn btn-primary btn-sm m-4">Reset</button>  
            <br/>                      
            {this.state.counters.map(counter =>
                 <Counter key={counter.id}                 
                  onDelete ={this.handlrDel} 
                  onIncrement={this.handIncrement} 
                  value={counter.value}
                   id={counter.id}
                   />)}
        </div> );
    }
}
 
export default Counters;