import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import {
  FormContainer,
  LoginContainer,
  LogoImage,
  LabelName,
  InputContainer,
  CheckboxContainer,
  ShowPassword,
  ShowPasswordInput,
  LoginButtton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showpassword: false,
    showErrorMsg: false,
    errorMsg: '',
  }

  navigateToHomeAndSetCookies = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  showErrorMsg = errormsg => {
    this.setState({showErrorMsg: true, errorMsg: errormsg})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickCheckbox = () => {
    this.setState(prevState => ({showpassword: !prevState.showpassword}))
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const apiUrl = ' https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.navigateToHomeAndSetCookies(data.jwt_token)
    } else {
      this.showErrorMsg(data.error_msg)
    }
  }

  render() {
    const {username, password, showErrorMsg, errorMsg, showpassword} =
      this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <FormContainer onSubmit={this.onSubmitForm}>
          <LogoImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
          <LabelName>USERNAME</LabelName>
          <InputContainer
            type="text"
            onChange={this.onChangeUsername}
            value={username}
          />
          <LabelName>PASSWORD</LabelName>
          <InputContainer
            type={showpassword ? 'text' : 'password'}
            onChange={this.onChangePassword}
            value={password}
          />
          <CheckboxContainer>
            <ShowPasswordInput
              type="checkbox"
              id="showpasswordId"
              checked={showpassword}
              onClick={this.onClickCheckbox}
            />
            <ShowPassword htmlFor="showpasswordId">Show Password</ShowPassword>
          </CheckboxContainer>
          <LoginButtton type="submit">Login</LoginButtton>
          {showErrorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
        </FormContainer>
      </LoginContainer>
    )
  }
}
export default Login
