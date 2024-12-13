
import { getPet,listPets } from '../pets/queries/pets.queries.js'
import { deletePet,addPet,editPet } from './mutations/pets.mutations.js'
export const typeDefs= `#graphql

    type Pet {
        id: ID!
        name: String!
        type: String!
        age: Int!
        breed: String!
    }

    input PetToEdit {
       id: ID!
       name: String!
       type: String!
       age: Int!
       breed: String!
    }

    input PetToAdd {
       name: String!
       type: String!
       age: Int!
       breed: String!
    }

    # Queries and mutations

    # QUERY TYPES

    type Query {
     pets: [Pet],
     pet(id: ID!): Pet
    }

    # MUTATIONS TYPES

    type Mutation {
        addPet(petToAdd: PetToAdd!):Pet,
        editPet(petToEdit: PetToEdit!): Pet,
        deletePet(id: ID!): [Pet],
    }
`


export const resolvers = {
    // Resolvers for queries
    Query:{
      pets: () => listPets(),
      pet: (_, {id})=> getPet(id),
    },
    // Resolvers for mutations
    Mutation:{

        addPet: (_,{petToAdd})=> addPet(petToAdd) ,
        deletePet: (_,{id})=>{
            return deletePet(id);
        },
        editPet: (_,{petToEdit})=> editPet(petToEdit),
    }
}