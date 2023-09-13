module.exports.noIdInPath = async (req, res) => {
    return res.status(400).json({ message: "No ID specified in path" });
}