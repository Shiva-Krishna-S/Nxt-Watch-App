import React from 'react'

const NxtVideosContext = React.createContext({
  savedVideosList: [],
  addVideoToSavedVideosList: () => {},
  removeVideoFromSavedVideosList: () => {},
})

export default NxtVideosContext
