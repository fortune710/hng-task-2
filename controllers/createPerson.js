const { database } = require('../config/database.config');
const { getDocs, setDoc, doc } = require('firebase/firestore');

module.exports.createPerson = async (req, res) => {
    const { name, track } = req.body;

    if(!name) return res.status(400).send('`name` property is missing from Request Body')

    try {
        const currentCount = (await getDocs()).docs.length;
        const newPersonId = currentCount + 1;

        const newPersonRef = doc(database, "people", `${newPersonId}`);
        const newPerson = {
            name, 
            track
        };

        await setDoc(newPersonRef, newPerson)
        return res.status(201).json({ newPerson })
    } catch (e) {
        return res.status(500).json({ error: e, message: "Error while adding person" })
    }

}