import {withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import NxtVideosContext from '../../context/NxtVideosContext'

import {
  SidebarContainer,
  OptionsContainer,
  OptionContainer,
  OptionText,
  ContactDetailsContainer,
  ContactUsText,
  ContactLogosContainer,
  ContactLogo,
  ContactUsMessage,
  NavLink,
} from './styledComponents'

const Sidebar = props => (
  <NxtVideosContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const {match} = props
      const {path} = match

      const activeTabBgColor = isDarkTheme ? '#383838' : '#f1f5f9'

      return (
        <SidebarContainer>
          <OptionsContainer>
            <NavLink to="/">
              <OptionContainer bgColor={path === '/' ? activeTabBgColor : null}>
                <AiFillHome
                  color={path === '/' ? '#ff0000' : '#475569'}
                  size={17}
                />
                <OptionText isDarkTheme={isDarkTheme} isActive={path === '/'}>
                  Home
                </OptionText>
              </OptionContainer>
            </NavLink>
            <NavLink to="/trending">
              <OptionContainer
                bgColor={path === '/trending' ? activeTabBgColor : null}
              >
                <HiFire
                  color={path === '/trending' ? '#ff0000' : '#475569'}
                  size={17}
                />
                <OptionText
                  isDarkTheme={isDarkTheme}
                  isActive={path === '/trending'}
                >
                  Trending
                </OptionText>
              </OptionContainer>
            </NavLink>
            <NavLink to="/gaming">
              <OptionContainer
                bgColor={path === '/gaming' ? activeTabBgColor : null}
              >
                <SiYoutubegaming
                  color={path === '/gaming' ? '#ff0000' : '#475569'}
                  size={17}
                />
                <OptionText
                  isDarkTheme={isDarkTheme}
                  isActive={path === '/gaming'}
                >
                  Gaming
                </OptionText>
              </OptionContainer>
            </NavLink>
            <NavLink to="/saved-videos">
              <OptionContainer
                bgColor={path === '/saved-videos' ? activeTabBgColor : null}
              >
                <BiListPlus
                  color={path === '/saved-videos' ? '#ff0000' : '#475569'}
                  size={17}
                />
                <OptionText
                  isDarkTheme={isDarkTheme}
                  isActive={path === '/saved-videos'}
                >
                  Saved Videos
                </OptionText>
              </OptionContainer>
            </NavLink>
          </OptionsContainer>
          <ContactDetailsContainer>
            <ContactUsText isDarkTheme={isDarkTheme}>Contact Us</ContactUsText>
            <ContactLogosContainer>
              <ContactLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <ContactLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <ContactLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </ContactLogosContainer>
            <ContactUsMessage isDarkTheme={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </ContactUsMessage>
          </ContactDetailsContainer>
        </SidebarContainer>
      )
    }}
  </NxtVideosContext.Consumer>
)

export default withRouter(Sidebar)
