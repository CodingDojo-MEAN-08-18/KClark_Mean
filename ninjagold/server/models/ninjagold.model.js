const mongoose = require('mongoose');

const { Schema } = mongoose;

const ninjaGoldSchema = new Schema({
    sessionId: {
        type: String,
        required: true
    }, 
    activity: {
        type: String,
        required: [true, 'Activity is required']
    },
    newGold: {
        type: Number,
        required: [true, 'New gold value is required']
    },
    goldBalance: {
        type: Number,
        required: [true, 'Gold balance is required']
    }
}, {
    timestamps: true
});
