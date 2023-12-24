import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import TrendingVideoCard from '../TrendingVideoCard'
import Header from '../Header'

import {
  InProgressContainer,
  TrendingFailureView,
  FailureImage,
  FailureHeading,
  FailureMessage,
  RetryButton,
  TrendingItemsList,
  TrendingPageContainer,
  TrendingBannerSection,
  TrendingTitle,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {trendingVideosList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendingVideosData()
  }

  getTrendingVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

      this.setState({
        trendingVideosList: fetchedVideosData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {trendingVideosList} = this.state

    return (
      <TrendingPageContainer>
        <TrendingBannerSection>
          <HiFire />
          <TrendingTitle>Trending</TrendingTitle>
        </TrendingBannerSection>
        <TrendingItemsList>
          {trendingVideosList.map(eachVideo => (
            <TrendingVideoCard key={eachVideo.id} videoDetails={eachVideo} />
          ))}
        </TrendingItemsList>
      </TrendingPageContainer>
    )
  }

  renderInProgressView = () => (
    <InProgressContainer data-testid="loader">
      <Loader type="ThreeDots" color=" #4f46e5" height="50" width="50" />
    </InProgressContainer>
  )

  renderFailureView = () => (
    <TrendingFailureView>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureMessage>
        We are having some trouble to complete your request. Please try again.
      </FailureMessage>
      <RetryButton>Retry</RetryButton>
    </TrendingFailureView>
  )

  renderPageViews = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
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
      <>
        <Header />
        {this.renderPageViews()}
      </>
    )
  }
}

export default Trending
