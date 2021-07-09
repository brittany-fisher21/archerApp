'use strict';

const db = require('./conn');

class Activity {
    constructor(activity_name, activity_level, activity_terrain) {
        this.activity_name = activity_name;
        this.activity_level = activity_level;
        this.activity_terrain = activity_terrain;
    }

    // TBD

}

module.exports = Activity;