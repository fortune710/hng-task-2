const { database } = require('../config/database.config');
const { getDocs, setDoc, doc, collection } = require('firebase/firestore');

module.exports.createPerson = async (req, res) => {
    
    const { name, track } = req.body;


    if(!name) {
        return res.status(400).json({ message: '`name` property is missing from request body' })
    }

    try {
        const peopleCollectionRef = collection(database, "people")
        const snapshot = await getDocs(peopleCollectionRef)
        const currentCount = snapshot.docs.length;
        
        const newPersonId = currentCount + 1;

        const newPersonRef = doc(database, "people", `${newPersonId}`);
        const newPerson = {
            name, 
            track
        };

        await setDoc(newPersonRef, newPerson)
        return res.status(201).json({ newPerson: { id: newPersonId, ...newPerson } })
    } catch (e) {
        return res.status(500).json({ error: e, message: "Error while adding person" })
    }

}

module.exports.createPersonFromParams = async (req, res) => {
    
    const { name } = req.params;


    if(!name) {
        return res.status(400).json({ message: '`name` property is missing from endpoint' })
    }

    try {
        const peopleCollectionRef = collection(database, "people")
        const snapshot = await getDocs(peopleCollectionRef)
        const currentCount = snapshot.docs.length;
        
        const newPersonId = currentCount + 1;

        const newPersonRef = doc(database, "people", `${newPersonId}`);
        const newPerson = {
            name, 
        };

        await setDoc(newPersonRef, newPerson)
        return res.status(201).json({ newPerson: { id: newPersonId, ...newPerson } })
    } catch (e) {
        return res.status(500).json({ error: e, message: "Error while adding person" })
    }

}