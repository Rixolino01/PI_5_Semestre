const responseModel = {
    sucess: false,
    data: [],
    error: []
}

module.exports = {

    async login (req, res) {
        const response = {...responseModel}

    
        return res.json(response)
    }
}