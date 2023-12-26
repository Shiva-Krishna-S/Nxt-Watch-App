import {Component} from 'react'
import {MdClose} from 'react-icons/md'
import Header from '../Header'
import AllVideosSection from '../AllVideosSection'
import Sidebar from '../Sidebar'
import NxtVideosContext from '../../context/NxtVideosContext'
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

  renderBanner = () => (
    <BannerContainer data-testid="banner">
      <BannerContent>
        <NxtWatchLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
        <GetItNowButton>GET IT NOW</GetItNowButton>
      </BannerContent>
      <BannerCloseButton onClick={this.onClickBannerClose} data-testid="close">
        <MdClose size={15} />
      </BannerCloseButton>
    </BannerContainer>
  )

  render() {
    const {showBanner} = this.state

    return (
      <NxtVideosContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <HomePageMainContainer data-testid="home" isDarkTheme={isDarkTheme}>
              <Header />
              <HomePageResponsiveContainer>
                <Sidebar />
                <HomeContentContainer isDarkTheme={isDarkTheme}>
                  {showBanner && this.renderBanner()}
                  <AllVideosSection />
                </HomeContentContainer>
              </HomePageResponsiveContainer>
            </HomePageMainContainer>
          )
        }}
      </NxtVideosContext.Consumer>
    )
  }
}

export default Home
