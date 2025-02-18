import react, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundary';
import './App.css';

import { setSearchField } from '../actions';


class App extends Component { //extended App component
    constructor() {
        super();
        this.state = { //created state
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {        
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { robots, searchfield } = this.state; //destructuring
        const filteredRobot = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        //return robots.length === 0
        return !robots.length ? //ternary operator
            <h1>Loading</h1> : 
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll >
                        <ErrorBoundry>
                            <CardList robots={filteredRobot} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
              );
    }
}


export default connect()(App);