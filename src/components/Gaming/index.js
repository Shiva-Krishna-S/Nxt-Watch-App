import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import GamingVideoCard from '../GamingVideoCard'
import Header from '../Header'
import Sidebar from '../Sidebar'
import FailureView from '../FailureView'

import NxtVideosContext from '../../context/NxtVideosContext'

import {
  GamingVideosListContainer,
  InProgressContainer,
  GamingPageContainer,
  GamingBannerSection,
  IconContainer,
  GamingTitle,
  GamingPageMainContainer,
  GamingPageResponsiveContainer,
  GamingPageContentContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    gamingVideosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideosData()
  }

  getGamingVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    // console.log(response)
    if (response.ok === true) {
      const data = await response.json()
      //   console.log(data)
      const fetchedVideosData = data.videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

      this.setState({
        gamingVideosList: fetchedVideosData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = isDarkTheme => {
    const {gamingVideosList} = this.state

    return (
      <GamingPageContainer>
        <GamingBannerSection data-testid="banner" isDarkTheme={isDarkTheme}>
          <IconContainer isDarkTheme={isDarkTheme}>
            <SiYoutubegaming size={27} color="#ff0000" />
          </IconContainer>
          <GamingTitle isDarkTheme={isDarkTheme}>Gaming</GamingTitle>
        </GamingBannerSection>
        <GamingVideosListContainer>
          {gamingVideosList.map(eachVideo => (
            <GamingVideoCard key={eachVideo.id} videoDetails={eachVideo} />
          ))}
        </GamingVideosListContainer>
      </GamingPageContainer>
    )
  }

  renderInProgressView = () => (
    <InProgressContainer data-testid="loader">
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </InProgressContainer>
  )

  onClickRetry = () => {
    this.getGamingVideosData()
  }

  renderFailureView = () => <FailureView onClickRetry={this.onClickRetry} />

  renderPageViews = isDarkTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView(isDarkTheme)
      case apiStatusConstants.inProgress:
        return this.renderInProgressView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtVideosContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <GamingPageMainContainer
              data-testid="gaming"
              isDarkTheme={isDarkTheme}
            >
              <Header />
              <GamingPageResponsiveContainer>
                <Sidebar />
                <GamingPageContentContainer isDarkTheme={isDarkTheme}>
                  {this.renderPageViews(isDarkTheme)}
                </GamingPageContentContainer>
              </GamingPageResponsiveContainer>
            </GamingPageMainContainer>
          )
        }}
      </NxtVideosContext.Consumer>
    )
  }
}

export default Gaming
