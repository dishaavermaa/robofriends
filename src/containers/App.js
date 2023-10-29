import React, { Component } from "react";
import CardList from "../components/CardList";
import Searchbox from '../components/Searchbox';
import { robots } from '../components/robots';
import './App.css';
import Scroll from "../components/Scroll";



class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
        <div className="tc">
            <h1 className="f1">Robot Friends</h1>
            <Searchbox searchChange={this.onSearchChange}/>
            <Scroll>
                <CardList robots = { filteredRobots }/>
            </Scroll>
        </div>
        )
    }
}
export default App;