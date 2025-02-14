import react, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';


class App extends Component { //extended App component
    constructor() {
        super()
        this.state = { //created state
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={this.state.robots} />
            </div>
        );
    }
}

export default App;