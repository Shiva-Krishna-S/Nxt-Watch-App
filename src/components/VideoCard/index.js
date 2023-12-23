import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import {
  VideoCardItem,
  VideoThumbnailImage,
  VideoDetailsContainer,
  ChannelImage,
  VideoStatsContainer,
  VideoTitle,
  StatusDetails,
  StatText,
  StyledLink,
} from './styledComponents'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    channel,
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = videoDetails
  const {name, profileImageUrl} = channel
  const formattedTime = formatDistanceToNow(new Date(publishedAt))
  const words = formattedTime.split(' ')
  const number = words[1]
  const postedTime = `${number} ${number > 1 ? 'years' : 'year'} ago`

  return (
    <VideoCardItem>
      <StyledLink to={`/videos/${id}`}>
        <VideoThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <VideoDetailsContainer>
          <ChannelImage src={profileImageUrl} alt="channel logo" />
          <VideoStatsContainer>
            <VideoTitle>{title}</VideoTitle>
            <StatusDetails>
              <StatText>{name}</StatText>
              <StatText>
                <BsDot size="10" />
              </StatText>
              <StatText>{viewCount} views</StatText>
              <StatText>
                <BsDot size="10" />
              </StatText>
              <StatText>{postedTime}</StatText>
            </StatusDetails>
          </VideoStatsContainer>
        </VideoDetailsContainer>
      </StyledLink>
    </VideoCardItem>
  )
}

export default VideoCard
