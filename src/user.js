import React from 'react';

const User = (props) => (
	<li>
  		{props.user.userName} played {(props.hideGames)? '*' : props.user.gamesPlayed} games.
  	</li>
)

export default User;