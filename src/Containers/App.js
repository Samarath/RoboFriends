import React from 'react';
import {connect} from 'react-redux';

import CardList from  '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';

import {setSerchField} from '../action'

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSerchField(event.target.value))
    }
    
}

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            robots: []
        }

    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
    }

    // searchChange =(event) =>{
    //     this.setState({
    //         searchFiled: event.target.value
    //     }) 
    // }

    render(){
        const {robots} = this.state;
        const {searchField, onSearchChange} = this.props;
        const filterRobots = robots.filter(robos => {
            return robos.name.toLowerCase().includes(searchField.toLowerCase());
        })
        //.toLowerCase().includes(this.state.searchField.toLowerCase());
        return (
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