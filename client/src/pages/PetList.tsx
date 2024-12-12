
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import { GET_PETS } from '../api/queries/queries'
const PetList = () => {

    const {loading,error, data}= useQuery(GET_PETS)
  return (
    <>
    <h2>PetList</h2>

    <Link to="/add">
    
        <button>
            Add New Pet
        </button>
   </Link>

   {loading && <p>Loading...</p>}
   {error && <p>Error: {error.message}</p>}
    
   {data?.pets?.map((pet:any)=>(
    <div key={pet?.id}>
        <p>{pet?.name} - {pet?.breed} - {pet?.type}</p>

        <Link to={`/${pet?.id}`}>
          <button>Pet Details</button>
        </Link>
    </div>

   ))}
    </>
  )
}

export default PetList