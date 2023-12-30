import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import NxtVideosContext from '../../context/NxtVideosContext'

import {
  LoginPageContainer,
  LoginFormContainer,
  LoginLogo,
  LoginInputLabel,
  LoginInputElement,
  ShowPasswordContainer,
  PasswordCheckbox,
  ShowPasswordText,
  LoginButton,
  ErrorMessageText,
  LoginInputContainer,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMessage: '',
    showSubmitError: false,
  }

  onSubmitFailure = errorMessage => {
    this.setState({showSubmitError: true, errorMessage})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onToggleCheckbox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  render() {
    const {
      username,
      password,
      showPassword,
      showSubmitError,
      errorMessage,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    const inputType = showPassword ? 'text' : 'password'

    return (
      <NxtVideosContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const websiteLogoUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginPageContainer isDarkTheme={isDarkTheme}>
              <LoginFormContainer
                onSubmit={this.onSubmitLoginForm}
                isDarkTheme={isDarkTheme}
              >
                <LoginLogo src={websiteLogoUrl} alt="website logo" />
                <LoginInputContainer>
                  <LoginInputLabel htmlFor="username" isDarkTheme={isDarkTheme}>
                    USERNAME
                  </LoginInputLabel>
                  <LoginInputElement
                    type="text"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={this.onChangeUsername}
                  />
                </LoginInputContainer>
                <LoginInputContainer>
                  <LoginInputLabel htmlFor="password" isDarkTheme={isDarkTheme}>
                    PASSWORD
                  </LoginInputLabel>
                  <LoginInputElement
                    type={inputType}
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={this.onChangePassword}
                  />
                  <ShowPasswordContainer>
                    <PasswordCheckbox
                      type="checkbox"
                      id="showPassword"
                      onChange={this.onToggleCheckbox}
                    />
                    <ShowPasswordText
                      htmlFor="showPassword"
                      isDarkTheme={isDarkTheme}
                    >
                      Show Password
                    </ShowPasswordText>
                  </ShowPasswordContainer>
                </LoginInputContainer>
                <LoginButton>Login</LoginButton>
                {showSubmitError && (
                  <ErrorMessageText>*{errorMessage}</ErrorMessageText>
                )}
              </LoginFormContainer>
            </LoginPageContainer>
          )
        }}
      </NxtVideosContext.Consumer>
    )
  }
}

export default Login
