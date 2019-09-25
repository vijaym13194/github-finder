import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from'./component/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Users from './component/Users';
import User from './component/User';
import Search from './component/Search';
import About from './component/pages/About';
import { Fragment } from 'react';
import axios from 'axios';
class App extends React.Component {
	state ={
		users: [],
		user:{},
		loading:false
	}
  async componentDidMount(){
  	 this.setState({loading:true});
    const res = await axios.get(`https://api.github.com/users?client_id=$
    	{process.env.REACT_APP_GITHUB_CLIENT_ID}& client_secret=$
    	{process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    	this.setState({users:res.data, loading:false});
    }
    searchUsers=  async text =>{
       const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
    	{process.env.REACT_APP_GITHUB_CLIENT_ID}& client_secret=$
    	{process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    	this.setState({users:res.data.items, loading:false});
    }
    // get single github user
    getUser = async (username) =>{
    	this.setState({loading:true});
    	const res = await axios.get(`https://api.github.com/users/${username}?client_id=$
    	{process.env.REACT_APP_GITHUB_CLIENT_ID}& client_secret=$
    	{process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    	this.setState({user:res.data, loading:false});

    }

    clearUsers = () => this.setState({users:[], loading:false});
  render() {
  	const {users, user,loading } =this.state;
    return (
    	<Router>
      <div>
        <Navbar/>
        <div className="container">
        <Switch>
        <Route exact path='/' render={props =>(
        	<Fragment>
        	<Search searchUsers={this.searchUsers} clearUsers={this.clearUsers}/>
        <Users loading={loading} users={users} />
        	</Fragment>
        	)} />
        	<Route exact path='/about' component={About} />
        	<Route exact path='/user/:login' render={props =>(
        	<User {...props } getUser={this.getUser} user={user}
        	loading={loading}/>
        		)} />
        	
        </Switch>
        </div>
      </div>
      </Router>
    )
  }
}

export default App;
