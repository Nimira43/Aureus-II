import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router'

const API_URL = import.meta.env.VITE_COIN_API_URL

const CoinDetailsPage = () => {
  const { id } = useParams()
  const [coin, setCoin] = useState(null)
  const [loading, setLoading] = useState(true) 
  const [error, setError] = useState(null) 

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`)
        if (!res.ok) throw new Error('Failed to fetch data')
        const data = await res.json()
        console.log(data)
        setCoin(data)
      } catch (err) {
        console.log(err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchCoin()    
  }, [id])

  return ( 
    <div className='coins-details-container'>
      
      <h1 className='coin-details-title'>
        {coin
          ? `${coin.name} (${coin.symbol.toUpperCase()})`
          : 'Coin Details '
        }
      </h1>
      
      {loading && (
        <p>Loading</p>
      )}

      {error && (
        <div className='error'>
          {error}
        </div>
      )}

      {!loading && !error && (
        <>
          <img
            src={coin.image.large}
            alt={coin.name}
            className='coin-details-image'
          />
          <p className='coin-details-description'>
            {
              coin.description.en
                .split('. ')
                .slice(0, 5)
                .join('. ') + '.'
            }
          </p>

          <div className='coin-details-info'>
            <h3 className='rank'>
              Rank:
              #{
                coin.market_cap_rank
              }
            </h3>
            <h4>
              Current Price:
              £{
                coin.market_data.current_price.gbp.toLocaleString()
              }
            </h4>
            <h4>
              Market Cap:
              £{
                coin.market_data.market_cap.gbp.toLocaleString()
              }
            </h4>
            <h4>
              24 Hour High:
              £{
                coin.market_data.high_24h.gbp.toLocaleString()
              }
            </h4>
            <h4>
              24 Hour Low:
              £{
                coin.market_data.low_24h.gbp.toLocaleString()
              }
            </h4>
            <h4>
              24 Hour Change:{' '}
              £{
                coin.market_data.price_change_24h.toFixed(2)
              } {' '}
              ({
                coin.market_data.price_change_percentage_24h.toFixed(2)
              }%)
            </h4>
            <h4>
              Circulating Supply: {' '}
              {
                coin.market_data.circulating_supply.toLocaleString()
              }
            </h4>
            <h4>
              Total Supply: {' '}
              {
                coin.market_data.total_supply?.toLocaleString() || 'N/A'
              }
            </h4>
            <h4>
              All Time High:{' '}
              {
                coin.market_data.ath.gbp.toLocaleString()} on {' '} {new Date(coin.market_data.ath_date.gbp).toLocaleDateString()
              }
            </h4>
            <h4>
              All Time Low:{' '}
              {
                coin.market_data.atl.gbp.toLocaleString()} on {' '} {new Date(coin.market_data.atl_date.gbp).toLocaleDateString()
              }
            </h4>
            <h4>
              Last Updated:{' '}
              {
                new Date(coin.last_updated).toLocaleDateString()
              }
            </h4>
             {
              coin.categories.length > 0 && (
                <h4>
                  Categories:{' '}
                  {
                    coin.categories.join(', ')
                  }    
                </h4>    
              )   
            } 
          <div
            className='coin-details-links'
          >
            {
              coin.links.homepage[0] && (
                  <a
                    className='nav-link'
                    href={coin.links.homepage[0]}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {coin.name} Website
                  </a>
              )
            }
            {
              coin.links.homepage[0] && (
                  <a
                    className='nav-link'
                    href={coin.links.blockchain_site[0]}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Blockchain Explorer
                  </a>
              )
            }
          </div>
          <div>
            
          </div>  
        </div>
        </>
      )}
      
      {/* {
        !loading && !error && !coin(
          <p>No Data Found</p>
        )
      } */}

      <div className='coins-nav-link-wrapper'>
        <Link
          to='/'
          className='nav-link'
        >
          Home
        </Link>
      </div>
    </div>
   )
}
 
export default CoinDetailsPage