const notFound = (req,res) =>{
    res.status(404).send("Route Not Found,  please try another")
}

module.exports = notFound;