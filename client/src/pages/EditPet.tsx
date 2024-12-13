import {useMutation } from '@apollo/client'
import {useState,useEffect, FormEvent} from 'react'
import {EDIT_PET } from '../api/mutations/mutations'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


interface EditPetProps{
  petToEdit: any
}

const EditPet =({petToEdit}:EditPetProps)=>{
  const [petName,setPetName]= useState("")
  const [petBreed,setPetBreed]= useState("")
  const [petType,setPetType]= useState("")
  const [petAge,setPetAge]= useState(0)

  const navigate= useNavigate();

  useEffect(() => {
    if (petToEdit) {
      setPetName(petToEdit.name || "")
      setPetBreed(petToEdit.breed || "")
      setPetType(petToEdit.type || "")
      setPetAge(petToEdit.age || 0)
    }
  }, [petToEdit])


console.log("PetID "+petToEdit?.id);


  const [editPet,{loading,error,data}]= useMutation(EDIT_PET,{
    variables:{
      petToEdit:{
        id: parseInt(petToEdit?.id),
        name:petName,
        type:petType,
        age: petAge,
        breed: petBreed
      }
    }
  })

  useEffect(()=>{
    if(data && data?.addPet) window.location.href = `/${data.addPet?.id}`
  },[data])

  

  const handleEditPet= (e:FormEvent)=>{
    e.preventDefault();
    if(!petToEdit){
      console.log('No pet data to edit');
    return;
    }
   
      editPet()
      // navigate(`/${petToEdit?.id}`)

    
  }
  
  return (
    <div>
      <h2>Edit Pet</h2>
      <Link to='/'>
                <button>Back to list</button>
            </Link>
      
      {loading || error ? (
        <>
        { loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        </>
      ):(
      <>
      
      <form onSubmit={handleEditPet}>
        <div style={{display: "flex", flexDirection:"column", margin:20}}>
          <label>Pet Name</label>
          <input 
          
            type="text"
            name='name'
            value={petName}
            onChange={(e)=> setPetName(e.target.value)}
            />
        </div>
        <div style={{display: "flex", flexDirection:"column", margin:20}}>
          <label>Pet Type</label>
          <input 
          
            type="text"
            name='type'
            value={petType}
            onChange={(e)=> setPetType(e.target.value)}
            />

        </div>
        <div style={{display: "flex", flexDirection:"column", margin:20}}>
          <label>Pet Age</label>
          <input 
          
            type="number"
            name='age'
            value={petAge}
            onChange={(e)=> setPetAge((parseInt(e.target.value,10)|| 0))}
            />

        </div>
        <div style={{display: "flex", flexDirection:"column", margin:20}}>
          <label>Pet Breed</label>
          <input 
          
            type="text"
            name='breed'
            value={petBreed}
            onChange={(e)=> setPetBreed(e.target.value)}
            />

        </div>

        <button type='submit'>Save changes</button>

      </form>
      </>



       

      )}
    </div>
  )
}

export default EditPet