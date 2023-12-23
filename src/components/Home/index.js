import {MdClose} from 'react-icons/md'
import Header from '../Header'
import AllVideosSection from '../AllVideosSection'
import {
  HomeContentContainer,
  BannerContainer,
  BannerContent,
  NxtWatchLogo,
  BannerText,
  GetItNowButton,
  BannerCloseButton,
} from './styledComponents'

const Home = () => (
  <>
    <Header />
    <HomeContentContainer>
      <BannerContainer>
        <BannerContent>
          <NxtWatchLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
          <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
          <GetItNowButton>GET IT NOW</GetItNowButton>
        </BannerContent>
        <BannerCloseButton>
          <MdClose />
        </BannerCloseButton>
      </BannerContainer>
      <AllVideosSection />
    </HomeContentContainer>
  </>
)

export default Home
