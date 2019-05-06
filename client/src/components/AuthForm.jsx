import React from 'react';
import {Link} from 'react-router-dom'

export default function AuthForm (props) {
    const { authForm, handleChange, handleSubmit, authFormTitle } = props
    return (
        <div>
            <h1>{authFormTitle}</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
            }}>
                <input name="username" type="text" value={authForm.username} placeholder="username" onChange={handleChange}/>
                <input name="email" type="text" value={authForm.email} placeholder="email" onChange={handleChange}/>
                <input name="password" type="password" value={authForm.password} placeholder="password" onChange={handleChange}/>
                <button>Submit</button>
            </form>
            {
                authFormTitle === "Login"
                &&
                <Link to="/register">Register</Link>
            }
        </div>
    )
}
