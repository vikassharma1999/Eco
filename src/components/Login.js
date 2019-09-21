import React, {Component} from 'react'
import './login.css'
import {Link} from 'react-router-dom'
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
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.UsernameChangeHandler}/>
                </div> 
                <div>
                    <label>Password</label>
                    <input type="password" value={this.state.password} onChange={this.PasswordChangeHandler}/>
                </div>
                <div>
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