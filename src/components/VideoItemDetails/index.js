import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {BiDislike, BiLike, BiListPlus} from 'react-icons/bi'

import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Sidebar from '../Sidebar'
import Header from '../Header'
import FailureView from '../FailureView'

import NxtVideosContext from '../../context/NxtVideosContext'

import {
  VideoItemDetailsMainContainer,
  VideoItemDetailsResponsiveContainer,
  VideoItemDetailsContentContainer,
  ResponsiveContainer,
  ReactPlayerContainer,
  VideoItemDetailsContainer,
  VideoTitleText,
  ViewsAndCountText,
  ButtonsContainer,
  ReactionButton,
  InProgressContainer,
  ButtonText,
  Separator,
  ChannelDetailsContainer,
  ChannelImage,
  TextAndButtonsContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoObject: {},
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoObject()
  }

  getVideoObject = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
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
      const fetchedVideoData = {
        id: data.video_details.id,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        description: data.video_details.description,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        viewCount: data.video_details.view_count,
        videoUrl: data.video_details.video_url,
      }

      this.setState({
        videoObject: fetchedVideoData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => (
    <NxtVideosContext.Consumer>
      {value => {
        const {
          savedVideosList,
          likedVideosList,
          dislikedVideosList,
          addVideoToSavedVideosList,
          removeVideoFromSavedVideosList,
          addVideoToLikedVideosList,
          removeVideoFromLikedVideosList,
          addVideoToDislikedVideosList,
          removeVideoFromDislikedVideosList,
        } = value
        const {videoObject} = this.state
        const {
          id,
          name,
          profileImageUrl,
          subscriberCount,
          description,
          publishedAt,
          title,
          viewCount,
          videoUrl,
        } = videoObject

        const formattedTime = formatDistanceToNow(new Date(publishedAt))
        const words = formattedTime.split(' ')
        const number = words[1]
        const postedTime = `${number} ${number > 1 ? 'years' : 'year'} ago`

        const videoObjectFromSavedVideos = savedVideosList.find(
          eachItem => eachItem.id === id,
        )

        const videoObjectFromLikedVideos = likedVideosList.find(
          eachItem => eachItem.id === id,
        )

        const videoObjectFromDislikedVideos = dislikedVideosList.find(
          eachItem => eachItem.id === id,
        )

        const savedButtonText =
          videoObjectFromSavedVideos === undefined ? 'Save' : 'Saved'

        const isSavedButtonActive = savedButtonText === 'Saved'

        const isLikeButtonActive = videoObjectFromLikedVideos !== undefined

        const isDislikeButtonActive =
          videoObjectFromDislikedVideos !== undefined

        const onToggleSaveButton = () => {
          if (videoObjectFromSavedVideos === undefined) {
            addVideoToSavedVideosList(videoObject)
          } else {
            removeVideoFromSavedVideosList(id)
          }
        }

        const onClickLikeButton = () => {
          if (videoObjectFromLikedVideos === undefined) {
            addVideoToLikedVideosList(videoObject)
            removeVideoFromDislikedVideosList(id)
          } else {
            removeVideoFromLikedVideosList(id)
          }
        }

        const onClickDislikeButton = () => {
          if (videoObjectFromDislikedVideos === undefined) {
            addVideoToDislikedVideosList(videoObject)
            removeVideoFromLikedVideosList(id)
          } else {
            removeVideoFromDislikedVideosList(id)
          }
        }

        return (
          <>
            <ResponsiveContainer>
              <ReactPlayerContainer>
                <ReactPlayer url={videoUrl} width="100%" height="100%" />
              </ReactPlayerContainer>

              <VideoItemDetailsContainer>
                <VideoTitleText>{title}</VideoTitleText>

                <TextAndButtonsContainer>
                  <ViewsAndCountText>
                    {viewCount} views <BsDot /> {postedTime}
                  </ViewsAndCountText>

                  <ButtonsContainer>
                    <ReactionButton
                      type="button"
                      onClick={onClickLikeButton}
                      isActive={isLikeButtonActive}
                    >
                      <BiLike />
                      Like
                    </ReactionButton>
                    <ReactionButton
                      type="button"
                      onClick={onClickDislikeButton}
                      isActive={isDislikeButtonActive}
                    >
                      <BiDislike />
                      Dislike
                    </ReactionButton>
                    <ReactionButton
                      type="button"
                      onClick={onToggleSaveButton}
                      isActive={isSavedButtonActive}
                    >
                      <BiListPlus />
                      <ButtonText>{savedButtonText}</ButtonText>
                    </ReactionButton>
                  </ButtonsContainer>
                </TextAndButtonsContainer>
              </VideoItemDetailsContainer>
              <Separator />
              <ChannelDetailsContainer>
                <ChannelImage src={profileImageUrl} alt="channel logo" />
                <div>
                  <ViewsAndCountText>{name}</ViewsAndCountText>
                  <ViewsAndCountText>
                    {subscriberCount} subscribers
                  </ViewsAndCountText>
                </div>
              </ChannelDetailsContainer>
              <ViewsAndCountText>{description}</ViewsAndCountText>
            </ResponsiveContainer>
          </>
        )
      }}
    </NxtVideosContext.Consumer>
  )

  renderInProgressView = () => (
    <InProgressContainer data-testid="loader">
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </InProgressContainer>
  )

  onClickRetry = () => {
    this.getVideoObject()
  }

  renderFailureView = () => <FailureView onClickRetry={this.onClickRetry} />

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
      <NxtVideosContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <VideoItemDetailsMainContainer
              data-testid="videoItemDetails"
              isDarkTheme={isDarkTheme}
            >
              <Header />
              <VideoItemDetailsResponsiveContainer>
                <Sidebar />
                <VideoItemDetailsContentContainer isDarkTheme={isDarkTheme}>
                  {this.renderPageViews()}
                </VideoItemDetailsContentContainer>
              </VideoItemDetailsResponsiveContainer>
            </VideoItemDetailsMainContainer>
          )
        }}
      </NxtVideosContext.Consumer>
    )
  }
}

export default VideoItemDetails
