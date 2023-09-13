const { database } = require('../config/database.config');
const { getDoc, doc, deleteDoc, updateDoc } = require('firebase/firestore');

module.exports.updatePersonById = async (req, res) => {
    const { user_id } = req.params;
    const updatedValues = req.body;

    try {
        const personRef = doc(database, "people", user_id);
        const snapshot = await getDoc(personRef);

        if(!snapshot.exists()) {
            return res.status(404).json({ message: `Person with ID ${user_id} does not exist` });
        }

        await updateDoc(personRef, { ...updatedValues })

        const newSnapshot = await getDoc(personRef);
        const updatedPerson = newSnapshot.data()

        return res.json({ 
            message: `Person with ID ${user_id} has been updated`,
            person: updatedPerson
        })
    }
    catch (e) {

        if(e.code === "not-found") {
            return res.status(404).json({ message: `Person with ID ${user_id} does not exist` });
        }

        return res.status(500).json({ error: e, message: "Error while updating person" })
    }

}