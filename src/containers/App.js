import React, { Component } from 'react';
import CardList from '../components/CardList';
//import { robots } from './Robots';
import SearchBox from '../components/SearchBox';
import '../containers/App.css';
import Scroll from '../components/Scroll.js';

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
            <Scroll>
                <CardList robots = {filterRobots}
             />
             </Scroll>
        </div>
        );
    }
}

export default App;