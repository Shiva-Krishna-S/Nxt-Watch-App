import React from 'react'

const NxtVideosContext = React.createContext({
  savedVideosList: [],
  likedVideosList: [],
  dislikedVideosList: [],
  addVideoToSavedVideosList: () => {},
  removeVideoFromSavedVideosList: () => {},
  addVideoToLikedVideosList: () => {},
  removeVideoFromLikedVideosList: () => {},
  addVideoToDislikedVideosList: () => {},
  removeVideoFromDislikedVideosList: () => {},
})

export default NxtVideosContext
