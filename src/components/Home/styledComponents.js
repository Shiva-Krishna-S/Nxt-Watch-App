import styled from 'styled-components'

export const HomeContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: auto;
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
