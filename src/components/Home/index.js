import Cookies from 'js-cookie'
import {LogoutButton} from './styledComponents'

const Home = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return <LogoutButton onClick={onClickLogout}>Logout</LogoutButton>
}

export default Home
