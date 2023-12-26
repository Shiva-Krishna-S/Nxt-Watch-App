import styled from 'styled-components'

export const GamingPageMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`
export const GamingPageResponsiveContainer = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    height: 90vh;
  }
`
export const GamingPageContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? ' #000000' : '#ffffff')};
  padding-top: 10px;
  padding-left: 20px;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-grow: 1;
    overflow-y: auto;
    padding-top: 20px;
    padding-left: 40px;
  }
`
export const GamingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const GamingBannerSection = styled.div`
  display: flex;
  align-items: center;
`
export const GamingTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  margin-left: 14px;
`

export const GamingVideosListContainer = styled.ul`
  padding-left: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const InProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  @media screen and (min-width: 768px) {
    min-height: 90vh;
  }
`
export const GamingVideosFailureView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding-top: 30px;
  @media screen and (min-width: 768px) {
    min-height: 90vh;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`
export const FailureImage = styled.img`
  width: 50%;
  max-width: 450px;
  max-height: 350px;
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 21px;
  text-align: center;
`
export const FailureMessage = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  text-align: center;
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
