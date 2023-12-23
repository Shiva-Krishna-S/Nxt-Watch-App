import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import {
  TrendingVideoCardItem,
  VideoThumbnailImage,
  VideoDetailsContainer,
  ChannelImage,
  VideoStatsContainer,
  VideoTitle,
  StatusDetails,
  StatText,
  VideoStatsContainerSmallDevices,
  StatsViewCountAndTime,
} from './styledComponents'

const TrendingVideoCard = props => {
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
    <TrendingVideoCardItem>
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
        <VideoStatsContainerSmallDevices>
          <VideoTitle>{title}</VideoTitle>
          <StatText>{name}</StatText>
          <StatsViewCountAndTime>
            <StatText>{viewCount} views</StatText>
            <StatText>
              <BsDot size="10" />
            </StatText>
            <StatText>{postedTime}</StatText>
          </StatsViewCountAndTime>
        </VideoStatsContainerSmallDevices>
      </VideoDetailsContainer>
    </TrendingVideoCardItem>
  )
}

export default TrendingVideoCard
