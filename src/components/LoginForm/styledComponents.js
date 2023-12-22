import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const LoginFormContainer = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-shadow: 0px 4px 16px 0px;
  @media screen and (min-width: 768px) {
    width: 50%;
    max-width: 400px;
  }
`
export const LoginLogo = styled.img`
  width: 150px;
`
export const LoginInputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 16px;
  align-self: flex-start;
`

export const LoginInputElement = styled.input`
  width: 100%;
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
`
export const PasswordCheckbox = styled.input``

export const ShowPasswordText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
`
export const LoginButton = styled.button`
  align-self: stretch;
`
export const ErrorMessageText = styled.p`
  color: red;
  align-self: flex-start;
`
