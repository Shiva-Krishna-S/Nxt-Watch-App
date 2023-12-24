import styled from 'styled-components'

export const HomePageMainContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const HomePageResponsiveContainer = styled.div`
  display: flex;
  height: 90vh;
`

export const HomeContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-left: 20px;
  @media screen and (min-width: 768px) {
    flex-grow: 1;
    overflow-y: auto;
    padding-top: 20px;
    padding-left: 40px;
  }
`

export const BannerContainer = styled.div`
  height: 200px;
  display: flex;
  justify-content: space-between;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 10px;
  @media screen and (min-width: 768px) {
    padding: 25px;
  }
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
`

export const NxtWatchLogo = styled.img`
  width: 150px;
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
`

export const GetItNowButton = styled.button``

export const BannerCloseButton = styled.button`
  align-self: flex-start;
`
