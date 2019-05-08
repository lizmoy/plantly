import React from 'react';
import {Link} from 'react-router-dom'

export default function AuthForm (props) {
    const { authForm, handleChange, handleSubmit, authFormTitle } = props
    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
            }}>
                <div className="auth-form-title">{authFormTitle}</div>
                <input className="auth-form-field" name="username" type="text" value={authForm.username} placeholder="username" onChange={handleChange}/>
                <input className="auth-form-field" name="email" type="text" value={authForm.email} placeholder="email" onChange={handleChange}/>
                <input className="auth-form-field" name="password" type="password" value={authForm.password} placeholder="password" onChange={handleChange}/>
                <button className="auth-form-submit-button">Submit</button>
                {
                    authFormTitle === "Login"
                    && 
                    <div className="auth-register">Don't have an account yet? <Link to="/register">Register</Link></div>
                }
            </form>
        </div>
    )
}
