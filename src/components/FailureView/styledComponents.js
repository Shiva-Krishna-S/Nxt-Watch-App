import styled from 'styled-components'

export const AllVideosFailureView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 65vh;
  padding-top: 30px;
  padding-bottom: 30px;
  @media screen and (min-width: 768px) {
    min-height: 85vh;
    padding-top: 60px;
    padding-bottom: 60px;
  }
`
export const FailureImage = styled.img`
  width: 50%;
  max-width: 450px;
  max-height: 350px;
  margin: 20px;
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 21px;
  text-align: center;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
`
export const FailureMessage = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  text-align: center;
  color: ${props => (props.isDarkTheme ? '#64748b' : '#475569')};
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  cursor: pointer;
  outline: none;
`
