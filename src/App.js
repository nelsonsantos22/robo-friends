import React, { Component } from 'react';
import CardList from './CardList';
//import { robots } from './Robots';
import SearchBox from './SearchBox';
import './App.css'

class App extends Component {

    constructor() {
        super()
        this.state = {
            robots : [],
            searchfield : '',
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots : users}))
    }

    onSearchChange = (event)  => {
        this.setState({ searchfield : event.target.value })
    }

    render() {

        const filterRobots = this.state.robots.filter(robots => {
            console.log(this.searchfield);
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        
        //if there are no users it will appear load
        if(this.state.robots.length === 0){
            return <h1>Loading</h1>
        }

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