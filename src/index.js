import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'


const Messages = () => {
  return (
    <div>
      <h2> These are my messages! </h2>
    </div>
  )
}

ReactDOM.render(
  <Router> 
    <div> 
    <Navbar />
    <Route exact path='/' component={Home} />
    <Route exact path='/about' component={About} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/messages' component={Messages} />
    </div>
  </Router>,
  document.getElementById('root')
);
