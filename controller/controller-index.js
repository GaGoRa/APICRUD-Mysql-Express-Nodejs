const path = require('path')

function get(req, res) {
    
    try{
    res.status(200).sendFile(path.join(__dirname, '../public','/index.html'))
    
    }catch(err){
        console.log(err)
    }
    
}

module.exports = {
    get
    
}

