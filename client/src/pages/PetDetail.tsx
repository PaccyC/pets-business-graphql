import { useEffect  } from 'react'
import { useMutation,useQuery } from '@apollo/client'
import { DELETE_PET } from '../api/mutations/mutations'
import { Link, useParams } from 'react-router-dom'
import { GET_PET } from '../api/queries/queries'

interface PetDetailProps{
    setPetToEdit: any
}

const PetDetail = ({setPetToEdit}:PetDetailProps) => {

    const {petId}= useParams()
    const {loading,error,data}= useQuery(GET_PET,{
        variables:{ petId}
    })

    useEffect(()=>{
 
        if(data && data?.pet) setPetToEdit(data?.pet)
    },[data])
    

    const [deletePet, {loading:deleteLoading,error:deleteError, data: deleteData}]= useMutation(DELETE_PET,{

        variables:{deletePetId:petId},
        // onCompleted: ()=>{
        //     alert(`Pet deleted successfully`)
        // },
        // onError:(error)=>alert(`Error deleting pet: ${error.message}`)
    })
    console.log("Pet id," + petId);
    

    useEffect(()=>{

        if(deleteData && deleteData?.deletePet) window.location.href = "/"
    },[deleteData])
    return (
    
        <div className='pet-detail-container'>

                <div>Pet Details</div>
            
                {(loading || deleteLoading) && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}

                {deleteError && <p style={{color: "red"}}>Delete Error: {deleteError.message}</p>}
            
            
                {data?.pet && (
                    <div>
                        <>
                        
                        <p>Pet name: {data?.pet?.name}</p>
                        <p>Pet breed: {data?.pet.breed}</p>
                        <p>Pet age: {data?.pet.age}</p>
                        <p>Pet type: {data?.pet.type}</p>
                        </>

                        <div>
                            <Link to={`/${data?.pet?.id}/edit`}>
                               <button>Edit Pet</button>
                            </Link>
                        </div>

                        <button style={{marginLeft:10}} onClick={()=>deletePet()}>Delete Pet</button>
                    </div>
        )}
        
        </div>
  )
}

export default PetDetail