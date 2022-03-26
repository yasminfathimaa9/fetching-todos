const commonResponse = (req,res) => {

    return res.json ({ message : "hello user"});
}

module.exports = {
    commonResponse
}