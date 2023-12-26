import styled from 'styled-components'

export const HomePageMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`
export const HomePageResponsiveContainer = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    height: 85vh;
  }
`

export const HomeContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? ' #000000' : '#ffffff')};
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-grow: 1;
    overflow-y: auto;
  }
`

export const BannerContainer = styled.div`
  min-height: 200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 20px;
  @media screen and (min-width: 768px) {
    height: 300px;
    padding: 30px;
  }
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
`

export const NxtWatchLogo = styled.img`
  width: 170px;
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
`

export const GetItNowButton = styled.button`
  border: 1px solid black;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  color: black;
  padding-top: 8px;
  padding-left: 16px;
  padding-bottom: 8px;
  padding-right: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const BannerCloseButton = styled.button`
  align-self: flex-start;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  margin-right: 10px;
`
