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
  min-height: 65vh;
  @media screen and (min-width: 768px) {
    min-height: 85vh;
  }
`
