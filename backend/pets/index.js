

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
    Mutation:{

        addPet: (_,{petToAdd})=> addPet(petToAdd),
        editPet: (_,{petToEdit})=> editPet(petToEdit),
        deletePet: (_,{id})=> deletePet(id),
    }
}