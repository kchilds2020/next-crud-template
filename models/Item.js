const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxLength: [40, 'Name cannot be longer than 40 characters']
    },
    description:{
        type: String,
        required: true,
        maxLength: [200, 'Cannot be longer than 200 characters']
    }
})

module.exports = mongoose.models.Item || mongoose.model('Item', ItemSchema)