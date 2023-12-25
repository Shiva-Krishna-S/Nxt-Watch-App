import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardItem = styled.li`
  list-style-type: none;
  width: 48%;
  margin-bottom: 15px;
  @media screen and (min-width: 576px) {
    width: 33%;
  }
`

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`

export const VideoThumbnailImage = styled.img`
  width: 100%;
  max-height: 350px;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
`

export const StatText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  margin-top: 0;
`
