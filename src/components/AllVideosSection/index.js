import {Component} from 'react'
import {MdSearch} from 'react-icons/md'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import VideoCard from '../VideoCard'
import {
  AllVideosListContainer,
  InProgressContainer,
  AllVideosFailureView,
  FailureImage,
  FailureHeading,
  FailureMessage,
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

  renderNoSearchResults = () => (
    <NoSearchResultsView>
      <NoSearchResultsImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoSearchResultsHeading>No Search results found</NoSearchResultsHeading>
      <NoSearchResultsMessage>
        Try different key words or remove search filter
      </NoSearchResultsMessage>
      <RetryButton>Retry</RetryButton>
    </NoSearchResultsView>
  )

  renderSuccessView = () => {
    const {allVideosList} = this.state
    const shouldShowVideoList = allVideosList.length === 0

    return shouldShowVideoList ? (
      this.renderNoSearchResults()
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
      <Loader type="ThreeDots" color=" #4f46e5" height="50" width="50" />
    </InProgressContainer>
  )

  renderFailureView = () => (
    <AllVideosFailureView>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureMessage>
        We are having some trouble to complete your request. Please try again.
      </FailureMessage>
      <RetryButton>Retry</RetryButton>
    </AllVideosFailureView>
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
        <SearchContainer>
          <SearchInput
            type="search"
            placeholder="Search"
            onChange={this.onChangeSearchInput}
            onKeyDown={this.onSearchInputKeydown}
          />
          <SearchButton onClick={this.onClickSearchIcon}>
            <MdSearch />
          </SearchButton>
        </SearchContainer>
        {this.renderPageViews()}
      </>
    )
  }
}

export default AllVideosSection
