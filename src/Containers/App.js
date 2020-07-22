import React from 'react';
import {connect} from 'react-redux';

import CardList from  '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';

import {setSerchField, requestRobots} from '../action'

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSerchField(event.target.value)),
        onRequestRobots: () => requestRobots(dispatch)
    }
    
}

class App extends React.Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         robots: []
    //     }

    // }

    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => response.json())
        // .then(users => this.setState({robots: users}))
        this.props.onRequestRobots()
    }

    // searchChange =(event) =>{
    //     this.setState({
    //         searchFiled: event.target.value
    //     }) 
    // }

    render(){
        // const {robots} = this.state;
        const {searchField, onSearchChange, robots, isPending} = this.props;
        const filterRobots = robots.filter(robos => {
            return robos.name.toLowerCase().includes(searchField.toLowerCase());
        })
        //.toLowerCase().includes(this.state.searchField.toLowerCase());
        return isPending? <h1>Loading</h1>:
         (
            <div className='tc'>
              <h1 className='f1'>ROBOTSFRIENDS</h1>
                <SearchBox searchChange={onSearchChange}/>
              <Scroll>
              <ErrorBoundry>
                <CardList robots={filterRobots}/>
              </ErrorBoundry>
                
              </Scroll>
              
            </div>
            
        )
    }   
}

export default connect(mapStateToProps, mapDispatchToProps)(App);