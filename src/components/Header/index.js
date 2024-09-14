import {withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import {FaMoon} from 'react-icons/fa'

import {BiSun} from 'react-icons/bi'

import Popup from 'reactjs-popup'

import WebsiteContext from '../../context'

import {
  Navbar,
  LogoButton,
  HeaderLogo,
  Container,
  HeaderProfile,
  HeaderButton,
  ModelPop,
  ModelPara,
  ModelContainer,
  ModelCancel,
  ModelConfirm,
} from './styledcomponents'

const Header = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <WebsiteContext.Consumer>
      {value => {
        const {websiteTheme, changeTheme} = value
        const onChangeTheme = () => {
          changeTheme()
        }
        const themeBoolean = websiteTheme === 'light'
        return (
          <Navbar bgColor={themeBoolean ? '#ffffff' : '#231f20'}>
            <Link to="/">
              <HeaderLogo
                src={
                  websiteTheme === 'light'
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                }
                alt="website logo"
              />
            </Link>
            <Container>
              <LogoButton
                type="button"
                onClick={onChangeTheme}
                data-testid="theme"
              >
                {themeBoolean ? (
                  <FaMoon style={{fontSize: 20}} />
                ) : (
                  <BiSun style={{fontSize: 25, color: '#ffffff'}} />
                )}
              </LogoButton>
              <HeaderProfile
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={
                  <HeaderButton
                    type="button"
                    color={themeBoolean ? '#3b82f6' : '#ffffff'}
                  >
                    Logout
                  </HeaderButton>
                }
                className="popup-content"
              >
                {close => (
                  <ModelPop>
                    <ModelPara>Are you sure, you want to logout</ModelPara>
                    <ModelContainer>
                      <ModelCancel type="button" onClick={close}>
                        Cancel
                      </ModelCancel>
                      <ModelConfirm type="button" onClick={onLogout}>
                        Confirm
                      </ModelConfirm>
                    </ModelContainer>
                  </ModelPop>
                )}
              </Popup>
            </Container>
          </Navbar>
        )
      }}
    </WebsiteContext.Consumer>
  )
}

export default withRouter(Header)
