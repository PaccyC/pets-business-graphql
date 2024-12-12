import db from "../../db/db.js"

export const getItem = id => {
    try {
        
        const pet= db?.pets?.filter(pet=> pet.id === parseInt(id))[0];
        return pet;
    } catch (error) {
        console.log("Error", error);
        return error
        
    }
}

export const listItems = ()=>{
    try {
        return db?.pets
    } catch (error) {
        console.log("Error", error);
        return error
        
    }
}

export const editItem = (id, data)=>{
    try {
        const index= db.pets.findIndex(pet =>pet.id === parseInt(id))

        if(index === -1) throw new Error("Pet not found");
        else {
            data.id = parseInt(data.id)
            db.pets[index]= data;
            return db.pets[index]
        }
        
    } catch (error) {
        console.error("Error", error);
        return error
        
    }
}

export const addItem =(data)=>{
    try{
        data.id= db.pets.length +1;
        const newPet=  { id: data.id, ...data}
        db.pets.push(newPet)
    }
    catch(error){
        console.error("Error", error);
        return error
        
    }
}



export const deleteItem = (id)=>{
    try {
        return db.pets.filter((pet)=> pet.id !== parseInt(id));
    } catch (error) {
        console.error("Error", error);
        return error
        
    }
}