import React from 'react'

const NxtVideosContext = React.createContext({
  isDarkTheme: false,
  savedVideosList: [],
  likedVideosList: [],
  dislikedVideosList: [],
  onChangeTheme: () => {},
  addVideoToSavedVideosList: () => {},
  removeVideoFromSavedVideosList: () => {},
  addVideoToLikedVideosList: () => {},
  removeVideoFromLikedVideosList: () => {},
  addVideoToDislikedVideosList: () => {},
  removeVideoFromDislikedVideosList: () => {},
})

export default NxtVideosContext
