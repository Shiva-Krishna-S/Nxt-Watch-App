import {
  VideoCardItem,
  VideoThumbnailImage,
  VideoDetailsContainer,
  VideoTitle,
  StatText,
  StyledLink,
} from './styledComponents'

const GamingVideoCard = props => {
  const {videoDetails} = props
  const {id, thumbnailUrl, title, viewCount} = videoDetails

  return (
    <VideoCardItem>
      <StyledLink to={`/videos/${id}`}>
        <VideoThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <VideoDetailsContainer>
          <VideoTitle>{title}</VideoTitle>
          <StatText>{viewCount} Watching Worldwide</StatText>
        </VideoDetailsContainer>
      </StyledLink>
    </VideoCardItem>
  )
}

export default GamingVideoCard
