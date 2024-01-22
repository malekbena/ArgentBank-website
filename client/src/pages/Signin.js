import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Axios from 'axios'
import { setLogin } from '../redux/authSlice'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        let user = {
            email: username,
            password: password
        }
        Axios.post('http://localhost:3001/api/v1/user/login', user, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            localStorage.setItem('token', res.data.body.token)
            dispatch(setLogin(res.data.body.token))
            navigate('/user')
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" onClick={e => handleSubmit(e)}>Sign In</button>
                </form>
            </section>
        </main>
    )
}


export default Signin