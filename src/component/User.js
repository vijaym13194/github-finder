import React from 'react';
import propTypes from 'prop-types';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';
 class User extends React.Component {
 	componentDidMount(){
 		this.props.getUser(this.props.match.params.login);
 	}
 	static propTypes = {
 		user:propTypes.object.isRequired,
 		getUser:propTypes.func.isRequired
 	}
	render() {
		const {
			name,
			avatar_url,
			location,
			bio,
			blog,
			login,
			html_url,
			followers,
			following,
			public_repos,
			public_gists,
			hireable
		} =this.props.user;
		const {loading} =this.props;
		return (
			<Fragment>
			<Link to='/' className='btn btn-light'>back to home</Link>
			Hireable: {''}
			{hireable ? (
				<i className="fas fa-check text-success" /> ): 
			(<i className="fas fa-times-circle text-danger" /> )}
			 <div classNaame="card grid-2">
			 <div className="all-center">
			 <img  src={avatar_url} className="round-img" style={{width:'150px'}}/>
			 <h1>{name} </h1>
			 <p>location:{location} </p>
			 </div>
			 <div>
			 {bio && (<Fragment>
			 	<h1> Bio </h1>
			 	<p>{bio} </p>
			 </Fragment>
			 )}
			 <a href={html_url} className="btn btn-dark my-1">Visit github profile 
			 </a>
			 </div>
			 </div>
			
			 <span className="badge badge-primary">followers:{followers}</span>
			 <span className="badge badge-success">following:{following}</span>
			<span className="badge badge-secondary">public_repos:{public_repos}</span>
			<span className="badge badge-warning">public_gists:{public_gists}</span>
			<span class="badge badge-dark">blog:{blog}</span>
			 <span class="badge badge-info">login:{login}</span>
			</Fragment>
		)
	}
}

export default User;