'use strict';

const { response } = require('express');
const db = require('./conn');

class Booking {
    constructor(booking_name, booking_location, booking_description, booking_image, booking_price) {
        this.booking_name = booking_name;
        this.booking_location = booking_location;
        this.booking_description = booking_description;
        this.booking_image = booking_image;
        this.booking_price = booking_price;
    }

    static async getAllBookings() {
        try {
            const response = await db.any(`SELECT * FROM bookings;`);
            return response;
        } catch (err) {
            return err.message;
        }
    }

    async getBookingData() {
        try {
            const query = `SELECT booking WHERE id = ${this.id}`;
            return response;
        } catch (err) {
            return err.message;
        }
    }
}

module.exports = Booking;