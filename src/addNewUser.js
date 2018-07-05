import React, { Component } from 'react';

class AddNewUser extends Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      userName: '',
      gamesPlayed: 0
    },
    error: ''
  }

  handleChange = (event) => {
    const { name, value } = event.target;
  	this.setState(prevState => ({
      	...prevState,
    	user: {
          ...prevState.user,
          [name]: value
        }
    }))
  }

  handleSubmit = (event) => {
  	event.preventDefault();    
	const isDuplicate = this.checkDuplicate(this.state.user.userName);
    if (!isDuplicate) {
    	this.props.addUser(this.state.user)
      	this.resetState();
    } else {
    	this.setState({
        	error: 'User Name Already Exists, Please Choose Another One'
        })
    }
  }
  
  checkDuplicate = (newUserName) => {
  	for (let user of this.props.users) {
      if (user.userName === newUserName) {
        return true;
      }
    };
   return false;
  }
  
  isDisabled = () => {
    const { firstName, lastName, userName } = this.state.user
    if ( !firstName || !lastName || !userName ) {
      return true;
    }
    return false;
  }

  resetState() {
  	this.setState({
    	user: {
          firstName: '',
          lastName: '',
          userName: ''
    	},
    	error: ''
  	})
  }

  render() {
    const { firstName, lastName, userName} = this.state.user;
    return(
    	<div>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input 	type="text" 
                    placeholder="First Name"
                    name="firstName"
					value={firstName}
                    onChange={this.handleChange}
            />
            <input 	type="text" 
                    placeholder="Last Name"
                    name="lastName"
					value={lastName}
                    onChange={this.handleChange}
            />
            <input 	type="text" 
                    placeholder="User Name"
                    name="userName"
					value={userName}
                    onChange={this.handleChange}
            />
            <button type="submit" 
					disabled={this.isDisabled()}>
				Add User
			</button>
          </form>
       	  {this.state.error !== ''&& (<p className="error">{this.state.error}</p>)}
		</div>
    )
  
  }
	

}

export default AddNewUser;