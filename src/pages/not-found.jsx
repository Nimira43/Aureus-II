import { Link } from 'react-router'

const NotFoundPage = () => {
  return ( 
    <div className='not-found-container'>
      <h1 className='not-found-title'>
        404
      </h1>
      <p className='not-found-message'>
        We cannot find the page you are looking for
      </p>
      <Link
        to='/'
        className='not-found-link'
      >
        Home
      </Link>
    </div>
  )
}

export default NotFoundPage