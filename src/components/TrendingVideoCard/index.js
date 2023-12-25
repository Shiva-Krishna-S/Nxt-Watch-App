import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import {
  TrendingVideoCardItem,
  StyledLink,
  VideoThumbnailImage,
  VideoDetailsContainer,
  ChannelImage,
  VideoStatsContainer,
  VideoTitle,
  StatusDetailsContainer,
  StatusDetails,
  StatText,
  StatDotOne,
  StatDotTwo,
} from './styledComponents'

const TrendingVideoCard = props => {
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
  const number = words[1]
  const postedTime = `${number} ${number > 1 ? 'years' : 'year'} ago`

  return (
    <TrendingVideoCardItem>
      <StyledLink to={`/videos/${id}`}>
        <VideoThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <VideoDetailsContainer>
          <ChannelImage src={profileImageUrl} alt="channel logo" />
          <VideoStatsContainer>
            <VideoTitle>{title}</VideoTitle>
            <StatusDetailsContainer>
              <StatusDetails>
                <StatText>{name}</StatText>
                <StatDotOne>
                  <BsDot size="10" />
                </StatDotOne>
              </StatusDetails>
              <StatusDetails>
                <StatText>{viewCount} views</StatText>
                <StatDotTwo>
                  <BsDot size="10" />
                </StatDotTwo>
                <StatText>{postedTime}</StatText>
              </StatusDetails>
            </StatusDetailsContainer>
          </VideoStatsContainer>
        </VideoDetailsContainer>
      </StyledLink>
    </TrendingVideoCardItem>
  )
}

export default TrendingVideoCard
