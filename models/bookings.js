'use strict';

const db = require('./conn');

class Booking {
    constructor(booking_name, booking_location, booking_description, booking_image, booking_price) {
        this.booking_name = booking_name;
        this.booking_location = booking_location;
        this.booking_description = booking_description;
        this.booking_image = booking_image;
        this.booking_price = booking_price;
    }

    // TBD

}

module.exports = Booking;