import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count : 0,
        imgurl :"https://picsum.photos/200"
    };

    render() { 

        let classes = "bg-primary";
        classes += (this.state.count  === 0) ? "badge-warning":"badge-primary"
        return (
        <React.Fragment className='row' >
            <img src={this.state.imgurl} alt=""/>
            <span style={{height:'44px'}} className="badge-warning text-primary m-4">{this.formatCount()}</span>
            <button>button one</button>
        
        </React.Fragment>);

    }

    formatCount(){
        const { count} = this.state;
        return count === 0 ? 'zero' : count;
    }
    hhh
}
 
export default Counter;
