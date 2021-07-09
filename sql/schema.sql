CREATE TABLE users (
    id serial PRIMARY KEY,
    name VARCHAR (20) NOT NULL,
    email VARCHAR (40) NOT NULL,
    user_name VARCHAR (40) NOT NULL,
    password VARCHAR (10) NOT NULL
);

CREATE TABLE locations (
    id serial PRIMARY KEY,
    state_name text,
    location_name text,
    location_description text,
    location_image varchar(500),
    location_activities text
);

CREATE TABLE activities (
    id serial PRIMARY KEY,
    activity_name text,
    activity_level text,
    activity_terrain text
);

CREATE TABLE bookings (
    id serial PRIMARY KEY,
    booking_name text,
    booking_location text,
    booking_description text,
    booking_image varchar(500),
    booking_price integer
);

CREATE TABLE reviews (
    id serial PRIMARY KEY,
    score integer,
    content text,
    locations_id integer REFERENCES locations(id),
    users_id integer REFERENCES users(id)
);

CREATE TABLE itinerary (
    id serial PRIMARY KEY,
    users_id integer REFERENCES users(id),
    locations_id integer REFERENCES locations(id),
    activities_id integer REFERENCES activities(id),
    bookings_id integer REFERENCES bookings(id),
    reviews_id integer REFERENCES reviews(id)
);