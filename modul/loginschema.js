const mongoose = require('mongoose');
const schema = mongoose.Schema

let user = new schema({
    username: {type: 'string'  ,   require : true},
    password: {type: 'string', required: true}
},
{
    versionKey : false
}
)

const model = mongoose.model("user" , user);
module.exports = model

