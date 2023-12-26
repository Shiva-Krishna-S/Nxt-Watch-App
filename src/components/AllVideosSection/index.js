import {Component} from 'react'
import {MdSearch} from 'react-icons/md'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import VideoCard from '../VideoCard'
import FailureView from '../FailureView'
import NxtVideosContext from '../../context/NxtVideosContext'

import {
  AllVideosListContainer,
  InProgressContainer,
  RetryButton,
  SearchContainer,
  SearchInput,
  SearchButton,
  NoSearchResultsView,
  NoSearchResultsImage,
  NoSearchResultsHeading,
  NoSearchResultsMessage,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class AllVideosSection extends Component {
  state = {
    allVideosList: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.getAllVideosData()
  }

  getAllVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

      this.setState({
        allVideosList: fetchedVideosData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchInputKeydown = event => {
    if (event.key === 'Enter') {
      this.getAllVideosData()
    }
  }

  onClickSearchIcon = () => {
    this.getAllVideosData()
  }

  retrySearching = () => {
    this.setState({searchInput: ''}, this.getAllVideosData)
  }

  renderNoSearchResults = isDarkTheme => (
    <NoSearchResultsView>
      <NoSearchResultsImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoSearchResultsHeading isDarkTheme={isDarkTheme}>
        No Search results found
      </NoSearchResultsHeading>
      <NoSearchResultsMessage isDarkTheme={isDarkTheme}>
        Try different key words or remove search filter
      </NoSearchResultsMessage>
      <RetryButton onClick={this.retrySearching}>Retry</RetryButton>
    </NoSearchResultsView>
  )

  renderSuccessView = isDarkTheme => {
    const {allVideosList} = this.state
    const shouldShowVideoList = allVideosList.length === 0

    return shouldShowVideoList ? (
      this.renderNoSearchResults(isDarkTheme)
    ) : (
      <AllVideosListContainer>
        {allVideosList.map(eachVideo => (
          <VideoCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </AllVideosListContainer>
    )
  }

  renderInProgressView = () => (
    <InProgressContainer data-testid="loader">
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </InProgressContainer>
  )

  onClickRetry = () => {
    this.getAllVideosData()
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
    const {searchInput} = this.state
    return (
      <NxtVideosContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <SearchContainer>
                <SearchInput
                  type="search"
                  placeholder="Search"
                  value={searchInput}
                  onChange={this.onChangeSearchInput}
                  onKeyDown={this.onSearchInputKeydown}
                  isDarkTheme={isDarkTheme}
                />
                <SearchButton
                  onClick={this.onClickSearchIcon}
                  data-testid="searchButton"
                  isDarkTheme={isDarkTheme}
                >
                  <MdSearch
                    size={15}
                    color={isDarkTheme ? '#e2e8f0' : '#181818'}
                  />
                </SearchButton>
              </SearchContainer>
              {this.renderPageViews(isDarkTheme)}
            </>
          )
        }}
      </NxtVideosContext.Consumer>
    )
  }
}

export default AllVideosSection
