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
        return editedPet;
    } catch (error) {
        console.error("Error",error);
        
    }
}


export const deletePet = id =>{
    try {
        
        const resp= deleteItem(id);
        return resp;
    } catch (error) {
        console.error("Error",error);
        
    }
}