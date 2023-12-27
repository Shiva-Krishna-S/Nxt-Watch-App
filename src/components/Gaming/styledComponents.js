import styled from 'styled-components'

export const GamingPageMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`
export const GamingPageResponsiveContainer = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    height: 85vh;
  }
`
export const GamingPageContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? ' #000000' : '#ffffff')};
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-grow: 1;
    overflow-y: auto;
  }
`
export const GamingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const GamingBannerSection = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#ebebeb')};
  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`

export const IconContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#cbd5e1')};
  border-radius: 50px;
  padding: 5px;
  @media screen and (min-width: 768px) {
    padding: 25px;
  }
`

export const GamingTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 21px;
  margin-left: 14px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

export const GamingVideosListContainer = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 10px;
  @media screen and (min-width: 576px) {
    margin: 15px;
  }
  @media screen and (min-width: 768px) {
    margin: 20px;
  }
`
export const InProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 65vh;
  @media screen and (min-width: 768px) {
    min-height: 85vh;
  }
`
