import { addItem,deleteItem,editItem  } from '../models/pets.models'


export const addPet = petToAdd =>{
    try {
        const newPet=  addItem(petToAdd)
        return newPet;
    } catch (error) {
        console.error("Error",error);
        
    }
}


export const editPet = (id,petToEdit) =>{
    try {
        
        const editedPet= editItem(id,petToEdit)
    } catch (error) {
        console.error("Error",error);
        
    }
}


export const deletePet = id =>{
    try {
        
        const petsAfterDeletion= deleteItem(id);
        return petsAfterDeletion;
    } catch (error) {
        console.error("Error",error);
        
    }
}