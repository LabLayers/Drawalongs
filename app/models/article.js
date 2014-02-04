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
    url: {
        type: String,
        default: 'http://no-content/',
        trim: true
    },
    match: {
        type: Schema.ObjectId,
        ref: 'Match'
    },
    title: {
        type: String,
        default: 'Untitled',
        trim: true
    },
    content: {
        type: String,
        default: '',
        trim: false
    },
    tags: {
        type: String,
        default: '',
        trim: true
    },
    comments: {
        type: String,
        default: 'disqus',
        trim: true
    },
    critique: {
        type: Boolean,
        default: false,
    },
    nsfw: {
        type: Boolean,
        default: false,
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

/**
 * Validations
 */
ArticleSchema.path('title').validate(function(title) {
    return title.length;
}, 'Title cannot be blank');
ArticleSchema.path('url').validate(function(title) {
    return title.length;
    if (x.match(/deviantart|sta|imgur|gist/)) {
        return true;
    } else {
        return false;
    }
}, 'URL cannot be blank or does not contain a proper URL.');

/**
 * Statics
 */
ArticleSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').exec(cb);
};

mongoose.model('Article', ArticleSchema);
