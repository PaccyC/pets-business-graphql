
import { PrismaClient } from '@prisma/client'
import { getPet,listPets } from '../pets/queries/pets.queries.js'
import { deletePet,addPet,editPet } from './mutations/pets.mutations.js'


const prisma = new PrismaClient();
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
        deletePet(id: ID!): Pet,
    }
`


export const resolvers = {
    // Resolvers for queries
    Query:{
      pets: async() => {
        return await prisma.pet.findMany()
      },
      pet: async(_, {id})=> {
        return await prisma.pet.findUnique({
            where:{
                id: parseInt(id)
            }
        })
      },
    },
    // Resolvers for mutations
    Mutation:{

        addPet: async(_,{petToAdd})=>{
        const newPet= await prisma.pet.create({
                data: petToAdd
            })
            return newPet;
        } ,
        deletePet: async(_,{id})=>{
            return await prisma.pet.delete({
                where:{
                    id: parseInt(id)
                }
            })
        },
        editPet: async(_,{petToEdit})=> {
            const  pet= await prisma.pet.update({
                data: {
                    name: petToEdit.name,
                    type: petToEdit.type,
                    age: petToEdit.age,
                    breed: petToEdit.breed,
                },
                where:{
                    id: parseInt(petToEdit.id,10)
                }
            })

            return pet;
        },
    }
}