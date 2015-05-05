/**
 * Created by SHERRI on 5/5/15.
 */
var mongoose=require('mongoose');

//create story schema for the database
var storiesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }

});

//export the model schema whenever it's required
module.exports = storiesSchema;