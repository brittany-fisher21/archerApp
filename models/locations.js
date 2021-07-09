'use strict';

const db = require('./conn');

class Location {
    constructor(state_name, location_name, location_description, location_image, location_activities) {
        this.state_name = state_name;
        this.location_name = location_name;
        this.location_description = location_description;
        this.location_image = location_image;
        this.location_activities = location_activities;
    }

    // TBD

}

module.exports = Location;