import { Link } from 'react-router'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='logo-wrapper'>
        <h1 className='logo-text'>Aureus II</h1>
      </div>
      <div className='top-nav'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
    
  )
}
 
export default Header