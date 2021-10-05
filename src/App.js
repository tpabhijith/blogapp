
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from './components/Home';
import Header from './components/includes/Header';
import Single from './components/Single';

function App() {
    return (
      <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component = {Home} />
          <Route path="/article/:id" component = {Single} />
        </Switch>
      </Router>
    
    
    </>
    )
}

export default App;
