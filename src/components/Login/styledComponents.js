import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#f8fafc')};
`

export const LoginFormContainer = styled.form`
  width: 90%;
  max-width: 350px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  @media screen and (min-width: 768px) {
    max-width: 450px;
    flex-shrink: 0;
    padding: 64px 48px 64px 48px;
  }
`
export const LoginLogo = styled.img`
  width: 120px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 180px;
  }
`
export const LoginInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`

export const LoginInputLabel = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: ${props => (props.isDarkTheme ? '#f4f4f4' : '#909090')};
`

export const LoginInputElement = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
  background-color: transparent;
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin: 10px;
`
export const PasswordCheckbox = styled.input`
  margin-right: 8px;
`

export const ShowPasswordText = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#f4f4f4' : '#000000')};
`
export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 2px;
  background-color: #0b69ff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  outline: none;
`
export const ErrorMessageText = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 8px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`
