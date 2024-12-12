import db from '../../db/db.js'
import { getItem,listItems } from '../models/pets.models.js'

export const getPet = id =>{
    try {
        
        const pet = getItem(id);
        return pet;
    } catch (error) {
        console.error("Error",error);
        
    }
}

export const listPets =()=>{
    try {
        const pets= listItems();
        return pets;
        
    } catch (error) {
        console.error("Error" , error);
        
    }

}