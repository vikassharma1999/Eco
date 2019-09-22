import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './signup.css'
class Signup extends Component{
    constructor(props)
    {
        super(props)
        this.state={
           username:'',
           email:'',
           password:'',
           c_password:''
        }
    }
    UserChangeHandler = event =>
    {
        this.setState({
            username:event.target.value
        })
    }
    EmailChangeHandler = event =>
    {
        this.setState({
            email:event.target.value
        })
    }
    PasswordChangeHandler = event =>{
        this.setState({
            password: event.target.value
        })
    }
    CPasswordChangeHandler = event =>{
        this.setState({
            c_password:event.target.value
        })
    }
    signup = event =>
    {
        alert(`hello ${this.state.username}`)
    }
    render()
    {
        return(
            <form className="signup">
                <div>
                   
                    <input type="text" value={this.state.username} onChange={this.UserChangeHandler} placeholder="username"/>
                </div>
                 <p></p>
                <div>
                  
                    <input type="email" value={this.state.email} onChange={this.EmailChangeHandler} placeholder="email"/>
                </div>
                 <p></p>
                <div>
                    
                    <input type="password" value={this.state.password} onChange={this.PasswordChangeHandler} placeholder="password"/>
                </div>
                 <p></p>
                <div>
                 
                    <input type="password" value={this.state.c_password} onChange={this.CPasswordChangeHandler} placeholder="confirm password"/>
                </div>
                 <p></p>
                <div className="button">
                    <button type="submit" onClick={this.signup}>Signup</button>
                </div>
                <div>
                    <Link to="/login">
                        Already have an account
                    </Link>
                </div>
            </form>
        )
    }
}
export default Signup