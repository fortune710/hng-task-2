const { database } = require('../config/database.config');
const { getDoc, doc } = require('firebase/firestore');

module.exports.getPersonById = async (req, res) => {
    const { user_id } = req.params;

    try {
        const personRef = doc(database, "people", user_id);
        const snapshot = await getDoc(personRef);

        const person = {
            id: snapshot.id,
            ...snapshot.data()
        }

        if(!snapshot.exists) {
            return res.status(404).json({ message: `Person with ID ${user_id} does not exist` });
        }

        return res.json({ person, message: "Person found" })
    }
    catch (e) {
        return res.status(500).json({ error: e, message: "Error while finding person" })
    }

}