import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './Robots';
import SearchBox from './SearchBox';
import './App.css'

class App extends Component {

    constructor() {
        super()
        this.state = {
            robots : robots,
            searchfield : '',
        }
    }

    onSearchChange = (event)  => {
        this.setState({ searchfield : event.target.value })
    }

    render() {

        const filterRobots = this.state.robots.filter(robots => {
            console.log(this.searchfield);
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return (
        <div className='tc'>
            <h1 className='f1'>ROBO FRIENDS</h1>
            <SearchBox searchChange = {this.onSearchChange}/>
            <CardList robots = {filterRobots}
             />
        </div>
        );
    }
}

export default App;