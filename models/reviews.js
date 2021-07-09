'use strict';

const db = require('./conn');

class Review {
    constructor(score, content, locations_id, user_id) {
        this.score = score;
        this.content = content;
        this.locations_id = locations_id;
        this.user_id = user_id;
    }

    // TBD

}

module.exports = Review;