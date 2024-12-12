import { gql } from '@apollo/client'



export const ADD_PET= gql `
  mutation addPet($petToAdd: PetToAdd!){
     addPet(petToAdd: $petToAdd){
        id,
        name,
        breed,
        type,
        age
     }
  }

`

export const EDIT_PET= gql `
 
  mutation editPet( $petToEdit: PetToEdit!){
    editPet(petToEdit:  $petToEdit!){
        id,
        name,
        breed,
        type,
        age
 
    }
  }


`