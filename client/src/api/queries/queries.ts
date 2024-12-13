import { gql } from '@apollo/client'

export const GET_PETS= gql `
        query Pets{
            pets {
                id,
                name,
                breed, 
                type,
                age
            }
        }


`

export const GET_PET= gql `

  query Pets($petId: ID!){
    pet(id: $petId){
        id,
        name, 
        breed,
        type,
        age
    }
  }
`


