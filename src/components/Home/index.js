import {MdClose} from 'react-icons/md'
import Header from '../Header'
import AllVideosSection from '../AllVideosSection'
import Sidebar from '../Sidebar'
import {
  HomeContentContainer,
  BannerContainer,
  BannerContent,
  NxtWatchLogo,
  BannerText,
  GetItNowButton,
  BannerCloseButton,
  HomePageMainContainer,
  HomePageResponsiveContainer,
} from './styledComponents'

const Home = () => (
  <HomePageMainContainer>
    <Header />
    <HomePageResponsiveContainer>
      <Sidebar />
      <HomeContentContainer>
        <BannerContainer>
          <BannerContent>
            <NxtWatchLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
            <BannerText>
              Buy Nxt Watch Premium prepaid plans with UPI
            </BannerText>
            <GetItNowButton>GET IT NOW</GetItNowButton>
          </BannerContent>
          <BannerCloseButton>
            <MdClose size={15} />
          </BannerCloseButton>
        </BannerContainer>

        <AllVideosSection />
      </HomeContentContainer>
    </HomePageResponsiveContainer>
  </HomePageMainContainer>
)

export default Home
