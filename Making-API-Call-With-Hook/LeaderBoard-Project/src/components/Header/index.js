import {
  HeaderContainer,
  HeaderElementsContainer,
  Logo,
  Own,
} from './styledComponents'

const Header = () => (
  <HeaderContainer>
    <HeaderElementsContainer>
      <Logo
        src='https://assets.ccbp.in/frontend/hooks/leaderboard/nxt-code-logo-img.png'
        alt='nxt code logo'
      />
      <Own>Designed by Ashiq</Own>
    </HeaderElementsContainer>
  </HeaderContainer>
)

export default Header
