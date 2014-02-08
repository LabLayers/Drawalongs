'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Match Schema
 */
var MatchSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    end: {
        type: Date,
        default: Date.now
    },
    status: {
        type: Boolean,
        default: true,
    },
    title: {
        type: String,
        default: '',
        trim: true
    },
    content: {
        type: String,
        default: '',
        trim: false
    },
    medium: {
        type: String,
        default: '',
        trim: false
    },
    rules: {
        type: String,
        default: '',
        trim: false
    },
    tags: {
        type: String,
        default: '',
        trim: true
    },
    featured: {
        type: Boolean,
        default: false,
    },
    desktop: {
        type: Boolean,
        default: false,
    },
    comments: {
        type: String,
        default: 'disabled',
        trim: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

// TEST
// MatchSchema.findById(req.params.id);

/**
 * Validations
 */
MatchSchema.path('title').validate(function(title) {
    return title.length;
}, 'Title cannot be blank');

/**
 * Statics
 */
MatchSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').exec(cb);
};

mongoose.model('Match', MatchSchema);
