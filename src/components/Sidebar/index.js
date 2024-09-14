import {Component} from 'react'

import {Link} from 'react-router-dom'

import {IoMdHome} from 'react-icons/io'

import {FaFire} from 'react-icons/fa'

import {SiYoutubegaming} from 'react-icons/si'

import {BiListPlus} from 'react-icons/bi'

import WebsiteContext from '../../context'

import {
  SideContainer,
  SideListItem,
  SideHeading,
  SideIconContainer,
  SideMessage,
  SideIconPara,
  SideIcon,
  SideUnOrderList,
  SocialContainer,
} from './styledcomponents'

class Sidebar extends Component {
  render() {
    return (
      <WebsiteContext.Consumer>
        {value => {
          const {websiteTheme, activeBar, changeBar} = value
          const themeBoolean = websiteTheme === 'light'

          const onClickHomeBar = () => {
            changeBar('home')
          }

          const onClickTrendingBar = () => {
            changeBar('trending')
          }

          const onClickGamingBar = () => {
            changeBar('gaming')
          }

          const onClickSavedVideosBar = () => {
            changeBar('savedVideos')
          }

          const bgColor = themeBoolean
            ? {backgroundColor: '#f1f5f9'}
            : {backgroundColor: ' #383838'}

          return (
            <SideContainer bgColor={themeBoolean ? '#ffffff' : '#231f20'}>
              <SideUnOrderList>
                <Link to="/" onClick={onClickHomeBar}>
                  <SideListItem
                    style={
                      activeBar === 'home'
                        ? bgColor
                        : {backgroundColor: 'transparent'}
                    }
                  >
                    <IoMdHome
                      style={{
                        fontSize: 18,
                        color: `${
                          themeBoolean
                            ? `${activeBar === 'home' ? '#ff0b37' : '#7e858e'}`
                            : `${activeBar === 'home' ? '#ff0b37' : '#ebebeb'}`
                        }`,
                      }}
                    />
                    <SideIconPara
                      color={themeBoolean ? '#7e858e' : '#ebebeb'}
                      style={
                        activeBar === 'home'
                          ? {fontWeight: '400'}
                          : {fontWeight: '300'}
                      }
                    >
                      Home
                    </SideIconPara>
                  </SideListItem>
                </Link>
                <Link to="/trending" onClick={onClickTrendingBar}>
                  <SideListItem
                    style={
                      activeBar === 'trending'
                        ? bgColor
                        : {backgroundColor: 'transparent'}
                    }
                  >
                    <FaFire
                      style={{
                        fontSize: 18,
                        color: `${
                          themeBoolean
                            ? `${
                                activeBar === 'trending' ? '#ff0b37' : '#7e858e'
                              }`
                            : `${
                                activeBar === 'trending' ? '#ff0b37' : '#ebebeb'
                              }`
                        }`,
                      }}
                    />
                    <SideIconPara
                      color={themeBoolean ? '#7e858e' : '#ebebeb'}
                      style={
                        activeBar === 'trending'
                          ? {fontWeight: '400'}
                          : {fontWeight: '300'}
                      }
                    >
                      Trending
                    </SideIconPara>
                  </SideListItem>
                </Link>
                <Link to="/gaming" onClick={onClickGamingBar}>
                  <SideListItem
                    style={
                      activeBar === 'gaming'
                        ? bgColor
                        : {backgroundColor: 'transparent'}
                    }
                  >
                    <SiYoutubegaming
                      style={{
                        fontSize: 18,
                        color: `${
                          themeBoolean
                            ? `${
                                activeBar === 'gaming' ? '#ff0b37' : '#7e858e'
                              }`
                            : `${
                                activeBar === 'gaming' ? '#ff0b37' : '#ebebeb'
                              }`
                        }`,
                      }}
                    />
                    <SideIconPara
                      color={themeBoolean ? '#7e858e' : '#ebebeb'}
                      style={
                        activeBar === 'gaming'
                          ? {fontWeight: '400'}
                          : {fontWeight: '300'}
                      }
                    >
                      Gaming
                    </SideIconPara>
                  </SideListItem>
                </Link>
                <Link to="/saved-videos" onClick={onClickSavedVideosBar}>
                  <SideListItem
                    style={
                      activeBar === 'savedVideos'
                        ? bgColor
                        : {backgroundColor: 'transparent'}
                    }
                  >
                    <BiListPlus
                      style={{
                        fontSize: 18,
                        color: `${
                          themeBoolean
                            ? `${
                                activeBar === 'savedVideos'
                                  ? '#ff0b37'
                                  : '#7e858e'
                              }`
                            : `${
                                activeBar === 'savedVideos'
                                  ? '#ff0b37'
                                  : '#ebebeb'
                              }`
                        }`,
                      }}
                    />
                    <SideIconPara
                      color={themeBoolean ? '#7e858e' : '#ebebeb'}
                      style={
                        activeBar === 'savedVideos'
                          ? {fontWeight: '400'}
                          : {fontWeight: '300'}
                      }
                    >
                      Saved Videos
                    </SideIconPara>
                  </SideListItem>
                </Link>
              </SideUnOrderList>
              <SocialContainer>
                <SideHeading color={themeBoolean ? '#212121' : '#ebebeb'}>
                  Contact Us
                </SideHeading>
                <SideIconContainer>
                  <SideIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
                    alt="facebook logo"
                  />
                  <SideIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SideIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SideIconContainer>
                <SideMessage color={themeBoolean ? '#212121' : '#ebebeb'}>
                  Enjoy! Now to see your channels and recommendations!
                </SideMessage>
              </SocialContainer>
            </SideContainer>
          )
        }}
      </WebsiteContext.Consumer>
      /* <SideContainer bgColor={}>
    <SideUnOrderList>
      <SideListItem>
        <IoMdHome style={{fontSize: 18, color: '#7e858e'}} />
        <SideIconPara>Home</SideIconPara>
      </SideListItem>
      <SideListItem>
        <FaFire style={{fontSize: 18, color: '#7e858e'}} />
        <SideIconPara>Trending</SideIconPara>
      </SideListItem>
      <SideListItem style={{backgroundColor: '#f1f5f9'}}>
        <SiYoutubegaming style={{fontSize: 18, color: '#ff0b37'}} />
        <SideIconPara>Gaming</SideIconPara>
      </SideListItem>
      <SideListItem>
        <BiListPlus style={{fontSize: 18, color: '#7e858e'}} />
        <SideIconPara>Saved Videos</SideIconPara>
      </SideListItem>
    </SideUnOrderList>
    <SocialContainer>
      <SideHeading>Contact Us</SideHeading>
      <SideIconContainer>
        <SideIcon
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
          alt="facebook logo"
        />
        <SideIcon
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter logo"
        />
        <SideIcon
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="linkedin logo"
        />
      </SideIconContainer>
      <SideMessage>Enjoy! Now you can see recommendations!</SideMessage>
    </SocialContainer>
  </SideContainer> */
    )
  }
}

export default Sidebar
