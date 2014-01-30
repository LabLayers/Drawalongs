'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Article Schema
 */
var ArticleSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    end: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true
    },
    content: {
        type: String,
        default: '',
        trim: true
    },
    medium: {
        type: String,
        default: '',
        trim: true
    },
    rules: {
        type: String,
        default: '',
        trim: true
    }
});

/**
 * Validations
 */
ArticleSchema.path('title').validate(function(title) {
    return title.length;
}, 'Title cannot be blank');

/**
 * Statics
 */
ArticleSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('title', 'content').exec(cb);
};

mongoose.model('Match', ArticleSchema);
