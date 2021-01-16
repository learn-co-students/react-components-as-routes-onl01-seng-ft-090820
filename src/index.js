// import React from 'react';
// import ReactDOM from 'react-dom';
// Step 1. Import react-router functions
// import { BrowserRouter as Router, Route } from 'react-router-dom';
/* Add NavLink to importer */
// import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

/* Add basic styling for NavLinks */
// const link = {
//   width: '100px',
//   padding: '12px',
//   margin: '0 6px 6px',
//   background: 'blue',
//   textDecoration: 'none',
//   color: 'white',
// }
 
/* add the navbar component */
// const Navbar = () =>
//   <div>
//     <NavLink
//       to="/"
//       /* set exact so it knows to only set activeStyle when route is deeply equal to link */
//       exact
//       /* add styling to Navlink */
//       style={link}
//       /* add prop for activeStyle */
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >Home</NavLink>
//     <NavLink
//       to="/about"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >About</NavLink>
//     <NavLink
//       to="/login"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >Login</NavLink>
//     <NavLink
//       to="/signup"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >Signup</NavLink>
//     <NavLink
//       to="/messages"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >Messages</NavLink>
//   </div>;

// const Home = () => {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// };

// const About = () => {
//   return (
//     <div>
//       <h1>This is my about component!</h1>
//     </div>
//   );
// };
 
// const Login = () => {
//   return (
//     <div>
//       <form>
//         <div>
//           <input type="text" name="username" placeholder="Username" />
//           <label htmlFor="username">Username</label>
//         </div>
//         <div>
//           <input type="password" name="password" placeholder="Password" />
//           <label htmlFor="password">Password</label>
//         </div>
//         <input type="submit" value="Login" />
//       </form>
//     </div>
//   );
// };

// const Signup = () =>
//   <form>
//     <h1>Login</h1>
//     <div>
//       <input type="text" name="username" placeholder="Username" />
//       <label htmlFor="username">Username</label>
//     </div>
//     <div>
//       <input type="password" name="password" placeholder="Password" />
//       <label htmlFor="password">Password</label>
//     </div>
//     <input type="submit" value="Signup" />
//   </form>;

// const Messages = () => {
//   return (
//     <div>
//       <h1>This is my messages component!</h1>
//     </div>
//   );
// };
// ReactDOM.render(
//   <Home />,
//   document.getElementById('root')
// );
// Step 2. Changed to have router coordinate what is displayed
// ReactDOM.render((
//   <Router>
//     <Route path="/" component={Home} />
//   </Router>),
//   document.getElementById('root')
// );
// ReactDOM.render((
//   <Router>
//       <Route path="/" component={Home} />
//       <Route exact path="/about" component={About} />
//       <Route exact path="/login" component={Login} />
//   </Router>),
//   document.getElementById('root')
// );
// ReactDOM.render((
//   <Router>
//     <div>
//         <Navbar />
//         {/* <Route path="/" component={Home} /> */}
//         <Route exact path="/" component={Home} />
//         {/* <Route path="/" render={() => <h1>Home!</h1>} /> */}
//         <Route exact path="/about" component={About} />
//         <Route exact path="/login" component={Login} />
//         <Route exact path="/signup" component={Signup} />
//         <Route exact path="/messages" component={Messages} />
//     </div>
//   </Router>),
//   document.getElementById('root')
// );
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
 
ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);