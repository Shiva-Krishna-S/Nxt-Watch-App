import {
  VideoCardItem,
  VideoThumbnailImage,
  VideoDetailsContainer,
  VideoTitle,
  StatText,
} from './styledComponents'

const GamingVideoCard = props => {
  const {videoDetails} = props
  const {id, thumbnailUrl, title, viewCount} = videoDetails

  return (
    <VideoCardItem>
      <VideoThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
      <VideoDetailsContainer>
        <VideoTitle>{title}</VideoTitle>
        <StatText>{viewCount} Watching Worldwide</StatText>
      </VideoDetailsContainer>
    </VideoCardItem>
  )
}

export default GamingVideoCard
