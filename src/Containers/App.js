import React from 'react';
import CardList from  '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            searchFiled: ''
        }

    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
    }

    searchChange =(event) =>{
        this.setState({
            searchFiled: event.target.value
        }) 
    }
    render(){
        const filterRobots = this.state.robots.filter(robos => {
            return robos.name.toLowerCase().includes(this.state.searchFiled.toLowerCase());
        })
        return (
            <div className='tc'>
              <h1 className='f1'>ROBOTSFRIENDS</h1>
                <SearchBox searchChange={this.searchChange}/>
              <Scroll>
              <ErrorBoundry>
                <CardList robots={filterRobots}/>
              </ErrorBoundry>
                
              </Scroll>
              
            </div>
            
        )
    }   
}

export default App;