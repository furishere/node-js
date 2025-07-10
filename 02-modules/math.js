function add(a, b){
    return a + b
}
function sub(a, b){
    return a - b
}

// we use object function to export more module
module.exports = {
    addFun : add,
    subFunc : sub,
}

// another way to exports
exports.add = (a, b) => a + b

exports.add = (a, b) => a - b