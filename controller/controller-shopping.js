

function get(req, res) {
    res.status(200).send('get shopping');

}

function create(req, res) {
    res.status(200).send('Crearte shopping');
    
}

function deleter(req, res) {
    res.status(200).send('Delete  shopping');
    
}

function getList(req, res) {
    res.status(200).send('List shopping');
    
}

function update(req, res) {
    res.status(200).send('Update shopping');
    
}

module.exports = {
    get,
    create,
    deleter,
    getList,
    update

}