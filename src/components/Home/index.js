import Cookies from 'js-cookie'
import './index.css'

const Home = props => {
  const onRemoveCookie = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/ebank/login')
  }
  return (
    <div className="main-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <button onClick={onRemoveCookie} className="logout-btn" type="button">
          Logout
        </button>
      </div>
      <div className="card-container">
        <h1 className="heading">Your Flexibility, Our Excellence</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
          className="card-image"
        />
      </div>
    </div>
  )
}

export default Home
