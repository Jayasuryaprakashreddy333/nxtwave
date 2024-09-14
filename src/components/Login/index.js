import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import WebsiteContext from '../../context'

import {
  LoginContainer,
  LoginForm,
  LoginLogo,
  InputContainer,
  Label,
  Input,
  CheckContainer,
  CheckBox,
  CheckLabel,
  Button,
  ErrorMessage,
} from './styledcomponents'

class Login extends Component {
  state = {username: '', password: '', showPass: 'password', errorMsg: ''}

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const token = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(token.jwt_token)
    } else {
      this.onSubmitFailure(token.error_msg)
    }
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = () => {
    const {showPass} = this.state
    if (showPass === 'password') {
      this.setState({showPass: 'text'})
    } else {
      this.setState({showPass: 'password'})
    }
  }

  render() {
    const {username, password, showPass, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <WebsiteContext.Consumer>
        {value => {
          const {websiteTheme} = value
          console.log(websiteTheme)
          return (
            <LoginContainer
              bgColor={websiteTheme === 'light' ? '#f9f9f9' : '#181818'}
            >
              <LoginForm onSubmit={this.onSubmitForm}>
                <LoginLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
                <InputContainer>
                  <Label htmlFor="USERNAME">USERNAME</Label>
                  <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    id="USERNAME"
                    onChange={this.onChangeUserName}
                  />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="PASSWORD">PASSWORD</Label>
                  <Input
                    id="PASSWORD"
                    type={showPass}
                    placeholder="Password"
                    value={password}
                    onChange={this.onChangePassword}
                  />
                </InputContainer>
                <CheckContainer>
                  <CheckBox
                    type="checkbox"
                    onClick={this.onShowPassword}
                    id="CHECKBOX"
                  />
                  <CheckLabel htmlFor="CHECKBOX">Show Password</CheckLabel>
                </CheckContainer>
                <Button type="submit">Login</Button>
                {errorMsg === '' ? (
                  ''
                ) : (
                  <ErrorMessage>*{errorMsg}</ErrorMessage>
                )}
              </LoginForm>
            </LoginContainer>
          )
        }}
      </WebsiteContext.Consumer>
    )
  }
}

/* const Login = () => (
  <LoginContainer>
    <LoginForm>
      <LoginLogo
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="website logo"
      />
      <InputContainer>
        <Label>USERNAME</Label>
        <Input type="text" placeholder="Username" />
      </InputContainer>
      <InputContainer>
        <Label>PASSWORD</Label>
        <Input type="password" placeholder="Password" />
      </InputContainer>
      <CheckContainer>
        <CheckBox type="checkbox" />
        <CheckLabel>Show Password</CheckLabel>
      </CheckContainer>
      <Button>Login</Button>
    </LoginForm>
  </LoginContainer>
) */

export default Login
