import React, {Component} from 'react'
import {Link} from 'react-router-dom'
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
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.UserChangeHandler}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" value={this.state.email} onChange={this.EmailChangeHandler}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={this.state.password} onChange={this.PasswordChangeHandler}/>
                </div>
                <div>
                    <label>ReWrite Password </label>
                    <input type="password" value={this.state.c_password} onChange={this.CPasswordChangeHandler}/>
                </div>
                <div>
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