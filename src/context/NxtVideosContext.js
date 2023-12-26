import React from 'react'

const NxtVideosContext = React.createContext({
  isDarkTheme: false,
  activeTab: 'Home',
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
  onChangeTab: () => {},
})

export default NxtVideosContext
