import React from 'react';

class Search extends React.Component {
	 state ={
	 	text:''
	 };
	 onSubmit =(e) =>{
	 	e.preventDefault();
	 	this.props.searchUsers(this.state.text);
	 	this.setState({text:' '})
	 }
	 onChange= e =>{
	 	this.setState({[e.target.name]:e.target.value});

	 }
	render() {
		return (
			<div>
			<form  onSubmit={this.onSubmit} className='form-group' >
			<input type='text' name='text' 
            className='form-control mr-sm-2'
			 placeholder='search users....'
			 onChange={this.onChange}/> 

			<input type='submit' value='search' 
			className='btn btn-dark btn-block' />
			</form>
			<button className="btn btn-light btn-block" onClick={this.props.clearUsers}>clear</button>
			</div>
		)
	}
}

export default Search;