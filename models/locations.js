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

    static async getAllLocations() {
        try {
            const response = await db.any(`SELECT * FROM locations;`);
            return response;
        } catch (err) {
            return err.message;
        }
    }

    async getLocationData() {
        try {
            const query = `SELECT location WHERE id = ${this.id}`;
            const response = await db.one(query);
            return response;
        } catch (err) {
            return err.message;
        }
    }
}

module.exports = Location;