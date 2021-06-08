import React, { Component } from 'react';
import NavBar from './conponents/navbar';
import Counters from './conponents/counters';
class App extends Component {
    state = {
        counters:[
            {id:1, value:0},
            {id:2, value:7},
            {id:3, value:0},
            {id:4, value:5},
        ]
      }
      handIncrement = counter => {
          console.log(counter);
          const counters =[...this.state.counters];
          const index =counters.indexOf(counter);
          counters[index] = {...counter};
          counters[index].value++;
          this.setState({counters});
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
        return (<div>

           <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
            <main className ="container">
            <Counters 
            counters={this.state.counters} 
            onIncrement={this.handIncrement} onRest={this. handlereset} onDelete={this.handlrDel}/>
            </main>

          </div> );
    }
}
 
export default App;