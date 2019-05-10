import React from 'react';
import {Link} from 'react-router-dom'
import leaf1 from '../images/circle_leaf.png'
import leaf2 from '../images/oval_leaf.png'
import leaf3 from '../images/dark_leaf.png'
import leaf4 from '../images/heart_leaf.png'
import leaf5 from '../images/star_leaf.png'

export default function AuthForm (props) {
    const { authForm, handleChange, handleSubmit, authFormTitle } = props
    return (
        <div className="auth-container">
            <img src={leaf2} alt="" className="auth-oval-leaf"/>
            <img src={leaf3} alt="" className="auth-dark-leaf"/>
            <img src={leaf4} alt="" className="auth-heart-leaf"/>
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
            <img src={leaf5} alt="" className="auth-star-leaf"/>
            <img src={leaf1} alt="" className="auth-circle-leaf"/>
        </div>
    )
}
