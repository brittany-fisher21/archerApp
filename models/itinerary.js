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

    static async makeItinerary(users_id) {
        try {
            const query = (`SELECT * FROM itinerary
            FULL JOIN users ON users.id = itinerary.users_id
            FULL JOIN locations ON locations.id = itinerary.locations_id
            FULL JOIN bookings ON bookings.id = itinerary.bookings_id
            WHERE plan.users_id = ${users_id};`)
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.error('ERROR: ', error);
            return error;
        }
    }

}

module.exports = Itinerary;