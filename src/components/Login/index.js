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
    // console.log(response)
    const data = await response.json()
    if (response.ok === true) {
      //   console.log(data)
      this.onSubmitSuccess(data.jwt_token)
    } else {
      //   console.log(data)
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
    return (
      <NxtVideosContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const websiteLogoUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const {
            username,
            password,
            showPassword,
            showSubmitError,
            errorMessage,
          } = this.state

          const jwtToken = Cookies.get('jwt_token')
          // console.log(jwtToken)
          if (jwtToken !== undefined) {
            return <Redirect to="/" />
          }

          return (
            <LoginPageContainer>
              <LoginFormContainer onSubmit={this.onSubmitLoginForm}>
                <LoginLogo src={websiteLogoUrl} alt="website logo" />
                <LoginInputContainer>
                  <LoginInputLabel htmlFor="username">USERNAME</LoginInputLabel>
                  <LoginInputElement
                    type="text"
                    placeholder="Username"
                    id="username"
                    onChange={this.onChangeUsername}
                    value={username}
                  />
                </LoginInputContainer>
                <LoginInputContainer>
                  <LoginInputLabel htmlFor="password">PASSWORD</LoginInputLabel>
                  <LoginInputElement
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    id="password"
                    onChange={this.onChangePassword}
                    value={password}
                  />
                </LoginInputContainer>
                <ShowPasswordContainer>
                  <PasswordCheckbox
                    htmlFor="showPassword"
                    type="checkbox"
                    onChange={this.onToggleCheckbox}
                  />
                  <ShowPasswordText id="showPassword">
                    Show Password
                  </ShowPasswordText>
                </ShowPasswordContainer>
                <LoginButton>Login</LoginButton>
                {showSubmitError ? (
                  <ErrorMessageText>*{errorMessage}</ErrorMessageText>
                ) : null}
              </LoginFormContainer>
            </LoginPageContainer>
          )
        }}
      </NxtVideosContext.Consumer>
    )
  }
}

export default Login
