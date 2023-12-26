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

const Sidebar = () => (
  <NxtVideosContext.Consumer>
    {value => {
      const {isDarkTheme, activeTab, onChangeTab} = value

      const changeToHome = () => {
        onChangeTab('Home')
      }

      const changeToGaming = () => {
        onChangeTab('Gaming')
      }

      const changeToTrending = () => {
        onChangeTab('Trending')
      }

      const changeToSavedVideos = () => {
        onChangeTab('Saved Videos')
      }

      const activeTabBgColor = isDarkTheme ? '#383838' : '#f1f5f9'

      return (
        <SidebarContainer>
          <OptionsContainer>
            <NavLink to="/">
              <OptionContainer
                onClick={changeToHome}
                bgColor={activeTab === 'Home' ? activeTabBgColor : null}
              >
                <AiFillHome
                  color={activeTab === 'Home' ? '#ff0000' : '#475569'}
                  size={17}
                />
                <OptionText
                  isDarkTheme={isDarkTheme}
                  isActive={activeTab === 'Home'}
                >
                  Home
                </OptionText>
              </OptionContainer>
            </NavLink>
            <NavLink to="/trending">
              <OptionContainer
                onClick={changeToTrending}
                bgColor={activeTab === 'Trending' ? activeTabBgColor : null}
              >
                <HiFire
                  color={activeTab === 'Trending' ? '#ff0000' : '#475569'}
                  size={17}
                />
                <OptionText
                  isDarkTheme={isDarkTheme}
                  isActive={activeTab === 'Trending'}
                >
                  Trending
                </OptionText>
              </OptionContainer>
            </NavLink>
            <NavLink to="/gaming">
              <OptionContainer
                onClick={changeToGaming}
                bgColor={activeTab === 'Gaming' ? activeTabBgColor : null}
              >
                <SiYoutubegaming
                  color={activeTab === 'Gaming' ? '#ff0000' : '#475569'}
                  size={17}
                />
                <OptionText
                  isDarkTheme={isDarkTheme}
                  isActive={activeTab === 'Gaming'}
                >
                  Gaming
                </OptionText>
              </OptionContainer>
            </NavLink>
            <NavLink to="/saved-videos">
              <OptionContainer
                onClick={changeToSavedVideos}
                bgColor={activeTab === 'Saved Videos' ? activeTabBgColor : null}
              >
                <BiListPlus
                  color={activeTab === 'Saved Videos' ? '#ff0000' : '#475569'}
                  size={17}
                />
                <OptionText
                  isDarkTheme={isDarkTheme}
                  isActive={activeTab === 'Saved Videos'}
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

export default Sidebar
