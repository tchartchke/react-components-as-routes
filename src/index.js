import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';


const Messages = () => 
<form>
  <h1>Messages</h1>
  <div>
    <textarea>
      Enter a Message here?
    </textarea>
    <label htmlFor="message">Message</label>
  </div>
  <input type="submit" value="Submit" />
</form>;

const Signup = () => 
  <form>
    <h1>Signup</h1>
    <div>
      <input type="text" name="username" placeholder="Username" />
      <label htmlFor="username">Username</label>
    </div>
    <div>
      <input type="password" name="password" placeholder="Password" />
      <label htmlFor="password">Password</label>
    </div>
    <div>
      <input type="password" name="confirm_password" placeholder="Confirm Password" />
      <label htmlFor="confirm_password">Confirm Password</label>
    </div>
    <input type="submit" value="Signup" />
  </form>;

ReactDOM.render((
  <Router>
    <>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/messages" component={Messages} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </>
  </Router>),
  document.getElementById('root')
);