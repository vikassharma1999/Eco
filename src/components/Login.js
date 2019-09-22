import React, {Component} from 'react'
import './login.css'
import {Link} from 'react-router-dom'
import './signup.css'
class Login extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            username:'',
            password:'',
            isLoggedIn:false
        }
    }
    UsernameChangeHandler = event =>{
        this.setState({
            username:event.target.value
        })
    }
    PasswordChangeHandler = event =>{
        this.setState({
            password:event.target.value
        })
    }
    loginForm = event =>{
        alert(`Welcome ${this.state.username} !!`)

    }
    render()
    {
        return(
            <form className="signup">
                <div>
                   
                    <input type="text" value={this.state.username} onChange={this.UsernameChangeHandler} placeholder="username"/>
                </div> 
                 <p></p>
                <div>
                   
                    <input type="password" value={this.state.password} onChange={this.PasswordChangeHandler} placeholder="password"/>
                </div>
                 <p></p>
                <div className="button">
                    <button type="submit"onClick={this.loginForm}>Login</button>
                </div>
                <div>
                <Link to="/signup">
                Create an account
                </Link>
                </div>
            </form>

        )
    }
}
export default Login