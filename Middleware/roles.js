
function checkRole(roleArray) {
    return function (req,res,next) {
        index = roleArray.findIndex( (role) => req.user.Rol === role)
    
    if(index > -1){
        return next()
    }else{
        return res.status(401).send({error_message: 'no authorizated'})
        }
    }

}
module.exports = {checkRole}