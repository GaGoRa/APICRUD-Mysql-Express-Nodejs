
function get(req, res) {
    res.status(200).send('get store');

}

function create(req, res) {
    res.status(200).send('Crearte store');
    
}

function deleter(req, res) {
    res.status(200).send('Delete  store');
    
}

function getList(req, res) {
    res.status(200).send('List store');
    
}

function update(req, res) {
    res.status(200).send('Update store');
    
}

module.exports = {
    get,
    create,
    deleter,
    getList,
    update

}