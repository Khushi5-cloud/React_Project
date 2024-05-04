/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

/*
import './App.css';
//import { Component } from 'react';
//import Employee from './components/Employee';
import Login from "./components/Login";
import Parent from './components/Parent';
*/
////////////////////////////////////////////////////////////////////////////////////////////////

// function component(preferred)

/*
function App(){

  // return <h3>IBM React Demo App1</h3> // for single component
  return (

    // the content in div will be displayed
    // jsx language
    // below are nodes
    <div className='App'> 
      <h3>IBM React Demo App1</h3>
      <p>This is content 1</p>
      <h3>IBM React Demo App2</h3>
      <p>This is content 2</p>
    </div>

  );
};
*/

// Fragment

/*
const App=()=>{ 
  return (
    <> 
      <h3>App Component</h3>
      <p>This is content</p>
      <hr/>
    {/* <Login/> */  //} 
//    {/*<Employee/> */}  
//      <Parent></Parent> {/* or <Parent/> */}
//   </>
// );
//};



///////////////////////////////////////////////////////////////////////////////////////////////////

// Class component
/*
class App extends Component{
  render=()=>{
    return (
    <>
    <h1>Hello IBM</h1>
    <p>This is content</p>
    </>
    );
  };
};
*/


import AppRoutes from "./components/AppRoutes";

const App = () => {

  return (
    <>
      <h1>App Component</h1>
      <p>IBM ReactJS Demo Application</p>
      <hr/>
      <AppRoutes />
    </>
  );
};





export default App;
