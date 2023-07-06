import { Schema, model } from 'mongoose';

const tutorSchema = new Schema({
    tutorName : {
        type : String,
        required : true,
    },

    field : {
        type : String,
        required : true,
    },

    email : {
        type : String,
        required : true,
        unique : true,
    },

    password : {
        type : String,
        required : true,
    },

    postCount : {
        type : Number,
        default : 0,
    },

    followingCount : {
        type : Number,
        default : 0,
    },

    followersCount : {
        type : Number,
        default : 0,
    }

});

const Tutor = model('Tutor', tutorSchema);

module.exports = Tutor;
