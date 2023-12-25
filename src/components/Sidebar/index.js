import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

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
} from './styledComponents'

const Sidebar = () => (
  <SidebarContainer>
    <OptionsContainer>
      <OptionContainer to="/">
        <AiFillHome />
        <OptionText>Home</OptionText>
      </OptionContainer>
      <OptionContainer to="/trending">
        <HiFire />
        <OptionText>Trending</OptionText>
      </OptionContainer>
      <OptionContainer to="/gaming">
        <SiYoutubegaming />
        <OptionText>Gaming</OptionText>
      </OptionContainer>
      <OptionContainer to="/saved-videos">
        <BiListPlus />
        <OptionText>Saved Videos</OptionText>
      </OptionContainer>
    </OptionsContainer>
    <ContactDetailsContainer>
      <ContactUsText>Contact Us</ContactUsText>
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
      <ContactUsMessage>
        Enjoy! Now to see your channels and recommendations!
      </ContactUsMessage>
    </ContactDetailsContainer>
  </SidebarContainer>
)

export default Sidebar
