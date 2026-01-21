import { useParams } from 'react-router'

const CoinDetailsPage = () => {
  const { id } = useParams()

  return ( 
    <div>Coin Details Page { id }</div>
   )
}
 
export default CoinDetailsPage