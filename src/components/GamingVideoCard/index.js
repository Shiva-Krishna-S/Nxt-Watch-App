import NxtVideosContext from '../../context/NxtVideosContext'

import {
  VideoCardItem,
  VideoThumbnailImage,
  VideoDetailsContainer,
  VideoTitle,
  StatText,
  StyledLink,
} from './styledComponents'

const GamingVideoCard = props => (
  <NxtVideosContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {videoDetails} = props
      const {id, thumbnailUrl, title, viewCount} = videoDetails

      return (
        <VideoCardItem isDarkTheme={isDarkTheme}>
          <StyledLink to={`/videos/${id}`}>
            <VideoThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <VideoDetailsContainer>
              <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
              <StatText isDarkTheme={isDarkTheme}>
                {viewCount} Watching Worldwide
              </StatText>
            </VideoDetailsContainer>
          </StyledLink>
        </VideoCardItem>
      )
    }}
  </NxtVideosContext.Consumer>
)

export default GamingVideoCard
