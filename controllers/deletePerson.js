const { database } = require('../config/database.config');
const { getDoc, doc, deleteDoc } = require('firebase/firestore');

module.exports.deletePersonById = async (req, res) => {
    const { user_id } = req.params;

    try {
        const personRef = doc(database, "people", user_id);
        const snapshot = await getDoc(personRef);

        if(!snapshot.exists()) {
            return res.status(404).json({ message: `Person with ID ${user_id} does not exist` });
        }

        await deleteDoc(personRef)
        return res.json({ message: `Person with ID ${user_id} has been deleted` })
    }
    catch (e) {
        if(e.code === "not-found") {
            return res.json({ message: `Person with ID ${user_id} does not exist` });
        }

        return res.status(500).json({ error: e, message: "Error while deleting person" })
    }

}