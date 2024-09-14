import React from 'react'

const WebsiteContext = React.createContext({
  websiteTheme: 'light',
  changeTheme: () => {},
  activeBar: 'home',
  changeBar: () => {},
  saveVideoList: [],
  onSaveVideo: () => {},
})

export default WebsiteContext
