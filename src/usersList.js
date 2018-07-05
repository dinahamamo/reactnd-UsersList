import React, { Component } from 'react';
import User from './user';

class UsersList extends Component {
  state = {
  	hiddenGames: false
  }
  
  toggleHiddenGames = () => {
    this.setState(prevState => ({
    	hiddenGames: !prevState.hiddenGames
    }))
  }
  render() {
    const { hiddenGames } = this.state
	const { users } = this.props;
  	return(
    	<div>
      		{ (users.length > 0) && 
             	<button onClick={this.toggleHiddenGames} 
      					className="smallButton"
      			>
      				{(hiddenGames)? 'Show ' : 'Hide '} 
					the Number of Games Played
				</button>
			}
			<ol>
				{this.props.users.map(user => <User key={user.userName} user={user} hideGames={hiddenGames} />)}
			</ol>
      	</div>
    )
  }
}

export default UsersList;