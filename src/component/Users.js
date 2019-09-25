import React from 'react';
import UserItem from './UserItem';
 class Users extends React.Component {
 	
	render() {
		return (
			<div style={userStyle}>
			{this.props.users.map(user =>(
				<UserItem key={user.id} user={user} />
				))}	
		</div>	
		);
	}
}
 const userStyle= {
 	display:'grid',
 	gridTemplateColumns:'repeat(3, 1fr)',
 	gridGap:'1rem'

 }
export default Users;