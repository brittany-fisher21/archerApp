'use strict';

const db = require('./conn');

class Itinerary {
    constructor(users_id, locations_id, activities_id, bookings_id, reviews_id) {
        this.users_id = users_id;
        this.locations_id = locations_id;
        this.activities_id = activities_id;
        this.bookings_id = bookings_id;
        this.reviews_id = reviews_id;
    }

    // TBD

}

module.exports = Itinerary;