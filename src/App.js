import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Error from './components/Error';
import Navbar from './components/Navbar';

function App() {

  // name component
const Name = () =>{
  return(
    <>
    <h1>Welcome to Name Component</h1>
    </>
  );
}
  // name component end


  return (
    <>
    <Navbar />
<Switch>
   <Route exact path="/" component={Home} />
   <Route path="/about" component={About} />
   <Route exact path='/contact' component={Contact} />
   <Route path='/contact/name' component={Name} />
   <Route component={Error} />
</Switch>

{/* <About />
<Contact /> */}

  {/* <h1>App Component</h1> */}

    </>
  );
}
export default App;
