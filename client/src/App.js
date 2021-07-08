import React, {useReducer, createContext} from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import SignIn from './components/Login';
import SignUp from './components/SignUp';
import Timeline from './components/timeline';
import Post from './components/post';
import Logout from './components/Logout';
import About from './components/about';
import Home from './components/Home';
import Contact from './components/contact';
import { Route, Switch } from 'react-router-dom';
import Errorpage from './components/Errorpage';
import { initialState, reducer } from "./reducer/UseReducer";

// we create a contextAPI 
export const UserContext = createContext();

const Routing = () => {
  
  return (
    <>
       <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/login">
        <SignIn />
      </Route>

      <Route path="/signup">
        <SignUp />
      </Route>
        
      <Route path="/logout">
        <Logout />
      </Route>

      <Route path="/post">
        <Post />
      </Route>

      <Route path="/timeline">
        <Timeline />
      </Route>

      <Route>
        <Errorpage />
      </Route>
    </Switch>
    </>
  )
}

const App = () => {

//* we use useReducer
const [state, dispatch] = useReducer(reducer, initialState);

  return (
   
      <UserContext.Provider value={{state, dispatch}}>
        
        <Navbar />
        <Routing />

      </UserContext.Provider>
  )
}
export default App