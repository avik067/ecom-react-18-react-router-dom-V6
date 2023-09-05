
import { useNavigate ,Navigate } from 'react-router-dom';
import {useState} from 'react'
import Header from '../Header'
import Cookies from 'js-cookie'
import './index.css'

const  LoginForm = () => {

    const jwtToken = Cookies.get('jwt_token')
    const [credential,setCredential] =  useState({username:"",password:"",showSubmitError:false,errorMsg:""})
    const navigate = useNavigate()
    

     const renderPasswordField = () => {
        console.log("password")
        return (
          <>
            <label className="input-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              value={credential.password}
              className="password-input-field" 
              onChange={(event)=> setCredential({...credential,password:event.target.value})} 
            />
          </>
        )
      }
   

   const  renderUsernameField = () => {
        console.log("name")
        return (
          <>
            <label className="input-label" htmlFor="username">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              value={credential.username}
              className="username-input-field" 
              onChange={(event)=>setCredential({...credential,username:event.target.value})}
            />
          </>
        )
      }
    
    const   onSubmitSuccess = jwtToken => {
        
        Cookies.set('jwt_token', jwtToken, {
          expires: 30,
          path: '/',
        })
        navigate("/" ,{replace:true})
      }
 
    const onSubmitFailure = errorMsg => {
        setCredential({...credential,showSubmitError: true, errorMsg})
      }

    const submitForm = async (event) => {
        event.preventDefault()
        console.log("submitted")
        const {username, password} = credential
        
        const userDetails = {username, password}
        const url = 'https://apis.ccbp.in/login'
        const options = {
          method: 'POST',
          body: JSON.stringify(userDetails),
        }
        const response = await fetch(url, options)
        const data = await response.json()
        if (response.ok === true) {
          onSubmitSuccess(data.jwt_token)
        } else {
          onSubmitFailure(data.error_msg)
        }
      }
 
    if (jwtToken !== undefined) {

      return <Navigate to="/" />
    }
    return (
        <>
         <Header />
        <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{renderUsernameField()}</div>
          <div className="input-container">{renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {credential.showSubmitError && <p className="error-message">*{credential.errorMsg}</p>}
        </form>
        <div className="login-info">
              Prime user : Username: rahul , password: rahul@2021 <br /> <br />{' '}
              Non-Prime user : Username: raja ,password: raja@2021
        </div>
      </div>
      
      </>
    ) 
}


export default LoginForm