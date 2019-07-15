import React from 'react';
import './App.css';
import Home from './Home';
import axios from 'axios';
import {
  BrowserRouter as Router, 
  Route,
  Link
} from 'react-router-dom';
import All from './All';
import Single from './Single';

class App extends React.Component {

  constructor( props ) {
    super( props );

    this.state = {

      issues        : [],
      current_issue : {}
    };
  }

  componentDidMount() {

    axios.get( 'https://api.github.com/repos/facebook/react/issues?page=1&per_page=100' )
    .then( result => {

      console.log( result.data );

      this.setState({

        issues : result.data
      })
    }).catch( err => console.log( err ) );
  }

  selectIssue = ( issue ) => {

    console.log( 'issue detected: ', issue );
    this.setState({

      current_issue: issue
    })
  }


  render() {

    return (

      <Router>

        <nav>

          <Link to="/">Home</Link>
          <Link to="/all">All</Link>
        </nav>

        <div className="main-body">

          <Route exact path='/' component={ Home } />

          <Route exact path='/all' component={
            () => ( <All
              issues={ this.state.issues }
              selectIssue={ this.selectIssue }
            />
          )} />

          <Route exact path='/single' component={
            () => ( <Single
              issue={ this.state.current_issue }
            />
          )} />
        </div>
      </Router>
    )
  }
};

export default App;
