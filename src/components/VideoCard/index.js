import {formatDistanceToNow} from 'date-fns'

import NxtVideosContext from '../../context/NxtVideosContext'

import {
  VideoCardItem,
  VideoThumbnailImage,
  VideoDetailsContainer,
  ChannelImage,
  VideoStatsContainer,
  VideoTitle,
  StatusDetailsContainer,
  StatusDetails,
  StatText,
  StyledLink,
  StatDotOne,
  StatDotTwo,
} from './styledComponents'

const VideoCard = props => (
  <NxtVideosContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {videoDetails} = props
      const {
        id,
        publishedAt,
        thumbnailUrl,
        title,
        viewCount,
        name,
        profileImageUrl,
      } = videoDetails

      const formattedTime = formatDistanceToNow(new Date(publishedAt))
      const words = formattedTime.split(' ')
      const requiredWords = words.slice(1, 3)
      const time = requiredWords.join(' ')
      const postedTime = `${time} ago`

      return (
        <VideoCardItem isDarkTheme={isDarkTheme}>
          <StyledLink to={`/videos/${id}`}>
            <VideoThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <VideoDetailsContainer>
              <ChannelImage src={profileImageUrl} alt="channel logo" />
              <VideoStatsContainer>
                <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                <StatusDetailsContainer>
                  <StatusDetails>
                    <StatText isDarkTheme={isDarkTheme}>{name}</StatText>
                    <StatDotOne isDarkTheme={isDarkTheme}>&#8226;</StatDotOne>
                  </StatusDetails>
                  <StatusDetails>
                    <StatText isDarkTheme={isDarkTheme}>
                      {viewCount} views
                    </StatText>
                    <StatDotTwo isDarkTheme={isDarkTheme}>&#8226;</StatDotTwo>
                    <StatText isDarkTheme={isDarkTheme}>{postedTime}</StatText>
                  </StatusDetails>
                </StatusDetailsContainer>
              </VideoStatsContainer>
            </VideoDetailsContainer>
          </StyledLink>
        </VideoCardItem>
      )
    }}
  </NxtVideosContext.Consumer>
)

export default VideoCard
