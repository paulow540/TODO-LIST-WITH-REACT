import React, { Component } from 'react';
class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
           <nav className="navbar navbar-light bg-light">
               <a href="#" className="nav brand">Narbar
               <span className="badge badge-pill badge-danger">{this.props.totalCounters}</span>
               </a>
               
           </nav>
         );
    }
}
 
export default NavBar;