import {Component} from 'react'
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

class Home extends Component {
  state = {showBanner: true}

  onClickBannerClose = () => {
    this.setState(prevState => ({showBanner: !prevState.showBanner}))
  }

  render() {
    const {showBanner} = this.state

    return (
      <HomePageMainContainer>
        <Header />
        <HomePageResponsiveContainer>
          <Sidebar />
          <HomeContentContainer>
            {showBanner ? (
              <BannerContainer>
                <BannerContent>
                  <NxtWatchLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
                  <BannerText>
                    Buy Nxt Watch Premium prepaid plans with UPI
                  </BannerText>
                  <GetItNowButton>GET IT NOW</GetItNowButton>
                </BannerContent>
                <BannerCloseButton onClick={this.onClickBannerClose}>
                  <MdClose size={15} />
                </BannerCloseButton>
              </BannerContainer>
            ) : null}

            <AllVideosSection />
          </HomeContentContainer>
        </HomePageResponsiveContainer>
      </HomePageMainContainer>
    )
  }
}

export default Home
